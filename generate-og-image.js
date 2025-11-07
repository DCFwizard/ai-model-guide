import sharp from 'sharp';
import { readFileSync } from 'fs';

const width = 1200;
const height = 630;

// SVG with large logo centered at top and text below
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0284c7;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#grad)"/>

  <!-- Logo centered at top - Large Brain Circuit Icon -->
  <g transform="translate(${width/2}, 150) scale(8)">
    <!-- Brain Circuit paths scaled and centered -->
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
          stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(-12, -12)"/>
    <path d="M12 5a3 3 0 1 0 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
          stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(-12, -12)"/>
    <path d="M15 6.5v1a2 2 0 0 0 2 2v0a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2"
          stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(-12, -12)"/>
    <path d="M5.5 17H8m5 0h5.5"
          stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(-12, -12)"/>
    <circle cx="0" cy="0" r="1" fill="white" transform="translate(-12, -12) translate(12, 11)"/>
    <circle cx="0" cy="0" r="1" fill="white" transform="translate(-12, -12) translate(18, 16)"/>
    <circle cx="0" cy="0" r="1" fill="white" transform="translate(-12, -12) translate(6, 16)"/>
  </g>

  <!-- Title centered below logo -->
  <text
    x="${width/2}"
    y="350"
    font-family="Arial, Helvetica, sans-serif"
    font-size="64"
    font-weight="bold"
    fill="white"
    text-anchor="middle">
    AI Model Guide
  </text>

  <!-- Subtitle -->
  <text
    x="${width/2}"
    y="440"
    font-family="Arial, Helvetica, sans-serif"
    font-size="36"
    fill="rgba(255,255,255,0.95)"
    text-anchor="middle">
    Choose the Right AI Model
  </text>

  <!-- Description -->
  <text
    x="${width/2}"
    y="520"
    font-family="Arial, Helvetica, sans-serif"
    font-size="28"
    fill="rgba(255,255,255,0.85)"
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
