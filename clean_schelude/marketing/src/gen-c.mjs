// Сценарії на основі топ-креативів конкурентів (Meta Ad Library, зріз 03.10.2026).
import { A, C, bg, sparkle, kitchen, dishes, bubbles, notes, person, phone, pin, check, cap, pill, timer, mascot, img, living, thought, endCard, svg } from './gen-a.mjs';

const lib = (id) => `https://www.facebook.com/ads/library/?id=${id}`;
const ref = (id, n) => Array.from({ length: n }, (_, i) => `${A}comp/${id}-${i + 1}.jpg`);

// Топ-креативи: те, що крутиться найдовше або має найбільше копій.
export const comps = [
  { key: 'sw-reset', brand: 'Sweepy', id: '577212785151966', since: '2025-01-20', days: 621, copies: '2 + та сама відеоверсія ще в 5 оголошеннях «Your Cleaning Checklist» (04–08.2026)', active: true, len: '45 с',
    hook: '«Pre-holiday reset ✨» — POV, лише руки', what: 'Швидкі нарізки прибирання від першої особи (плита, раковина, підлога, пилосос), між ними — телефон зі списком Sweepy, де галочки зеленіють. Без голосу, один напис на весь ролик.', frames: ref('577212785151966', 4) },
  { key: 'sw-split', brand: 'Sweepy', id: '1133563834806763', since: '2025-01-20', days: 621, copies: '2', active: true, len: '37 с',
    hook: '«How my husband and I split household chores»', what: 'Пара вдома: кожен у своєму телефоні бачить свої справи, таблиця лідерів, переписка «Mwahaha», фінал — обоє відпочивають на дивані з собакою.', frames: ref('1133563834806763', 4) },
  { key: 'sw-mom', brand: 'Sweepy', id: '1410279750558036', since: '2026-01-28', days: 248, copies: '1', active: true, len: '47 с',
    hook: '«mom: I’ll be there in 30 / me: 🧹💨»', what: 'Мем-напис зверху, під ним шалений темп прибирання вітальні й кухні, кілька разів — телефон зі списком і прогресом.', frames: ref('1410279750558036', 4) },
  { key: 'sw-day', brand: 'Sweepy', id: '28341954322064878', since: '2026-08-19', days: 45, copies: '3 (масштабують)', active: true, len: '34 с',
    hook: '«Tired of feeling overwhelmed by mess? A simple daily plan…»', what: 'День із таймкодами (09:36 am, 01:34 pm…), віджет на заблокованому екрані, «My dashboard», «My tasks for the day», плашки задач поверх кадрів прибирання.', frames: ref('28341954322064878', 4) },
  { key: 'cf-doom', brand: 'Chorefriend', id: '1623518372722833', since: '2026-09-15', days: 18, copies: '9 (головний креатив зараз)', active: true, len: '15 с',
    hook: '«watch me flip my 3 year old doom room into my dream room»', what: 'Захаращена кімната → рамка скану з пінами «bags → trash · 12 min» і лінією, «7 steps · 85 min total» → та сама кімната чиста, «it just gave me one step at a time» → картка стора.', frames: ref('1623518372722833', 4) },
  { key: 'cf-door', brand: 'Chorefriend', id: '1685733675809905', since: '2026-07-04', days: 34, copies: '9', active: false, len: '25 с',
    hook: '«my room before i found chorefriend» → «After… ✨»', what: 'Рука відчиняє двері в безлад, вдруге — у чисту кімнату. Далі екрани: «What are we tidying?», план, секундомір 00:01 → 00:06, фото «before», фінал «Get your cleaning plan».', frames: ref('1685733675809905', 5) },
  { key: 'cf-pet', brand: 'Chorefriend', id: '3354247408093189', since: '2026-07-05', days: 21, copies: '5', active: false, len: '45 с',
    hook: '«Them: “my house is dirty but I have no motivation” / Me since I employed a cleaning pet…»', what: 'Мем-формат «Them / Me», далі живе прибирання з великими субтитрами (TIME TO TAKE CARE OF… WITH BLEACH), екрани з секундоміром і «All done».', frames: ref('3354247408093189', 4) },
  { key: 'cf-confess', brand: 'Chorefriend', id: '1344869991184424', since: '2026-07-12', days: 8, copies: '2', active: false, len: '13 с',
    hook: '«I didn’t hire a cleaner. I didn’t “start Monday”…»', what: 'Спокійне B-roll прибирання, поверх — довгий текст-сповідь: «An AI decides my chores for me now, and I haven’t cried about the dishes in 21 days».', frames: ref('1344869991184424', 2) },
  { key: 'tm-mom', brand: 'TidyMinds (сторінка «Kristina Cook», паперовий планер)', id: '1529333131404674', since: '2025-10-17', days: 351, copies: '28+ дублікатів того самого ролика', active: true, len: '35 с',
    hook: '«If your mom didn’t teach you how/what to clean, here’s a book to help you»', what: 'Лише руки гортають сторінки планера з чеклістами по днях і кімнатах. ⚠️ У тексті — «★★★★★» і «ADHD Planner»: цього ми не копіюємо.', frames: ref('1529333131404674', 3) },
];
export const compBy = Object.fromEntries(comps.map((c) => [c.key, c]));

