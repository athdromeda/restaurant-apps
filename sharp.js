const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroImage = path.resolve(
  __dirname,
  'src/public/images/heros/hero-image_4.jpg',
);
const destination = path.resolve(__dirname, 'src/public/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

sharp(heroImage)
  .resize(800)
  .toFile(path.resolve(__dirname, `${destination}/hero-image-large.jpg`));

sharp(heroImage)
  .resize(500)
  .toFile(path.resolve(__dirname, `${destination}/hero-image-small.jpg`));
