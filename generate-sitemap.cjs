// Generate dynamic sitemap.xml from JSON data
const fs = require('fs');
const path = require('path');

// Load models from both sources (models.json + individual model folders)
function loadModels() {
  const modelsFromJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models.json'), 'utf8')
  ).filter(m => !['gpt-5', 'grok-4'].includes(m.id)); // Exclude modular models

  // Load GPT-5 from its folder
  const gpt5Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/index.json'), 'utf8')
  );
  const gpt5Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gpt-5/description.md'), 'utf8'
  ).trim();
  const gpt5UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/use-cases.json'), 'utf8')
  );
  const gpt5Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/pricing.json'), 'utf8')
  );
  const gpt5Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/rating.json'), 'utf8')
  );
  const gpt5Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gpt-5/developer.md'), 'utf8'
  ).trim();

  const gpt5Model = {
    ...gpt5Index,
    detailed_description: gpt5Description,
    use_cases_detail: gpt5UseCases,
    pricing_detail: gpt5Pricing,
    rating_detail: gpt5Rating,
    developer_info: gpt5Developer,
  };

  // Load Grok 4 from its folder
  const grok4Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/index.json'), 'utf8')
  );
  const grok4Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/grok-4/description.md'), 'utf8'
  ).trim();
  const grok4UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/use-cases.json'), 'utf8')
  );
  const grok4Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/pricing.json'), 'utf8')
  );
  const grok4Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/rating.json'), 'utf8')
  );
  const grok4Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/grok-4/developer.md'), 'utf8'
  ).trim();

  const grok4Model = {
    ...grok4Index,
    detailed_description: grok4Description,
    use_cases_detail: grok4UseCases,
    pricing_detail: grok4Pricing,
    rating_detail: grok4Rating,
    developer_info: grok4Developer,
  };

  return [gpt5Model, grok4Model, ...modelsFromJson];
}

const modelsData = loadModels();
const useCasesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/data/use-cases.json'), 'utf8')
);
const blogPostsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/data/blog-posts.json'), 'utf8')
);

const SITE_URL = 'https://whichaimodeltouseforwhat.com';
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Static pages with priorities
const staticPages = [
  { url: '/', priority: '1.00', changefreq: 'weekly' },
  { url: '/models', priority: '0.90', changefreq: 'weekly' },
  { url: '/use-cases', priority: '0.90', changefreq: 'weekly' },
  { url: '/blog', priority: '0.90', changefreq: 'daily' },
  { url: '/comparisons', priority: '0.85', changefreq: 'monthly' },
  { url: '/comparisons/gpt-vs-claude', priority: '0.85', changefreq: 'monthly' },
  { url: '/faq', priority: '0.70', changefreq: 'monthly' },
  { url: '/about', priority: '0.60', changefreq: 'monthly' },
  { url: '/contact', priority: '0.50', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.30', changefreq: 'yearly' },
  { url: '/terms', priority: '0.30', changefreq: 'yearly' },
];

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
  xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Add model detail pages
modelsData.forEach(model => {
  xml += `  <url>
    <loc>${SITE_URL}/models/${model.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
});

// Add use case detail pages
useCasesData.forEach(useCase => {
  xml += `  <url>
    <loc>${SITE_URL}/use-cases/${useCase.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
});

// Add blog post pages
blogPostsData.forEach(post => {
  xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
`;
});

xml += `</urlset>`;

// Write sitemap.xml
fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), xml);

console.log('✅ Sitemap generated successfully!');
console.log(`   - ${staticPages.length} static pages`);
console.log(`   - ${modelsData.length} model pages`);
console.log(`   - ${useCasesData.length} use case pages`);
console.log(`   - ${blogPostsData.length} blog posts`);
console.log(`   - Total: ${staticPages.length + modelsData.length + useCasesData.length + blogPostsData.length} URLs`);
