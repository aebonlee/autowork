import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');

// Ensure output directory exists
mkdirSync(outDir, { recursive: true });

// OG image: 1200 x 630 px
const WIDTH = 1200;
const HEIGHT = 630;

function createOgSvg({ title, subtitle, badge, bgColor1, bgColor2 }) {
  return `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bgColor2};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.05" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative circles -->
  <circle cx="1050" cy="100" r="200" fill="rgba(255,255,255,0.05)" />
  <circle cx="1100" cy="500" r="150" fill="rgba(255,255,255,0.04)" />
  <circle cx="100" cy="550" r="120" fill="rgba(255,255,255,0.03)" />

  <!-- Top decorative line -->
  <rect x="80" y="80" width="60" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
  <rect x="160" y="80" width="30" height="4" rx="2" fill="rgba(255,255,255,0.3)" />

  <!-- Logo -->
  <text x="80" y="160" font-family="'Noto Sans KR', 'Segoe UI', Arial, sans-serif" font-size="42" font-weight="800" fill="white">
    <tspan fill="rgba(255,255,255,0.9)">Auto</tspan><tspan fill="white">Work</tspan>
  </text>

  <!-- Badge -->
  ${badge ? `
  <rect x="80" y="200" width="${badge.length * 12 + 32}" height="32" rx="16" fill="rgba(255,255,255,0.2)" />
  <text x="96" y="222" font-family="'Noto Sans KR', 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="600" fill="rgba(255,255,255,0.9)">${badge}</text>
  ` : ''}

  <!-- Title -->
  <text x="80" y="${badge ? 310 : 280}" font-family="'Noto Sans KR', 'Segoe UI', Arial, sans-serif" font-size="52" font-weight="800" fill="white" letter-spacing="-1">
    ${wrapText(title, 20).map((line, i) => `<tspan x="80" dy="${i === 0 ? 0 : 64}">${escapeXml(line)}</tspan>`).join('')}
  </text>

  <!-- Subtitle -->
  <text x="80" y="${badge ? 420 : 390}" font-family="'Noto Sans KR', 'Segoe UI', Arial, sans-serif" font-size="22" font-weight="400" fill="rgba(255,255,255,0.75)">
    ${wrapText(subtitle, 40).map((line, i) => `<tspan x="80" dy="${i === 0 ? 0 : 30}">${escapeXml(line)}</tspan>`).join('')}
  </text>

  <!-- Bottom bar -->
  <rect x="0" y="${HEIGHT - 6}" width="${WIDTH}" height="6" fill="rgba(255,255,255,0.3)" />

  <!-- Domain -->
  <text x="${WIDTH - 80}" y="${HEIGHT - 30}" font-family="'Segoe UI', Arial, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.5)" text-anchor="end">autowork.dreamitbiz.com</text>
</svg>`;
}

function wrapText(text, maxChars) {
  if (text.length <= maxChars) return [text];
  const lines = [];
  let remaining = text;
  while (remaining.length > maxChars) {
    let breakAt = remaining.lastIndexOf(' ', maxChars);
    if (breakAt === -1) breakAt = maxChars;
    lines.push(remaining.slice(0, breakAt));
    remaining = remaining.slice(breakAt).trimStart();
  }
  if (remaining) lines.push(remaining);
  return lines;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Generate images
const images = [
  {
    name: 'default',
    title: '업무자동화 학습 플랫폼',
    subtitle: 'Excel · Python · RPA · AI · No-Code',
    badge: null,
    bgColor1: '#1B3A6B',
    bgColor2: '#2d5aa0',
  },
  {
    name: 'oa',
    title: 'OA 업무자동화',
    subtitle: 'Excel 매크로, VBA, 문서 자동화, 데이터 관리',
    badge: 'OA Automation',
    bgColor1: '#1B3A6B',
    bgColor2: '#3D6DB5',
  },
  {
    name: 'ai',
    title: 'AI활용 업무자동화',
    subtitle: 'ChatGPT API, AI 문서처리, RPA, No-Code',
    badge: 'AI Automation',
    bgColor1: '#0f2b5e',
    bgColor2: '#1a6bb5',
  },
  {
    name: 'projects',
    title: '실전 프로젝트',
    subtitle: '워크플로우 설계부터 실무 프로젝트까지',
    badge: 'Real Projects',
    bgColor1: '#1a3d6b',
    bgColor2: '#2b7a3d',
  },
  {
    name: 'prompt',
    title: '프롬프트 학습',
    subtitle: 'CRAFT 프레임워크, 시스템 프롬프트, Few-shot, 보안',
    badge: 'Prompt Learning',
    bgColor1: '#2d1b6b',
    bgColor2: '#6b3da0',
  },
  {
    name: 'community',
    title: '커뮤니티',
    subtitle: '질문, 토론, 프로젝트 공유',
    badge: 'Community',
    bgColor1: '#1B3A6B',
    bgColor2: '#4a6b9b',
  },
];

console.log('Generating OG images...');

for (const img of images) {
  const svg = createOgSvg(img);
  const outputPath = join(outDir, `${img.name}.png`);

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`  Created: og/${img.name}.png`);
}

console.log('Done! All OG images generated.');
