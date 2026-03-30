/**
 * Generate sitemap.xml from lesson configuration data.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://autowork.dreamitbiz.com';
const TODAY = new Date().toISOString().split('T')[0];

// Lesson categories data (mirrored from src/config/lessons.js)
const CATEGORIES = [
  { slug: 'basics', lessons: ['what-is-automation','why-automate','automation-types','getting-started','automation-mindset'] },
  { slug: 'excel', lessons: ['excel-formulas','conditional-formatting','pivot-tables','macro-basics','vba-basics','advanced-vba'] },
  { slug: 'python', lessons: ['python-setup','file-automation','excel-python','web-scraping','email-automation','pdf-automation','scheduler'] },
  { slug: 'rpa', lessons: ['rpa-concepts','uipath-basics','power-automate','rpa-selectors','rpa-project'] },
  { slug: 'nocode', lessons: ['nocode-intro','zapier','make-integromat','n8n-automation','nocode-project'] },
  { slug: 'ai', lessons: ['ai-overview','prompt-engineering','chatgpt-api','claude-api','ai-document','ai-workflow'] },
  { slug: 'document', lessons: ['document-templates','email-workflow','pdf-workflow','ocr-digitization'] },
  { slug: 'data', lessons: ['data-collection','data-cleaning','data-visualization','data-pipeline'] },
  { slug: 'workflow', lessons: ['workflow-design','error-handling','integration-patterns','scaling-automation'] },
  { slug: 'ai-assistants', lessons: ['ai-assistants-overview','custom-gpts','google-gems','claude-projects','copilot-studio','ai-assistant-project'] },
  { slug: 'projects', lessons: ['invoice-automation','hr-automation','marketing-automation','custom-project'] },
  { slug: 'prompt', lessons: ['prompt-basics','system-prompt-design','craft-framework','output-formatting','few-shot-learning','prompt-security'] },
];

function url(loc, priority, changefreq = 'weekly') {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const urls = [];

// Main pages
urls.push(url(`${SITE_URL}/`, '1.0', 'daily'));
urls.push(url(`${SITE_URL}/intro`, '0.8', 'monthly'));
urls.push(url(`${SITE_URL}/lessons`, '0.9', 'weekly'));
urls.push(url(`${SITE_URL}/community/board`, '0.7', 'daily'));

// Category pages
for (const cat of CATEGORIES) {
  urls.push(url(`${SITE_URL}/lessons/${cat.slug}`, '0.8', 'weekly'));
}

// Individual lesson pages
for (const cat of CATEGORIES) {
  for (const lesson of cat.lessons) {
    urls.push(url(`${SITE_URL}/lessons/${cat.slug}/${lesson}`, '0.7', 'monthly'));
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap generated: ${outPath}`);
console.log(`Total URLs: ${urls.length}`);
