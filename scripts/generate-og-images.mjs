import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const BRAND = 'AUTOWORK';
const URL = 'autowork.dreamitbiz.com';

const images = [
  { file: 'default.png', title: 'AutoWork', subtitle: '업무자동화 학습 플랫폼', color: '#1B3A6B' },
  { file: 'lessons.png', title: '업무자동화 학습', subtitle: '10 Categories · 50+ Lessons', color: '#1B3A6B' },
  { file: 'excel.png', title: 'Excel/스프레드시트 자동화', subtitle: 'Formulas · Macros · VBA', color: '#00855A' },
  { file: 'python.png', title: 'Python 업무자동화', subtitle: 'Files · Web Scraping · Email', color: '#8B1AC8' },
  { file: 'rpa.png', title: 'RPA 도구 활용', subtitle: 'UiPath · Power Automate', color: '#C8102E' },
  { file: 'nocode.png', title: '노코드/로코드 자동화', subtitle: 'Zapier · Make · n8n', color: '#C87200' },
  { file: 'ai-automation.png', title: 'AI 활용 업무자동화', subtitle: 'ChatGPT · Claude · Prompt', color: '#1B3A6B' },
  { file: 'community.png', title: '커뮤니티', subtitle: 'Tips · Questions · Showcase', color: '#8B1AC8' },
];

async function generateImage({ file, title, subtitle, color }) {
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustColor(color, -30)};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect x="0" y="0" width="${width}" height="${height}" fill="rgba(0,0,0,0.15)" />

      <!-- Grid pattern -->
      ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${height}" stroke="rgba(255,255,255,0.05)" />`).join('')}
      ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="${width}" y2="${i * 60}" stroke="rgba(255,255,255,0.05)" />`).join('')}

      <!-- Brand -->
      <text x="60" y="80" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="rgba(255,255,255,0.7)">${BRAND}</text>

      <!-- Title -->
      <text x="60" y="${height / 2 - 10}" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="white">${escapeXml(title)}</text>

      <!-- Subtitle -->
      <text x="60" y="${height / 2 + 50}" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">${escapeXml(subtitle)}</text>

      <!-- URL -->
      <text x="60" y="${height - 40}" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">${URL}</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(outDir, file));

  console.log(`  ✓ ${file}`);
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (num & 0xff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  console.log('Generating OG images...');
  for (const img of images) {
    await generateImage(img);
  }
  console.log(`\nDone! ${images.length} images generated in public/og/`);
}

main().catch(console.error);
