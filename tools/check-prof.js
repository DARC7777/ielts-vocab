// Revisa los archivos prof/<id>.js y actualiza los contadores (n) de prof/index.js.
// Uso: node tools/check-prof.js
// Avisa de líneas mal formadas, palabras repetidas dentro de una familia y áreas vacías.
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'prof');
const indexFile = path.join(dir, 'index.js');
let index = fs.readFileSync(indexFile, 'utf8');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(index + '\n;this.PROF_FAMILIES = PROF_FAMILIES;', ctx);

let problems = 0, total = 0;
const warn = msg => { problems++; console.log('  ⚠️  ' + msg); };
for(const fam of ctx.PROF_FAMILIES){
  const file = path.join(dir, fam.id + '.js');
  if(!fs.existsSync(file)){ console.log(`${fam.icon} ${fam.id}: sin archivo todavía`); continue; }
  let data = null;
  const c2 = { registerProf: d => { data = d; } }; vm.createContext(c2);
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), c2); }
  catch(e){ console.log(`${fam.icon} ${fam.id}: ERROR al leer el archivo → ${e.message}`); problems++; continue; }
  if(!data || data.id !== fam.id){ console.log(`${fam.icon} ${fam.id}: el archivo no llama a registerProf con id '${fam.id}'`); problems++; continue; }
  console.log(`${fam.icon} ${fam.id}`);
  const seen = new Map();
  let n = 0;
  data.areas.forEach((a, ai) => {
    let w = 0, p = 0;
    ['w', 'p'].forEach(k => (a[k] || '').split('\n').forEach((line, li) => {
      if(!line.trim()) return;
      const parts = line.split(' | ');
      const where = `${a.en} (${k}, línea ${li})`;
      if(parts.length < 2 || parts.length > 3) return warn(`${where}: formato «inglés | español» → ${line.trim()}`);
      const [en, es] = parts.map(s => s.trim());
      if(!en || !es) return warn(`${where}: falta el inglés o el español → ${line.trim()}`);
      const key = en.toLowerCase();
      if(seen.has(key)) return warn(`${where}: «${en}» repetida (ya está en ${seen.get(key)})`);
      seen.set(key, a.en);
      if(k === 'w') w++; else p++;
      n++;
    }));
    console.log(`   ${a.en}: ${w} palabras · ${p} frases`);
    if(w + p === 0) warn(`${a.en}: área vacía`);
  });
  console.log(`   TOTAL ${n}`);
  total += n;
  index = index.replace(new RegExp(`(id: '${fam.id}', icon: '[^']*', n: )\\d+`), `$1${n}`);
}
fs.writeFileSync(indexFile, index);
console.log(`\nTotal: ${total} entradas · ${problems} problema(s)`);
process.exit(problems ? 1 : 0);
