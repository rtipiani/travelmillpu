import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

function updateRefs(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            updateRefs(fullPath);
        } else if (file.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updatedContent = content
                .replace(/\/images\/([^"']+)\.webp/g, '/images/$1.avif')
                .replace(/\/images\/([^"']+)\.png/g, '/images/$1.avif');
                
            if (content !== updatedContent) {
                fs.writeFileSync(fullPath, updatedContent, 'utf8');
                console.log(`Updated references in ${file}`);
            }
        }
    }
}

console.log(`Updating references in ${componentsDir}...`);
updateRefs(componentsDir);
console.log('Done.');
