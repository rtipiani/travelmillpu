import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = [
    'Arequipa.astro',
    'Chachapoyas.astro',
    'Cusco.astro',
    'Iquitos.astro',
    'Puno.astro',
    'SelvaCentral.astro',
    'ToursRecommended.astro'
];

for (const file of files) {
    const fullPath = path.join(process.cwd(), dir, file);
    if (!fs.existsSync(fullPath)) continue;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Change wrapper <a> to <div>
    content = content.replace(/<a\s+href=\{tour\.link\}\s+target="_blank"\s+rel="noopener noreferrer"\s+class="flex flex-col/g, '<div class="flex flex-col');
    
    // Replace the inner button and closing </a> with two proper <a> buttons
    const regex = /<button class="w-full mt-auto[^>]*>\s*Consultar Ahora\s*<i[^>]*\/>\s*<\/button>\s*<\/div>\s*<\/a>/g;
    
    const newButtons = `<div class="mt-auto flex flex-col gap-3">
                                <a href="#" class="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-800 text-sm font-bold rounded-xl hover:bg-gray-200 transition-all duration-300">
                                    Ver Itinerario
                                </a>
                                <a href={tour.link} target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center px-4 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-all duration-300">
                                    Consultar Ahora
                                    <i class="fab fa-whatsapp ml-2 text-lg" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>`;
                    
    content = content.replace(regex, newButtons);
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated ' + file);
}
