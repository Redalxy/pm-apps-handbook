// Збирає clean_schelude/marketing.html — план відеомаркетингу Moppy.
import fs from 'node:fs';
import { A, esc } from './gen-a.mjs';
import { ads, branches, when, hooks } from './gen-b.mjs';

const OUT = '/redlabs/pm-apps-handbook/clean_schelude/marketing.html';
const frameHtml = (f) => `<figure class="fr"><div class="sb">${f.s}</div><figcaption><b>${f.t}</b>${esc(f.d)}</figcaption></figure>`;
const adHtml = (a) => `
<section class="ad" id="${a.id}">
  <div class="adh">
    <div class="adid">${a.id}</div>
    <div><h3>${esc(a.name)}</h3>
      <div class="meta"><span class="tag ${branches[a.branch].cls}">${branches[a.branch].tag}</span> <span class="tag ${when[a.when].cls}">${when[a.when].t}</span> <span class="mx">${esc(a.fmt)}</span></div>
    </div>
  </div>
  <div class="hook">Хук: <q>${esc(a.hook)}</q></div>
  <div class="grid g2 info"><div><div class="lbl">Чому чіпляє</div>${esc(a.why)}</div><div><div class="lbl">Аудиторія</div>${esc(a.aud)}<div class="lbl" style="margin-top:10px">Звук і голос</div>${esc(a.vo)}</div></div>
  <div class="strip">${a.frames.map(frameHtml).join('')}</div>
</section>`;
const rows = ads.map((a) => `<tr><td><a href="#${a.id}"><b>${a.id}</b></a></td><td>${esc(a.name)}</td><td><span class="tag ${branches[a.branch].cls}">${branches[a.branch].tag}</span></td><td>${esc(a.fmt)}</td><td><span class="tag ${when[a.when].cls}">${when[a.when].t}</span></td><td><q>${esc(a.hook)}</q></td></tr>`).join('');
const count = (f) => ads.filter(f).length;
const section = (b) => ads.filter(a => a.branch === b).map(adHtml).join('');

