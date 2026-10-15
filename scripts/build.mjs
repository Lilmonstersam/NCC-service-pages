import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import './check-site.mjs';

const source = fileURLToPath(new URL('../preview/',import.meta.url));
const output = fileURLToPath(new URL('../dist/',import.meta.url));
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await cp(source,output,{recursive:true});
await writeFile(`${output}/.nojekyll`,'');
console.log('Built dist/ for GitHub Pages.');
