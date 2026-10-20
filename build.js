/* Build: assembles index.html from src/. Usage: node build.js */
const fs = require('fs'), path = require('path');
const src = f => fs.readFileSync(path.join(__dirname, 'src', f), 'utf8');
const js = ['astro.js', 'tajika-data.js', 'phala.js', 'tajika.js', 'ui.js'].map(f => `/* ---- ${f} ---- */\n` + src(f)).join('\n');
const html = src('index.template.html').replace('/*__CSS__*/', () => src('styles.css')).replace('/*__JS__*/', () => js);
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log(`index.html written, ${(html.length / 1024).toFixed(0)} KB`);
