import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '../public/images');
const WEBP_QUALITY = 85;

async function convertImagesInDirectory(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const results = {
    converted: [],
    skipped: [],
    errors: []
  };

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const subResults = await convertImagesInDirectory(fullPath);
      results.converted.push(...subResults.converted);
      results.skipped.push(...subResults.skipped);
      results.errors.push(...subResults.errors);
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.png') {
      const webpPath = fullPath.replace(/\.png$/i, '.webp');

      try {
        try {
          await stat(webpPath);
          console.log(`Ignoré (existe déjà): ${entry.name}`);
          results.skipped.push(entry.name);
          continue;
        } catch {
          // Le fichier n'existe pas, on continue
        }

        const stats = await stat(fullPath);
        const originalSizeKB = (stats.size / 1024).toFixed(2);

        await sharp(fullPath)
          .webp({ quality: WEBP_QUALITY })
          .toFile(webpPath);

        const webpStats = await stat(webpPath);
        const webpSizeKB = (webpStats.size / 1024).toFixed(2);
        const savings = (((stats.size - webpStats.size) / stats.size) * 100).toFixed(1);

        console.log(`${entry.name}`);
        console.log(`PNG: ${originalSizeKB} KB → WebP: ${webpSizeKB} KB (${savings}% plus léger)`);

        results.converted.push({
          name: entry.name,
          originalSize: originalSizeKB,
          webpSize: webpSizeKB,
          savings: savings
        });
      } catch (error) {
        console.error(`Erreur lors de la conversion de ${entry.name}:`, error.message);
        results.errors.push({ name: entry.name, error: error.message });
      }
    }
  }

  return results;
}

async function main() {
  console.log('Début de la conversion des images PNG en WebP...\n');
  console.log(`Dossier: ${IMAGES_DIR}`);

  try {
    const results = await convertImagesInDirectory(IMAGES_DIR);

    console.log('\nRésumé:');
    console.log(`Converties: ${results.converted.length}`);
    console.log(`Ignorées: ${results.skipped.length}`);
    console.log(`Erreurs: ${results.errors.length}`);

    if (results.converted.length > 0) {
      const totalOriginal = results.converted.reduce((sum, r) => sum + parseFloat(r.originalSize), 0);
      const totalWebp = results.converted.reduce((sum, r) => sum + parseFloat(r.webpSize), 0);
      const totalSavings = (((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1);

      console.log(`\nGain total: ${(totalOriginal - totalWebp).toFixed(2)} KB (${totalSavings}%)`);
      console.log(`Avant: ${totalOriginal.toFixed(2)} KB`);
      console.log(`Après: ${totalWebp.toFixed(2)} KB`);
    }

    console.log('\nConversion terminée !');
  } catch (error) {
    console.error('\nErreur fatale:', error);
    process.exit(1);
  }
}

main();
