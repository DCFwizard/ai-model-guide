import sharp from 'sharp';
import { readFileSync } from 'fs';

const width = 1200;
const height = 630;

// SVG with logo centered at top and text below
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

  <!-- Logo centered at top (brain circuit icon) -->
  <g transform="translate(${width/2 - 60}, 120)">
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M12 5a3 3 0 1 0 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M15 6.5v1a2 2 0 0 0 2 2v0a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M5.5 17H8m5 0h5.5" stroke="white" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="white"/>
      <path d="M18 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="white"/>
    </svg>
  </g>

  <!-- Title centered below logo -->
  <text
    x="${width/2}"
    y="320"
    font-family="Arial, sans-serif"
    font-size="56"
    font-weight="bold"
    fill="white"
    text-anchor="middle">
    AI Model Guide
  </text>

  <!-- Subtitle -->
  <text
    x="${width/2}"
    y="400"
    font-family="Arial, sans-serif"
    font-size="32"
    fill="rgba(255,255,255,0.9)"
    text-anchor="middle">
    Choose the Right AI Model
  </text>

  <!-- Description -->
  <text
    x="${width/2}"
    y="470"
    font-family="Arial, sans-serif"
    font-size="24"
    fill="rgba(255,255,255,0.8)"
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
