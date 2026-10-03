// Примітиви ескізів (viewBox 0 0 180 320) для розкадровок.
export const A = 'marketing/';
export const C = {
  wall: '#FCE6D6', wall2: '#EFE4F6', counter: '#D9B48F', cab: '#9A6A48', cabLine: '#7F5638',
  floor: '#EAD9C8', skin: '#E9B795', hair: '#5A3E36', top: '#86AFCF', top2: '#B9A3DC',
  coral: '#FF4D6A', ink: '#2C252A', dim: '#6E6068', green: '#2E6B45',
  dish: '#F4F7FA', dishLine: '#9DB4C8',
};
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let uid = 0;
export const bg = (c) => `<rect width="180" height="320" fill="${c}"/>`;
export const sparkle = (x, y, s = 1) => `<path d="M${x} ${y - 7 * s}l${2 * s} ${5 * s} ${5 * s} ${2 * s}-${5 * s} ${2 * s}-${2 * s} ${5 * s}-${2 * s}-${5 * s}-${5 * s}-${2 * s} ${5 * s}-${2 * s}z" fill="#fff" stroke="#F5B301" stroke-width=".8"/>`;
export const kitchen = ({ messy = true } = {}) => `
  ${bg(C.wall)}
  <rect x="104" y="34" width="62" height="58" rx="4" fill="#D7E9F5" stroke="#fff" stroke-width="3"/>
  <path d="M135 34v58M104 63h62" stroke="#fff" stroke-width="3"/>
  <rect x="8" y="22" width="84" height="44" rx="3" fill="${C.cab}"/>
  <path d="M50 22v44" stroke="${C.cabLine}" stroke-width="2"/>
  <rect x="0" y="182" width="180" height="10" fill="${C.counter}"/>
  <rect x="0" y="192" width="180" height="72" fill="${C.cab}"/>
  <path d="M45 192v72M90 192v72M135 192v72" stroke="${C.cabLine}" stroke-width="2"/>
  <rect x="0" y="264" width="180" height="56" fill="${C.floor}"/>
  <rect x="96" y="178" width="58" height="8" rx="3" fill="#B8C2CB"/>
  ${messy ? `<ellipse cx="60" cy="300" rx="16" ry="4" fill="#B79C82" opacity=".6"/><circle cx="30" cy="290" r="3" fill="#B79C82"/><rect x="18" y="168" width="10" height="14" rx="2" fill="#E9C46A"/><rect x="32" y="172" width="14" height="10" rx="2" fill="#F4A6A6"/><rect x="58" y="170" width="8" height="12" rx="2" fill="#8FC1A9"/>` : sparkle(40, 292) + sparkle(150, 170, .7)}`;
export const dishes = (x = 112, y = 150) => `
  <g stroke="${C.dishLine}" stroke-width="1.6" fill="${C.dish}">
    <ellipse cx="${x + 12}" cy="${y + 26}" rx="22" ry="5"/><ellipse cx="${x + 14}" cy="${y + 20}" rx="20" ry="5"/>
    <ellipse cx="${x + 10}" cy="${y + 14}" rx="18" ry="4.5"/><rect x="${x + 22}" y="${y}" width="10" height="14" rx="2"/>
    <rect x="${x - 2}" y="${y + 2}" width="9" height="12" rx="2"/></g>`;
