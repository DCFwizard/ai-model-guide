const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgPath = path.join(__dirname, 'public', 'logo.svg');
const svgContent = fs.readFileSync(svgPath, 'utf-8');

// Create Resvg instance with options for a larger size
const opts = {
  fitTo: {
    mode: 'width',
    value: 600,
  },
};

const resvg = new Resvg(svgContent, opts);
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

// Save the PNG
const pngPath = path.join(__dirname, 'public', 'logo.png');
fs.writeFileSync(pngPath, pngBuffer);

console.log('✅ Logo PNG created successfully at:', pngPath);
console.log('   Width:', pngData.width);
console.log('   Height:', pngData.height);
