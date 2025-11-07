import sharp from 'sharp';
import { readFileSync } from 'fs';

const width = 1200;
const height = 630;

// SVG matching the actual site style: white/light gray background with sky blue accents
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Light gray background matching site -->
  <rect width="${width}" height="${height}" fill="#f1f5f9"/>

  <!-- Subtle gradient overlay -->
  <defs>
    <linearGradient id="subtle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#subtle)"/>

  <!-- Logo centered at top - Brain Circuit icon with exact site colors -->
  <g transform="translate(${width/2}, 150) scale(10)">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M9 13a4.5 4.5 0 0 0 3-4"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M12 13h4"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M12 18h6a2 2 0 0 1 2 2v1"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M12 8h8"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <path d="M16 8V5a2 2 0 0 1 2-2"
          fill="none" stroke="#0ea5e9" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-12, -12)"/>
    <circle cx="0" cy="0" r="0.5" fill="#0ea5e9" transform="translate(-12, -12) translate(16, 13)"/>
    <circle cx="0" cy="0" r="0.5" fill="#0ea5e9" transform="translate(-12, -12) translate(18, 3)"/>
    <circle cx="0" cy="0" r="0.5" fill="#0ea5e9" transform="translate(-12, -12) translate(20, 21)"/>
    <circle cx="0" cy="0" r="0.5" fill="#0ea5e9" transform="translate(-12, -12) translate(20, 8)"/>
  </g>

  <!-- Title centered below logo - dark text like site -->
  <text
    x="${width/2}"
    y="360"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    font-size="68"
    font-weight="bold"
    fill="#0f172a"
    text-anchor="middle">
    AI Model Guide
  </text>

  <!-- Subtitle with sky blue color -->
  <text
    x="${width/2}"
    y="445"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    font-size="36"
    fill="#0284c7"
    text-anchor="middle">
    Choose the Right AI Model
  </text>

  <!-- Description in gray -->
  <text
    x="${width/2}"
    y="525"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    font-size="28"
    fill="#64748b"
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

console.log('✅ og-image.png generated successfully with centered logo on top!');