export const compAds = [
  {
    id: 'K1', branch: 'magic', when: 'scan', comp: 'cf-doom', name: '«Watch me flip my doom room»',
    fmt: 'UGC · 9:16 · 15 с', aud: '18–34, TikTok і Reels; той самий кут, що Chorefriend масштабує зараз',
    hook: 'watch me flip my 3-week doom kitchen into 4 tiny steps',
    why: 'Це головний креатив Chorefriend прямо зараз — 9 копій одного ролика, тобто він виграв їхній тест. Структура: безлад → піни скану з хвилинами → чисто → «one step at a time». У нас та сама магія, плюс два відрізнювачі: Moppy поруч і секундомір уперед замість «85 min total», що лякає.',
    frames: [
      { t: '0–2 с', d: 'Захаращена кухня одним кадром, текст-хук зверху.', s: svg(kitchen() + dishes() + cap(['watch me flip my', '3-week doom kitchen'])) },
      { t: '2–6 с', d: 'Рамка скану Moppy: лінія йде вниз, піни з хвилинами вистрибують — «Wash the dishes · 10 min»…', s: svg(img('aso-9.6.jpg')) },
      { t: '6–9 с', d: '«4 tiny steps · 23 min» — план і Moppy з лупою в кутку.', s: svg(bg('#FFE1E7') + phone(30, 24, 120, 258, { img: 'aso-13.0.jpg' }) + mascot('11-looking-magnifier', 112, 220, 64)) },
      { t: '9–13 с', d: 'Чиста кухня, напис «it gave me one tiny step at a time».', s: svg(img('aso-3.2.jpg') + cap(['it gave me one tiny', 'step at a time'], 270, { dark: true })) },
      { t: '13–15 с', d: 'Кінцева картка Moppy.', s: svg(endCard()) },
    ],
    vo: 'Без голосу, трендовий трек; рівно 15 с, як у оригіналу.',
  },
  {
    id: 'K2', branch: 'pain', when: 'live', comp: 'cf-door', name: 'Двері «до» і «після»',
    fmt: 'UGC · 9:16 · 15–20 с', aud: 'широка, 22–40',
    hook: 'my kitchen before I found Moppy',
    why: 'Chorefriend тримав цей ролик у 9 копіях: прийом «рука відчиняє ті самі двері двічі» дає до/після за 2 секунди без жодного монтажу. Нам він підходить ідеально, бо в нас уже є до/після на справжній кухні — і без скану: Today дає одну справу, далі кроки.',
    frames: [
      { t: '0–1.5 с', d: 'POV: рука відчиняє двері кухні — безлад. Напис «my kitchen before I found Moppy».', s: svg(kitchen() + dishes() + `<rect x="0" y="0" width="26" height="320" fill="#C9A27E"/><circle cx="18" cy="170" r="4" fill="#F5B301"/>` + cap(['my kitchen before', 'I found Moppy'])) },
      { t: '1.5–3 с', d: 'Ті самі двері вдруге — чисто. «After… ✨»', s: svg(kitchen({ messy: false }) + `<rect x="0" y="0" width="26" height="320" fill="#C9A27E"/><circle cx="18" cy="170" r="4" fill="#F5B301"/>` + cap(['After… ✨'], 40)) },
      { t: '3–9 с', d: 'Як: Today → «Clear the kitchen counter · About 8 min» → кроки з секундоміром.', s: svg(bg('#FFF5F7') + phone(8, 40, 80, 172, { img: 'aso-21.5.jpg' }) + phone(92, 70, 80, 172, { img: 'aso-16.0.jpg' }) + cap(['one small thing a day'], 282, { dark: true })) },
      { t: '9–13 с', d: 'Повзунок до/після на справжній кухні.', s: svg(img('aso-1.0.jpg')) },
      { t: '13–16 с', d: 'Кінцева картка.', s: svg(endCard('One small thing a day')) },
    ],
    vo: 'Без голосу; звук дверей як удар на «After».',
  },
  {
    id: 'K3', branch: 'mascot', when: 'live', comp: 'cf-pet', name: '«Them / Me»: мем про пухнастого напарника',
    fmt: 'UGC-мем · 9:16 · 15–25 с', aud: '18–34, cozy й мем-аудиторія',
    hook: 'Them: “my house is dirty but I have no motivation” / Me since a fluffy dog tells me what to clean every day:',
    why: 'Chorefriend продає «cleaning pet» саме цим мемом (5 копій). Але їхній «пет» — маленька іконка, а Moppy — повноцінний акварельний персонаж: мем стає сильнішим, коли пухнастий пес справді з’являється в кадрі поруч із людиною.',
    frames: [
      { t: '0–2 с', d: 'Чорне тло, мем-текст «Them: … / Me since …», під ним кадр безладу.', s: svg(bg('#111') + `<g font-family="Nunito,sans-serif" fill="#fff" font-size="8.6" font-weight="800" text-anchor="middle"><text x="90" y="40">Them: "my house is dirty</text><text x="90" y="52">but I have no motivation"</text><text x="90" y="74">Me since a fluffy dog tells</text><text x="90" y="86">me what to clean every day:</text></g>` + `<svg x="0" y="110" width="180" height="210" viewBox="0 60 180 210">${living()}</svg>`) },
      { t: '2–8 с', d: 'Вона в навушниках танцює зі шваброю; великі субтитри: «TIME TO… WIPE THE COUNTER».', s: svg(kitchen() + person(80, 96, { arms: 'up' }) + notes(130, 120) + `<text x="90" y="250" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="14" fill="#fff" stroke="#2C252A" stroke-width="3" paint-order="stroke">WIPE THE COUNTER</text>`) },
      { t: '8–14 с', d: 'Телефон: крок, секундомір уперед, «Mark done», Moppy радіє.', s: svg(bg('#FFE1E7') + phone(30, 24, 120, 258, { img: 'aso-18.4.jpg' })) },
      { t: '14–20 с', d: 'Moppy (анімований PNG) «сидить» поруч на стільниці й махає — фінал мему.', s: svg(kitchen({ messy: false }) + person(60, 96, {}) + mascot('06-room-done', 96, 120, 80) + cap(['my cleaning buddy 🫶'], 300, { dark: true })) },
    ],
    vo: 'Трендовий звук; субтитри великими літерами, як в оригіналі.',
  },
  {
    id: 'K4', branch: 'pain', when: 'live', comp: 'cf-confess', name: 'Сповідь текстом поверх тихого прибирання',
    fmt: 'UGC · 9:16 · 12–15 с', aud: '25–44, «overwhelmed»',
    hook: 'I didn’t buy another planner. I didn’t wait for Monday.',
    why: 'Короткий ролик (13 с) з довгим текстом, який читають до кінця, — формат, на якому крутяться і Chorefriend, і TidyMinds (їхні історії «My sister walked into my apartment…» йдуть 228 днів). Працює на «болі»: людина впізнає себе в тексті. Текст пише сам креатор про свій досвід — без вигаданих цитат.',
    frames: [
      { t: '0–6 с', d: 'Повільний кадр: вона протирає стіл. Поверх — абзац: «I didn’t buy another planner. I didn’t wait for Monday.»', s: svg(kitchen() + person(80, 110, { arms: 'front' }) + cap(["I didn't buy another planner.", "I didn't wait for Monday."], 40, { size: 9.5 })) },
      { t: '6–10 с', d: 'Той самий текст продовжується: «A fluffy dog gives me one small thing a day…»', s: svg(kitchen({ messy: false }) + person(80, 110, { arms: 'front' }) + mascot('16-wiping-counter', 112, 208, 64) + cap(['A fluffy dog gives me', 'one small thing a day.'], 40, { size: 9.5 })) },
      { t: '10–14 с', d: '«…and my sink has been empty for 3 weeks.» Кадр чистої раковини + іконка Moppy.', s: svg(img('aso-3.2.jpg') + cap(['…and my sink has been', 'empty for 3 weeks.'], 40, { size: 9.5, dark: true })) },
    ],
    vo: 'Без голосу; м’яке піаніно. Цифри («3 weeks») — лише справжні, зі слів креатора.',
  },
  {
    id: 'K5', branch: 'magic', when: 'live', comp: 'sw-reset', name: '«Pre-holiday reset» з Moppy',
    fmt: 'POV UGC · 9:16 · 20–30 с', aud: 'жінки 25–44; сезон — жовтень–грудень',
    hook: 'Pre-holiday reset, one tiny step at a time ✨',
    why: 'Найдовший живий креатив ніші: Sweepy крутить його 621 день і досі вставляє в нові оголошення. Секрет — «задоволення від прибирання» (satisfying POV) плюс телефон, де галочки зеленіють. Ми робимо те саме, а замість таблиці — Moppy, який радіє кожному кроку. Зараз жовтень: якраз сезон «reset перед святами».',
    frames: [
      { t: '0–2 с', d: 'POV: рука протирає плиту, напис «Pre-holiday reset ✨».', s: svg(kitchen() + dishes() + `<path d="M60 170q20-14 40 0" stroke="#E9B795" stroke-width="9" stroke-linecap="round" fill="none"/><rect x="86" y="160" width="22" height="12" rx="4" fill="#86AFCF"/>` + cap(['Pre-holiday reset ✨'])) },
      { t: '2–6 с', d: 'Телефон у руці: Today / план з кроками; тап «Start together».', s: svg(bg('#FFF5F7') + phone(30, 24, 120, 258, { img: 'aso-21.5.jpg' })) },
      { t: '6–18 с', d: 'Нарізка satisfying-кадрів по 1 с (раковина, стільниця, підлога), між ними — «Mark done» і Moppy з конфеті.', s: svg(kitchen() + bubbles(120, 170) + dishes(100, 150) + check(40, 60, 14) + check(70, 60, 14) + cap(['step 2 of 4'], 300, { dark: true })) },
      { t: '18–24 с', d: 'Кінець: повзунок до/після + «All 4 steps done · 23 min».', s: svg(img('aso-1.0.jpg') + pill(90, 292, 'All 4 steps done · 23 min', { tick: true })) },
    ],
    vo: 'Без голосу; лише напис-хук і звуки прибирання (ASMR).',
  },
  {
    id: 'K6', branch: 'mascot', when: 'live', comp: 'sw-day', name: 'День із таймкодами',
    fmt: 'UGC «day in my life» · 9:16 · 25–35 с', aud: 'працюючі 25–40',
    hook: 'How I keep my home calm without a cleaning day',
    why: 'Sweepy зараз масштабує саме цей формат (3 копії з серпня): таймкоди дня, віджет на заблокованому екрані, «My tasks for the day». Moppy має це все — Today, віджети, Live Activity, — а ще маскот на віджеті робить кожен таймкод милішим.',
    frames: [
      { t: '07:40', d: 'Таймкод «07:40 am». Заблокований екран з віджетом Moppy «Wash the dishes · ~10 min».', s: svg(img('shot06-widgets.jpg') + cap(['07:40 am'], 40, { size: 14, dark: true })) },
      { t: '07:52', d: '«07:52 am» — посуд вимитий, «Mark done», Moppy підстрибує.', s: svg(kitchen({ messy: false }) + person(70, 96, { arms: 'front' }) + check(140, 60, 14) + cap(['07:52 am'], 30, { size: 14, dark: true })) },
      { t: '13:10', d: '«01:10 pm» — Today: «Up next · Wipe the bathroom mirror · 3 min».', s: svg(bg('#FFF5F7') + phone(30, 40, 120, 258, { img: 'aso-21.5.jpg' }) + cap(['01:10 pm'], 30, { size: 14, dark: true })) },
      { t: '19:30', d: '«07:30 pm» — диван, книжка, «3 days this week · every small day counts».', s: svg(living(false) + person(90, 126, { arms: 'front' }) + cap(['07:30 pm'], 30, { size: 14, dark: true }) + pill(90, 296, '3 days this week', { tick: true })) },
    ],
    vo: 'Легкий голос за кадром або лише таймкоди; lo-fi музика.',
  },
  {
    id: 'K7', branch: 'pain', when: 'now', comp: 'tm-mom', name: '«If your mom didn’t teach you how to clean…»',
    fmt: 'Лише руки · 9:16 · 15–25 с', aud: '22–35, молоді, що вперше живуть окремо',
    hook: 'If your mom didn’t teach you how to clean, here’s a fluffy dog to help you',
    why: 'Найдовший креатив усієї вибірки серед «не-застосунків»: TidyMinds крутить один і той самий ролик 351 день у 28+ дублікатах. Хук б’є по впізнаваному: «мене цього не вчили». Ми беремо хук і формат «лише руки гортають», але замість паперу — кроки Moppy з хвилинами. Без їхніх ★★★★★ і без «ADHD».',
    frames: [
      { t: '0–3 с', d: 'Рука тримає телефон над столом, текст-хук на два рядки.', s: svg(bg('#EFE4F6') + phone(40, 70, 100, 214, { img: 'aso-13.0.jpg' }) + cap(["If your mom didn't teach", 'you how to clean,'], 28, { size: 10 })) },
      { t: '3–10 с', d: 'Палець гортає план: «Wash the dishes · 10 min», «Clear the counter · 5 min»… — кожен крок маленький і з хвилинами.', s: svg(bg('#EFE4F6') + phone(30, 24, 120, 258, { img: 'aso-13.0.jpg' }) + cap(['every step has minutes'], 304, { dark: true })) },
      { t: '10–16 с', d: 'Відкритий крок: Moppy миє посуд, секундомір уперед.', s: svg(bg('#EFE4F6') + phone(30, 24, 120, 258, { img: 'aso-16.0.jpg' })) },
      { t: '16–20 с', d: '«…here’s a fluffy dog to help you.» Кінцева картка.', s: svg(endCard('Tiny steps to a calmer home') + cap(["here's a fluffy dog", 'to help you 🐶'], 24, { size: 10, dark: true })) },
    ],
    vo: 'Без голосу. Робиться зараз — запис екрана + руки, без скану.',
  },
  {
    id: 'K8', branch: 'pain', when: 'live', comp: 'sw-mom', name: '«mom: I’ll be there in 30»',
    fmt: 'Мем + прискорене прибирання · 9:16 · 20–30 с', aud: '22–40',
    hook: 'mom: I’ll be there in 30 / me:',
    why: 'Sweepy тримає цей ролик 248 днів — це підтверджує наш B7 «Guests in 20 minutes», тільки з мемним написом замість сповіщення. Знімаємо обидва варіанти хука на одне тіло й даємо тесту вирішити.',
    frames: [
      { t: '0–1 с', d: 'Мем-напис зверху: «mom: I’ll be there in 30 / me:», під ним вітальня в безладі.', s: svg(living() + cap(["mom: I'll be there in 30", 'me:'], 30)) },
      { t: '1–8 с', d: 'Відкриває Moppy: план із 4 кроків за 23 хв.', s: svg(bg('#FFE1E7') + phone(30, 24, 120, 258, { img: 'aso-13.0.jpg' })) },
      { t: '8–20 с', d: 'Прискорене прибирання, кожен крок — галочка, секундомір у кутку.', s: svg(living(false) + person(70, 120, { arms: 'front' }) + check(140, 60, 14) + check(140, 96, 14) + timer(130, 160, '19:42', 18)) },
      { t: '20–25 с', d: 'Дзвінок у двері, «with 7 minutes to spare».', s: svg(living(false) + person(90, 126, {}) + cap(['with 7 minutes', 'to spare 😌'], 280, { dark: true })) },
    ],
    vo: 'Трендовий звук; секундомір лише вперед.',
  },
  {
    id: 'K9', branch: 'pain', when: 'later', comp: 'sw-split', name: '«How my partner and I split chores»',
    fmt: 'Пара · 9:16 · 25–35 с', aud: 'пари 25–40',
    hook: 'How my partner and I stopped fighting about chores',
    why: 'Другий 621-денний креатив Sweepy: розподіл справ у парі — тема, що чіпляє вдвічі ширшу аудиторію. ⚠️ У Moppy спільного дому в коді ще НЕМАЄ (екран Household є лише в брендбуку), тож ролик чекає цієї фічі — інакше реклама обіцяє те, чого немає.',
    frames: [
      { t: '0–2 с', d: 'Пара на кухні, кожен зі своїм телефоном. Напис-хук.', s: svg(kitchen() + person(60, 100, { top: C.top2 }) + person(122, 96, { s: 1.05 }) + cap(['How my partner and I', 'stopped fighting about chores'], 28, { size: 9.5 })) },
      { t: '2–10 с', d: 'Кожен бачить СВОЮ одну справу на сьогодні.', s: svg(bg('#FFF5F7') + phone(8, 50, 80, 172, { img: 'aso-21.5.jpg' }) + phone(92, 70, 80, 172, { img: 'aso-16.0.jpg' })) },
      { t: '10–20 с', d: 'Обоє роблять свої кроки паралельно, потім дивляться тиждень.', s: svg(living(false) + person(60, 120, { arms: 'front', top: C.top2 }) + person(124, 120, { arms: 'front' })) },
      { t: '20–28 с', d: 'Фінал: обоє на дивані, Moppy між ними.', s: svg(living(false) + person(56, 126, { top: C.top2 }) + person(126, 126, {}) + mascot('06-room-done', 66, 186, 50)) },
    ],
    vo: 'Діалог пари + субтитри. Знімаємо лише після фічі «Household».',
  },
];
