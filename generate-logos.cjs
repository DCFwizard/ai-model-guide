const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLogos() {
  const inputLogo = path.join(__dirname, 'logo-transparent.png');
  const publicDir = path.join(__dirname, 'public');
  const srcAssetsDir = path.join(__dirname, 'src', 'assets');

  // Ensure directories exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(srcAssetsDir)) {
    fs.mkdirSync(srcAssetsDir, { recursive: true });
  }

  console.log('🎨 Generating logo variants from logo-transparent.png (1024x1024)...\n');

  // 0. Logo for site header/footer (keep transparent)
  await sharp(inputLogo)
    .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(srcAssetsDir, 'logo.png'));
  console.log('✅ src/assets/logo.png (128x128) - For site header/footer with transparency');

  // 1. Logo 600x600 for Google Schema.org (keep transparent)
  await sharp(inputLogo)
    .resize(600, 600, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('✅ logo.png (600x600) - For Google Schema.org with transparency');

  // 2. OG Image 1200x630 for Facebook/WhatsApp/Twitter
  await sharp(inputLogo)
    .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('✅ og-image.png (1200x630) - For Facebook/WhatsApp/Twitter');

  // 3. Favicon 16x16 (with transparency)
  await sharp(inputLogo)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✅ favicon-16x16.png (transparent)');

  // 4. Favicon 32x32 (with transparency)
  await sharp(inputLogo)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✅ favicon-32x32.png (transparent)');

  // 5. Favicon 48x48 (with transparency)
  await sharp(inputLogo)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('✅ favicon-48x48.png (transparent)');

  // 6. Apple Touch Icon 180x180
  await sharp(inputLogo)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180) - For iOS/Safari');

  // 7. Twitter Card 240x240 (square)
  await sharp(inputLogo)
    .resize(240, 240, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'twitter-image.png'));
  console.log('✅ twitter-image.png (240x240) - For Twitter Card');

  console.log('\n🎉 All logo variants generated successfully!');
  console.log('\nGenerated files in public/:');
  console.log('  - logo.png (600x600) → Google Schema.org');
  console.log('  - og-image.png (1200x630) → Facebook/WhatsApp/Social');
  console.log('  - twitter-image.png (240x240) → Twitter Card');
  console.log('  - apple-touch-icon.png (180x180) → iOS/Safari');
  console.log('  - favicon-16x16.png, favicon-32x32.png, favicon-48x48.png');
  console.log('\nNote: favicon.ico should be created manually or using an online tool.');
}

generateLogos().catch(err => {
  console.error('❌ Error generating logos:', err);
  process.exit(1);
});