export const bubbles = (x, y) => `<g fill="#EAF5FC" stroke="#8EC5E8" stroke-width="1.2"><circle cx="${x}" cy="${y}" r="4"/><circle cx="${x + 9}" cy="${y - 10}" r="3"/><circle cx="${x - 6}" cy="${y - 16}" r="2.4"/><circle cx="${x + 4}" cy="${y - 24}" r="1.8"/></g>`;
export const notes = (x, y) => `<g fill="${C.coral}" font-size="14" font-family="sans-serif"><text x="${x}" y="${y}">♪</text><text x="${x + 12}" y="${y - 12}" font-size="11">♫</text></g>`;
export const person = (x, y, { s = 1, top = C.top, mood = 'happy', arms = 'down', hair = C.hair } = {}) => {
  const k = (v) => v * s;
  const mouth = mood === 'happy' ? `<path d="M${x - k(4)} ${y + k(17)}q${k(4)} ${k(4)} ${k(8)} 0" stroke="${C.ink}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`
    : mood === 'sad' ? `<path d="M${x - k(4)} ${y + k(19)}q${k(4)} -${k(4)} ${k(8)} 0" stroke="${C.ink}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`
    : mood === 'panic' ? `<ellipse cx="${x}" cy="${y + k(18)}" rx="${k(2.5)}" ry="${k(3)}" fill="${C.ink}"/>`
    : `<path d="M${x - k(3)} ${y + k(18)}h${k(6)}" stroke="${C.ink}" stroke-width="1.4" stroke-linecap="round"/>`;
  const armPath = arms === 'up'
    ? `M${x - k(16)} ${y + k(36)}l-${k(10)} -${k(22)}M${x + k(16)} ${y + k(36)}l${k(10)} -${k(22)}`
    : arms === 'front'
      ? `M${x - k(16)} ${y + k(36)}q-${k(4)} ${k(18)} ${k(10)} ${k(26)}M${x + k(16)} ${y + k(36)}q${k(4)} ${k(18)} -${k(10)} ${k(26)}`
      : `M${x - k(16)} ${y + k(36)}l-${k(4)} ${k(32)}M${x + k(16)} ${y + k(36)}l${k(4)} ${k(32)}`;
  return `<g>
    <path d="${armPath}" stroke="${C.skin}" stroke-width="${k(7)}" stroke-linecap="round" fill="none"/>
    <rect x="${x - k(18)}" y="${y + k(28)}" width="${k(36)}" height="${k(62)}" rx="${k(14)}" fill="${top}"/>
    <circle cx="${x}" cy="${y + k(12)}" r="${k(13)}" fill="${C.skin}"/>
    <path d="M${x - k(14)} ${y + k(12)}a${k(14)} ${k(14)} 0 0 1 ${k(28)} 0q-${k(6)} -${k(6)} -${k(14)} -${k(4)}q-${k(8)} ${k(1)} -${k(14)} ${k(4)}z" fill="${hair}"/>
    <path d="M${x + k(12)} ${y + k(6)}q${k(8)} ${k(10)} ${k(2)} ${k(26)}" stroke="${hair}" stroke-width="${k(5)}" fill="none" stroke-linecap="round"/>
    <circle cx="${x - k(5)}" cy="${y + k(11)}" r="${k(1.4)}" fill="${C.ink}"/><circle cx="${x + k(5)}" cy="${y + k(11)}" r="${k(1.4)}" fill="${C.ink}"/>
    ${mouth}</g>`;
};
export const phone = (x, y, w, h, { img } = {}) => {
  const id = 'clip' + (++uid);
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * 0.16}" fill="#2B2B2E"/>
    <clipPath id="${id}"><rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" rx="${w * 0.13}"/></clipPath>
    <g clip-path="url(#${id})"><rect x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" fill="#FFF5F7"/>
    ${img ? `<image href="${A}${img}" x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" preserveAspectRatio="xMidYMin slice"/>` : ''}</g></g>`;
};
export const pin = (x, y, n, label, side = 'up') => {
  const ly = side === 'up' ? y - 22 : y + 22;
  const w = 10 + label.length * 3.6;
  const px = Math.max(4, Math.min(164 - w, x - w / 2));
  return `<g font-family="Nunito,system-ui,sans-serif"><path d="M${x} ${y}V${ly}" stroke="#fff" stroke-width="1.2"/>
    <circle cx="${x}" cy="${y}" r="7" fill="${C.coral}" opacity=".3"/><circle cx="${x}" cy="${y}" r="3.6" fill="${C.coral}" stroke="#fff" stroke-width="1.6"/>
    <rect x="${px}" y="${ly - 7}" width="${w + 12}" height="14" rx="7" fill="#fff"/>
    <circle cx="${px + 7}" cy="${ly}" r="4.6" fill="${C.coral}"/><text x="${px + 7}" y="${ly + 2.2}" font-size="6" font-weight="800" fill="#fff" text-anchor="middle">${n}</text>
    <text x="${px + 14}" y="${ly + 2.4}" font-size="6.4" font-weight="800" fill="${C.ink}">${esc(label)}</text></g>`;
};
export const check = (x, y, r = 8) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${C.green}"/><path d="M${x - r * 0.45} ${y}l${r * 0.3} ${r * 0.32} ${r * 0.6} -${r * 0.62}" stroke="#fff" stroke-width="${r * 0.26}" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
export const cap = (lines, y = 28, { size = 11.5, dark = false } = {}) => lines.map((t, i) => {
  const w = Math.min(172, t.length * size * 0.5 + 14);
  const yy = y + i * (size + 7);
  return `<rect x="${90 - w / 2}" y="${yy - size}" width="${w}" height="${size + 6}" rx="4" fill="${dark ? 'rgba(44,37,42,.86)' : '#fff'}"/>
  <text x="90" y="${yy}" text-anchor="middle" font-family="Lora,Georgia,serif" font-weight="600" font-size="${size}" fill="${dark ? '#fff' : C.ink}">${esc(t)}</text>`;
}).join('');
export const pill = (x, y, text, { bgc = 'rgba(44,37,42,.86)', fg = '#fff', size = 7.5, tick = false } = {}) => {
  const w = text.length * size * 0.55 + (tick ? 26 : 16);
  return `<g font-family="Nunito,system-ui,sans-serif"><rect x="${x - w / 2}" y="${y - 9}" width="${w}" height="18" rx="9" fill="${bgc}"/>
  ${tick ? `<path d="M${x - w / 2 + 9} ${y}l3 3 6 -6" stroke="#7FD6A0" stroke-width="2" fill="none" stroke-linecap="round"/>` : ''}
  <text x="${x + (tick ? 6 : 0)}" y="${y + 2.7}" text-anchor="middle" font-size="${size}" font-weight="800" fill="${fg}">${esc(text)}</text></g>`;
};
export const timer = (x, y, t, size = 30) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Lora,Georgia,serif" font-weight="600" font-size="${size}" fill="${C.ink}" stroke="#fff" stroke-width="3" paint-order="stroke">${t}</text>`;
export const mascot = (name, x, y, w, flip = false) => `<image href="${A}m-${name}.png" x="${x}" y="${y}" width="${w}" height="${w}" preserveAspectRatio="xMidYMax meet" ${flip ? `transform="translate(${2 * x + w} 0) scale(-1 1)"` : ''}/>`;
export const img = (file) => `<image href="${A}${file}" x="0" y="0" width="180" height="320" preserveAspectRatio="xMidYMid slice"/>`;
export const living = (messy = true) => `${bg(C.wall2)}
  <rect x="0" y="230" width="180" height="90" fill="#E5D6C6"/>
  <rect x="18" y="60" width="44" height="54" rx="3" fill="#fff" stroke="#D6C8E6" stroke-width="3"/>
  <rect x="10" y="170" width="160" height="56" rx="16" fill="#B7A2D6"/><rect x="18" y="150" width="144" height="34" rx="14" fill="#C9B7E4"/>
  <rect x="4" y="176" width="20" height="54" rx="9" fill="#A68FCB"/><rect x="156" y="176" width="20" height="54" rx="9" fill="#A68FCB"/>
  ${messy ? `<rect x="30" y="250" width="26" height="10" rx="3" fill="#86AFCF" transform="rotate(-12 43 255)"/><rect x="100" y="262" width="20" height="14" rx="3" fill="#F4A6A6"/><circle cx="140" cy="285" r="7" fill="#E9C46A"/><rect x="60" y="282" width="30" height="8" rx="3" fill="#8FC1A9" transform="rotate(8 75 286)"/><rect x="118" y="154" width="30" height="16" rx="5" fill="#F7D79B"/>` : `${sparkle(150, 262)}${sparkle(40, 275, .8)}`}`;
