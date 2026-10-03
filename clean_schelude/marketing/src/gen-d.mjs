// Кімнатні версії кожного ролика: v1 Kitchen / v2 Bedroom / v3 Living room.
// Кроки й хвилини — з шаблонів застосунку (room_routines.dart) і плану скану.
import { A, C, esc, bg, cap, pin, pill, mascot, person, svg } from './gen-a.mjs';

export const rooms = [
  { v: 'v1', key: 'kitchen', name: 'Kitchen', room: 'kitchen', pastel: '#FFDCC2', ink: '#8A4B1E', art: 'kitchen',
    plan: [['Wash the dishes', 10], ['Clear the counter', 5], ['Take out the trash', 3], ['Mop the floor', 5]],
    today: ['Clear the kitchen counter', 8], spot: 'the sink', pins: [[150, 168], [60, 186], [110, 236], [150, 286]] },
  { v: 'v2', key: 'bedroom', name: 'Bedroom', room: 'bedroom', pastel: '#E4DDF6', ink: '#5B47A8', art: 'bedroom',
    plan: [['Make the bed', 3], ['Clothes to the hamper', 5], ['Clear the nightstand', 3], ['Clear the floor', 5]],
    today: ['Make the bed and clear the chair', 6], spot: 'the chair', pins: [[120, 180], [100, 272], [56, 164], [40, 250]] },
  { v: 'v3', key: 'living', name: 'Living room', room: 'living room', pastel: '#FAD8DF', ink: '#A8203B', art: 'living-room',
    plan: [['Cups to the kitchen', 2], ['Clear the coffee table', 4], ['Fold the blanket', 2], ['Boxes off the floor', 5]],
    today: ['Clear the coffee table', 7], spot: 'the coffee table', pins: [[100, 222], [76, 240], [150, 190], [56, 262]] },
];
const total = (r) => r.plan.reduce((s, [, m]) => s + m, 0);

// Хук кожного ролика під кімнату. {room}, {min} (весь план), {daily} (одна справа Today), {spot}.
const H = {
  A1: 'POV: your {room} just told you where to start',
  A2: 'I let an app judge my {room} 😬',
  A3: '“do my {room} next 😭” — ok, let’s see',
  A4: 'Same {room}. {min} minutes.',
  A5: '4 steps. {min} minutes. My whole {room}. ⏱',
  B6: 'For when your {room} is so bad you can’t start',
  B7: 'They’re 20 minutes away and my {room} looks like this 😱',
  B8: 'Saturday: 5 hours. Every day: {daily} min. Same {room}.',
  B9: 'Every chore app made me feel guilty about my {room}. This one doesn’t.',
  C10: 'He gets dusty so your {room} doesn’t',
  C11: { kitchen: 'One small thing before coffee ☕ — the dishes', bedroom: 'Make the bed before coffee ☕ — {daily} min', living: 'Clear the coffee table before coffee ☕' },
  K1: 'watch me flip my 3-week doom {room} into 4 tiny steps',
  K2: 'my {room} before I found Moppy',
  K3: 'Them: “my {room} is a mess but I have no motivation” / Me since a fluffy dog tells me what to clean:',
  K4: { kitchen: '…and my sink has been empty for 3 weeks.', bedroom: '…and my chair hasn’t had a clothes pile in 3 weeks.', living: '…and my coffee table has been clear for 3 weeks.' },
  K5: 'Pre-holiday {room} reset, one tiny step at a time ✨',
  K6: 'How I keep my {room} calm without a cleaning day',
  K7: 'If your mom didn’t teach you how to clean your {room}, here’s a fluffy dog to help you',
  K8: 'mom: I’ll be there in 30 / me, looking at my {room}:',
  K9: 'How my partner and I stopped fighting about the {room}',
};
const fill = (t, r) => t.replace(/\{room\}/g, r.room).replace(/\{min\}/g, total(r)).replace(/\{daily\}/g, r.today[1]).replace(/\{spot\}/g, r.spot);
export const hookFor = (id, r) => { const h = H[id]; if (!h) return null; return fill(typeof h === 'string' ? h : h[r.key], r); };

