// Generate dynamic sitemap.xml from JSON data
const fs = require('fs');
const path = require('path');

// Read data files
const modelsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/data/models.json'), 'utf8')
);
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