export const thought = (x, y, t) => `<g font-family="Nunito,system-ui,sans-serif"><rect x="${x}" y="${y}" width="${t.length * 4.3 + 14}" height="16" rx="8" fill="#fff" opacity=".95"/><text x="${x + 7}" y="${y + 11}" font-size="7.6" font-weight="700" fill="${C.dim}">${esc(t)}</text></g>`;
export const endCard = (line = 'Tiny steps to a calmer home') => `${bg('#FFF5F7')}
  ${mascot('01-good-morning', 40, 56, 100)}
  <image href="${A}app-icon.png" x="38" y="184" width="26" height="26"/>
  <text x="70" y="206" font-family="Lora,Georgia,serif" font-weight="600" font-size="24" fill="${C.ink}">Moppy</text>
  <text x="90" y="228" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="700" font-size="9" fill="${C.dim}">${esc(line)}</text>
  <rect x="34" y="248" width="112" height="24" rx="8" fill="${C.coral}"/>
  <text x="90" y="264" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="9" fill="#fff">Try 7 days free</text>
  <text x="90" y="286" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-size="6.4" fill="${C.dim}">yearly plan · cancel anytime</text>`;
export const notif = (y, title, body) => `<g font-family="Nunito,system-ui,sans-serif"><rect x="12" y="${y}" width="156" height="38" rx="12" fill="rgba(255,255,255,.95)"/>
  <rect x="20" y="${y + 9}" width="20" height="20" rx="6" fill="#7FD6A0"/><text x="46" y="${y + 16}" font-size="7" font-weight="800" fill="${C.ink}">${esc(title)}</text>
  <text x="46" y="${y + 28}" font-size="8" fill="${C.ink}">${esc(body)}</text></g>`;
export const split = (left, right) => `<svg x="0" y="0" width="90" height="320" viewBox="45 0 90 320">${left}</svg><svg x="90" y="0" width="90" height="320" viewBox="45 0 90 320">${right}</svg><path d="M90 0v320" stroke="#fff" stroke-width="2.5"/>`;
export const svg = (body) => `<svg viewBox="0 0 180 320" xmlns="http://www.w3.org/2000/svg" role="img">${body}</svg>`;