// Що з матеріалу вже є, а що треба зняти — для кожної версії.
function footage(a, r) {
  const scanBased = a.when === 'scan';
  if (a.id === 'A4') return r.key === 'kitchen' ? 'Готово: кухня з ASO-ролика.' : `Потрібне фото «до» і «після» ${r.key === 'bedroom' ? 'спальні' : 'вітальні'} з ОДНОГО кадру (як кухня власника).`;
  if (a.id === 'C10' || a.id === 'C11') return `Remotion: фон — ілюстрація «${r.art}» з хендофа (messy → clean), уже є.`;
  if (scanBased) return `Після MVP-13: скан справжньої ${r.key === 'kitchen' ? 'кухні' : r.key === 'bedroom' ? 'спальні' : 'вітальні'}.`;
  return `Зйомка в ${r.key === 'kitchen' ? 'кухні' : r.key === 'bedroom' ? 'спальні' : 'вітальні'}; у застосунку — «${r.today[0]}» (${r.today[1]} хв).`;
}

const wrap = (t, n = 24) => { const out = []; let line = ''; for (const w of t.split(' ')) { if ((line + ' ' + w).trim().length > n && line) { out.push(line); line = w; } else line = (line + ' ' + w).trim(); } if (line) out.push(line); return out.slice(0, 4); };

// Ключовий кадр версії: ілюстрація кімнати з хендофа + хук, піни для «магічних», маскот для гілки C.
function keyFrame(a, r) {
  const messy = !(a.id === 'C10' || a.id === 'K4');
  const art = `<image href="${A}rooms/${r.art}-${messy ? 'messy' : 'clean'}.jpg" x="-14" y="96" width="208" height="224" preserveAspectRatio="xMidYMid slice"/>`;
  const usePins = a.when === 'scan' || ['A4', 'A5', 'K5'].includes(a.id);
  const pins = usePins ? r.plan.map(([t, m], i) => pin(r.pins[i][0], r.pins[i][1], i + 1, `${t} · ${m} min`, r.pins[i][1] > 200 ? 'up' : 'down')).join('') : '';
  const extra = a.branch === 'mascot' ? mascot(a.id === 'C10' ? '04-dusty' : '01-good-morning', 104, 220, 76) : a.branch === 'pain' && !usePins ? person(140, 196, { s: 0.8, mood: ['B6', 'B7', 'K8'].includes(a.id) ? 'panic' : 'happy' }) : '';
  const lines = wrap(hookFor(a.id, r), 24);
  return svg(bg(r.pastel) + art + pins + extra + cap(lines, 22, { size: 10 }) + pill(90, 306, `${r.name} · ${usePins ? total(r) : r.today[1]} min`, { bgc: '#fff', fg: r.ink }));
}

export function variantsHtml(a) {
  return `<div class="vars"><div class="lbl" style="margin-bottom:8px">Версії під кімнати — тестуємо всі три</div><div class="vgrid">${rooms.map((r) => {
    const usePins = a.when === 'scan' || ['A4', 'A5', 'K5'].includes(a.id);
    return `<div class="vcard"><div class="vsb">${keyFrame(a, r)}</div><div class="vbody">
      <div><span class="vtag" style="background:${r.pastel};color:${r.ink}">${a.id}·${r.v}</span> <b>${r.name}</b></div>
      <div class="vhook"><q>${esc(hookFor(a.id, r))}</q></div>
      <div class="vplan">${usePins ? r.plan.map(([t, m], i) => `${i + 1}. ${esc(t)} · ${m} min`).join('<br>') + `<br><b>${total(r)} min разом</b>` : `Today: «${esc(r.today[0])}» · About ${r.today[1]} min`}</div>
      <div class="vfoot">${esc(footage(a, r))}</div></div></div>`;
  }).join('')}</div></div>`;
}