const css = fs.readFileSync(new URL('./page.css', import.meta.url), 'utf8');
const html = `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Moppy — план відеомаркетингу</title>
<link rel="icon" type="image/svg+xml" href="../redlabs-favicon.svg">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@600&family=Nunito:wght@600;700;800&display=swap">
<style>
${css}</style>
</head>
<body>
<div class="wrap">

<span class="rl-mark" title="RedLabs">
  <span class="wm"><img src="../logo/redlabs-word-light.svg" alt="RedLabs"></span>
  <span class="fl"><img src="../logo/redlabs-flame-anim-light.svg" alt=""></span>
</span>
<div class="kicker">Moppy · маркетинг · відеокреативи</div>
<div class="stamp"><b>Оновлено: 03.10.2026</b> · <span style="color:var(--dim)">робочий план, поповнюється · поруч — <a href="index.html">вікі проєкту Clean Schedule</a></span></div>
<h1>План відеомаркетингу Moppy: ${ads.length} роликів із розкадровками</h1>
<div class="sub">Що знімаємо для Meta (Reels, Stories), TikTok і Apple Search Ads, щоб людина зупинилась на першій секунді, встановила застосунок і почала тріал. У кожного ролика — хук, чому він чіпляє, і розкадровка: живі кадри з нашого ASO-ролика плюс ескізи сцен, які треба зняти. Ескізи показують композицію й дію, а не фінальну картинку.</div>

<div class="grid g3">
  <div class="card"><div class="lbl">Роликів у плані</div><div class="val">${ads.length}</div><div class="note">${count(a => a.branch === 'magic')} — чарівний момент, ${count(a => a.branch === 'pain')} — біль → краще життя, ${count(a => a.branch === 'mascot')} — маскот і звичка</div></div>
  <div class="card"><div class="lbl">Можна вже зараз</div><div class="val" style="color:var(--accent)">${count(a => a.when === 'now')} без зйомок · ${count(a => a.when === 'live')} зі зйомкою</div><div class="note">анімація з наявного Remotion-проєкту і живі сцени про план, кроки й Today</div></div>
  <div class="card"><div class="lbl">Чекають справжній скан</div><div class="val" style="color:var(--warn)">${count(a => a.when === 'scan')}</div><div class="note">«наведи камеру на свою кімнату» — лише після MVP-13</div></div>
</div>

<h2 id="tree">1. Який формат: дерево рішень</h2>
<div class="tree">
  <div class="node q">Чи є в застосунку «чарівний момент»?</div>
  <div class="node yes"><small>Так → вести з віральності</small>Плавно показати чарівний момент
    <span class="us">Moppy: фото безладу → за секунду піни на твоїх речах і план «4 кроки · 23 хв». Друге «вау» — повзунок до/після на справжній кухні.</span></div>
  <div class="node no"><small>Ні → чи вирішує болючу проблему?</small>Біль → продукт → краще життя
    <span class="us" style="color:var(--dim)">Для нас це ДРУГИЙ ешелон: холодніші аудиторії й ретаргет. Біль ніші з відгуків — «не знаю, з чого почати», перевантаженість, провина.</span></div>
</div>
<div class="verdict coral"><b>Висновок:</b> головна гілка — «Так». Перша секунда кожного ролика гілки A — піни на безладі або повзунок до/після. Гілка B відкривається болем словами глядача й закривається тим самим «вау». Гілка C (маскот) — наша третя ставка, якої немає в конкурентів.</div>

<h3 class="h3s">Що вже є для монтажу — кадри з ASO-ролика (29.5 с) і скрінів</h3>
<div class="ref">
  ${['aso-1.0.jpg', 'aso-6.0.jpg', 'aso-9.6.jpg', 'aso-13.0.jpg', 'aso-16.0.jpg', 'aso-18.4.jpg', 'aso-21.5.jpg', 'shot06-widgets.jpg', 'shot05-day-week.jpg', 'aso-28.0.jpg'].map(f => `<img src="${A}${f}" alt="" loading="lazy">`).join('')}
</div>

<h2 id="rules">2. Рамки, які не порушуємо</h2>
<div class="grid g2">
  <div class="verdict warn"><b>Скан поки демонстраційний.</b> Справжня камера приходить з MVP-13. Ролики, де людина наводить телефон на СВОЮ кімнату (A1–A3), запускаємо лише після нього. Інакше реклама обіцяє те, чого застосунок не робить: однозіркові «it doesn’t scan my room» і ризик відмови модерації Meta та Apple.</div>
  <div class="verdict warn"><b>Без діагнозів у таргеті й тексті.</b> Кут «ADHD» конвертить, але прямий таргет на ADHD — бан рекламного акаунта Meta. Формулюємо через «overwhelmed», «can’t start», «too much».</div>
  <div class="verdict"><b>Чесний фінал.</b> Hard paywall: на кінцевій картці «Try 7 days free · yearly plan · cancel anytime», а не «free app» чи «unlimited». Інакше — відгуки «I go to try it, it charges me», як у Chorefriend.</div>
  <div class="verdict"><b>Жодних вигаданих відгуків і нагород.</b> UGC знімають реальні люди, що користувались застосунком, з позначкою «Paid partnership». Ніяких «№1», зірок і цитат, яких ніхто не казав. Музика — лише ліцензована (Meta Sound Collection, TikTok Commercial Music Library).</div>
  <div class="verdict"><b>Секундомір лише вперед.</b> У Moppy немає «не встиг», тому зворотних відліків і червоних «overdue» під нашим брендом у роликах немає.</div>
  <div class="verdict"><b>Показуємо лише те, що є в застосунку.</b> Чату немає — у роликах його теж немає. Маскот — лише затверджені PNG, без перемальовування. Чужих брендів і логотипів у кадрі немає.</div>
</div>

<h2 id="matrix">3. Усі ролики одним списком</h2>
<div class="scroll"><table>
<thead><tr><th>#</th><th>Ролик</th><th>Гілка</th><th>Формат</th><th>Коли</th><th>Хук (перша секунда)</th></tr></thead>
<tbody>${rows}</tbody></table></div>

<h2 id="a">4. Гілка A — показати чарівний момент</h2>
${section('magic')}

<h2 id="b">5. Гілка B — біль → продукт → краще життя</h2>
${section('pain')}

<h2 id="c">6. Гілка C — маскот і звичка</h2>
${section('mascot')}

<h2 id="hooks">7. Бібліотека хуків для тестів</h2>
<div class="sub" style="margin-bottom:6px">Хук — це перша 1–1.5 с: текст на екрані плюс перший кадр. Переможний хук потім ставимо на інші тіла роликів.</div>
<div class="hooks">${hooks.map(([h, b]) => `<div>${esc(h)}<span>${b}</span></div>`).join('')}</div>

<h2 id="specs">8. Вимоги до кожного ролика</h2>
<div class="grid g2">
  <div class="card"><div class="lbl">Формат</div><ul>
    <li>9:16, 1080×1920, 15–25 с для Reels і TikTok; окремо 886×1920 до 30 с — App Preview і Apple Search Ads.</li>
    <li>Хук за 1.5 с; перший кадр уже з рухом, без логотипа й заставки.</li>
    <li>Субтитри й текст на екрані завжди — більшість дивиться без звуку.</li>
    <li>Важливе — у безпечній зоні: не в нижніх ~20% (там підпис і кнопки) і не в правій смузі з лайками.</li></ul></div>
  <div class="card"><div class="lbl">Бренд</div><ul>
    <li>Корал <code>#FF4D6A</code>, тло <code>#FFF5F7</code>, «done» <code>#2E6B45</code>; заголовки Lora, інтерфейс Nunito.</li>
    <li>Одна коралова дія на кадр; червоного для помилок немає.</li>
    <li>Кінцева картка: Moppy махає + іконка + «Tiny steps to a calmer home» + «Try 7 days free».</li></ul></div>
</div>

<h2 id="test">9. Як запускаємо й міряємо</h2>
<div class="phase p0"><b>Хвиля 0 — зараз, без зйомок:</b> A4, C10, C11 (анімована версія). Монтуємо в наявному Remotion-проєкті <code>/redlabs/moppy-video/moppy-remotion</code> з того, що вже намальовано. Мета — побачити, яка гілка дає найкращий hook rate, ще до витрат на креаторів.</div>
<div class="phase p1"><b>Хвиля 1 — живі зйомки без скану:</b> A5, B6, B7, B8, B9. 2–3 UGC-креатори, по 2–3 хуки на ролик. Ці історії тримаються на плані, кроках, Today і віджеті — усе вже працює в застосунку.</div>
<div class="phase p2"><b>Хвиля 2 — після MVP-13:</b> A1, A2, A3 — головні вірусні ролики зі справжнім сканом. A2 і A3 ведемо як органічні серії, найкращі піднімаємо в Spark Ads і partnership ads.</div>
<div class="card" style="margin-top:16px"><div class="lbl">Схема тесту й метрики</div><ul>
  <li><b>3 хуки × 2 тіла</b> на гілку; один креатив — одне оголошення, бюджет рівномірно, 3–4 дні до рішення.</li>
  <li><b>Hook rate</b> (перегляди 3 с ÷ покази) — фільтр хуків; <b>hold rate</b> (15 с ÷ 3 с) — фільтр тіла.</li>
  <li><b>CTR → встановлення → старт тріалу → оплата</b> — фінальний суддя; масштабуємо за вартістю старту тріалу, а не за кліками.</li>
  <li>Цільові пороги ставимо після хвилі 0 за власними даними — готових цифр ніші в нас немає, вигадувати їх не будемо.</li>
  <li>Переможець хвилі → 3–5 варіацій хука на те саме тіло → масштаб.</li></ul></div>

<h2 id="next">10. Що потрібно, щоб почати</h2>
<ul>
  <li><b>Від нас:</b> змонтувати A4, C10, C11 у Remotion (окремі композиції 1080×1920 поруч з App Preview).</li>
  <li><b>Від власника:</b> рекламні кабінети Meta й TikTok під Moppy; 2–3 UGC-креатори (US/UK), які справді користуються застосунком; бюджет хвилі 0.</li>
  <li><b>Для хвилі 2:</b> реліз MVP-13 (справжній скан) — після нього A1–A3 знімаються за цією розкадровкою.</li>
</ul>

<div class="foot">Moppy — House Cleaning Schedule · RedLabs · план складено 03.10.2026 на основі ASO-ролика й скріншотів (<code>moppy-video/moppy-remotion/out</code>) і <a href="index.html#marketing">розділу «Маркетинг» вікі ніші</a>. Ескізи в розкадровках — схеми композиції, не фінальний арт.</div>
</div>
</body>
</html>`;
fs.writeFileSync(OUT, html);
console.log('ok', html.length);
