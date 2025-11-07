import sharp from 'sharp';
import { readFileSync } from 'fs';

const width = 1200;
const height = 630;

// Read the REAL logo from the site
const logoSvg = readFileSync('./public/logo.svg', 'utf8');

// Extract just the paths from the real logo (without the svg wrapper)
const logoContent = logoSvg
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '')
  .trim();

// SVG using EXACT site styles and REAL logo
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Exact background from site: slate-100 with subtle gradient -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- REAL logo from site, centered and scaled -->
  <g transform="translate(${width/2 - 80}, 100) scale(6.67)">
    ${logoContent}
  </g>

  <!-- Title - exact same classes as HomePage: text-4xl font-bold text-slate-900 tracking-tighter -->
  <text
    x="${width/2}"
    y="360"
    font-family="-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, sans-serif"
    font-size="68"
    font-weight="700"
    letter-spacing="-0.05em"
    fill="#0f172a"
    text-anchor="middle">
    AI Model Guide
  </text>

  <!-- Subtitle - text-xl text-sky-600 -->
  <text
    x="${width/2}"
    y="445"
    font-family="-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, sans-serif"
    font-size="36"
    fill="#0284c7"
    text-anchor="middle">
    Choose the Right AI Model
  </text>

  <!-- Description - text-lg text-slate-600 -->
  <text
    x="${width/2}"
    y="525"
    font-family="-apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto, sans-serif"
    font-size="28"
    fill="#475569"
    text-anchor="middle">
    Compare capabilities, costs, and use cases
  </text>
</svg>
`;

// Generate PNG from SVG
await sharp(Buffer.from(svg))
  .resize(width, height)
  .png()
  .toFile('./public/og-image.png');

console.log('✅ og-image.png generated using REAL site logo and styles!');
