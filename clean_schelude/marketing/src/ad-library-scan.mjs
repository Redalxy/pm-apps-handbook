// Знімає оголошення конкурентів із Meta Ad Library (публічно, без логіна).
import { writeFileSync } from 'node:fs';
const mod = await import('/redlabs/spilno-app/scripts/aso/browser.mjs');
const KEY = '"search_results_connection":';
const OUT = new URL('.', import.meta.url).pathname;
const queries = process.argv.slice(2);

function jsonAt(body, from) {
  let depth = 0, inStr = false, esc = false;
  for (let i = from; i < body.length; i++) {
    const c = body[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; continue; }
    if (c === '"') inStr = true; else if (c === '{') depth++; else if (c === '}') { depth--; if (depth === 0) { try { return JSON.parse(body.slice(from, i + 1)); } catch { return null; } } }
  }
  return null;
}
function payload(html) {
  const out = []; let count = null; let at = html.indexOf(KEY);
  while (at >= 0) {
    const d = jsonAt(html, at + KEY.length);
    if (d && Array.isArray(d.edges)) {
      count = d.count ?? count;
      for (const e of d.edges) for (const it of e?.node?.collated_results ?? []) out.push(it);
    }
    at = html.indexOf(KEY, at + KEY.length);
  }
  return { count, items: out };
}
const day = (s) => (s ? new Date(s * 1000).toISOString().slice(0, 10) : null);
function slim(it) {
  const s = it.snapshot ?? {};
  const v = s.videos?.[0] ?? s.cards?.find(c => c.video_sd_url) ?? null;
  return {
    id: it.ad_archive_id, page: it.page_name, pageId: it.page_id, active: it.is_active,
    since: day(it.start_date), until: day(it.end_date), copies: it.collation_count ?? 1,
    platforms: it.publisher_platform, format: s.display_format,
    title: s.title, body: s.body?.text ?? s.cards?.[0]?.body ?? null, cta: s.cta_text, link: s.link_url ?? s.cards?.[0]?.link_url,
    video: v?.video_sd_url ?? v?.video_hd_url ?? null, poster: v?.video_preview_image_url ?? null,
    image: s.images?.[0]?.original_image_url ?? s.cards?.[0]?.original_image_url ?? null,
    cards: (s.cards ?? []).length,
  };
}
const lib = (p) => { const u = new URL('https://www.facebook.com/ads/library/'); for (const [k, v] of Object.entries(p)) u.searchParams.set(k, v); return u.toString(); };

const bin = mod.findChrome();
const { ws, stop } = await mod.launchChrome({ bin, root: OUT, profile: 'chrome-prof' });
const cdp = await mod.connectCdp(ws);
const session = await mod.openTab(cdp);
await cdp.send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36', acceptLanguage: 'en-US,en' }, session);
const ev = async (x) => (await cdp.send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true }, session)).result?.value;
async function visit(url, scrolls = 0) {
  await ev('window.__old=true').catch(() => 0);
  await cdp.send('Page.navigate', { url }, session);
  const until = Date.now() + 25000;
  while (Date.now() < until) { await mod.sleep(1500); if (await ev(`!window.__old && document.documentElement.innerHTML.includes(${JSON.stringify(KEY)})`).catch(() => false)) break; }
  for (let i = 0; i < scrolls; i++) { await ev('window.scrollTo(0, document.body.scrollHeight)'); await mod.sleep(2500); }
  return { html: String(await ev('document.documentElement.outerHTML')), text: String(await ev('document.body?document.body.innerText:""')) };
}
const result = {};
for (const q of queries) {
  const [kind, val] = q.split(':');
  const url = kind === 'page'
    ? lib({ active_status: 'all', ad_type: 'all', country: 'ALL', media_type: 'all', view_all_page_id: val, sort_data__direction: 'desc', sort_data__mode: 'relevancy_monthly_grouped' })
    : lib({ active_status: 'all', ad_type: 'all', country: 'ALL', media_type: 'all', q: `"${val}"`, search_type: 'keyword_exact_phrase' });
  const { html, text } = await visit(url, kind === 'page' ? 3 : 0);
  const p = payload(html);
  result[q] = { url, count: p.count, ads: p.items.map(slim), head: text.slice(0, 300) };
  console.log(q, 'count', p.count, 'read', p.items.length, p.items.length ? '' : text.slice(0, 200).replace(/\n/g, ' | '));
}
writeFileSync(OUT + 'scan-' + Date.now() + '.json', JSON.stringify(result, null, 1));
stop(); process.exit(0);
