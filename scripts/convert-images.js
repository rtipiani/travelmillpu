import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function convertImages() {
    console.log(`Starting conversion in ${imagesDir}...`);
    try {
        const files = fs.readdirSync(imagesDir);
        let converted = 0;
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.webp' || ext === '.png') {
                const baseName = path.basename(file, ext);
                const inputPath = path.join(imagesDir, file);
                const outputPath = path.join(imagesDir, `${baseName}.avif`);
                
                // Skip if avif already exists
                if (!fs.existsSync(outputPath)) {
                    console.log(`Converting ${file} to AVIF...`);
                    await sharp(inputPath)
                        .avif({ quality: 80 })
                        .toFile(outputPath);
                    converted++;
                } else {
                    console.log(`Skipping ${file}, AVIF already exists.`);
                }
            }
        }
        console.log(`\nSuccessfully converted ${converted} images to AVIF.`);
    } catch (err) {
        console.error('Error during conversion:', err);
    }
}

convertImages();
