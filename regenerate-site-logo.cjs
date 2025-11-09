const sharp = require('sharp');
const path = require('path');

async function regenerateSiteLogo() {
  const inputLogo = path.join(__dirname, 'logo-transparent.png');
  const outputLogo = path.join(__dirname, 'src', 'assets', 'logo.png');

  console.log('🎨 Regenerating site logo with tighter crop...\n');

  // Generate logo with minimal padding for header/footer
  // Use 'cover' instead of 'contain' to fill more space
  await sharp(inputLogo)
    .resize(128, 128, {
      fit: 'cover',  // Fill the entire space (tighter crop)
      position: 'center',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(outputLogo);

  console.log('✅ src/assets/logo.png (128x128) - Regenerated with tighter crop');
  console.log('   Less padding, logo fills more space!');
  console.log('\n🎉 Done! Logo now has minimal borders.');
}

regenerateSiteLogo().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
