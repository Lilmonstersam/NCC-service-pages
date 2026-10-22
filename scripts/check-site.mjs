import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../preview/', import.meta.url));
const external = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
let references = 0;
async function localReference(file, raw) {
  const value = decode(raw).trim();
  if (!value || external.test(value)) return;
  assert(!value.startsWith('/'), `${path.basename(file)} uses a root-relative URL: ${value}`);
  const pathname = decodeURIComponent(value.split(/[?#]/)[0]);
  if (!pathname) return;
  const target = path.resolve(path.dirname(file), pathname);
  assert(target.startsWith(root), `Reference leaves the published site: ${value}`);
  assert((await stat(target)).isFile(), `Missing asset: ${value}`);
  references++;
}
async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, {withFileTypes:true})) {
    assert(!entry.isSymbolicLink(), `Symlink is not a deployable source: ${entry.name}`);
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else files.push(file);
  }
  return files;
}
const files = await walk(root);
const pages = files.filter(file => file.endsWith('.html'));
assert.equal(pages.length, 8, 'Expected the overview, six detail pages and contact prototype');
let faqs = 0;
for (const file of files) {
  if (!/\.(?:html|css)$/.test(file)) continue;
  const content = await readFile(file,'utf8');
  if (file.endsWith('.html')) {
    assert.equal((content.match(/<h1\b/gi)||[]).length,1, `Expected one H1: ${file}`);
    assert(/name="robots"\s+content="noindex, nofollow"/.test(content), `Missing review noindex: ${file}`);
    assert(!content.includes('_files/'), `Unbundled download dependency: ${file}`);
    const details = [...content.matchAll(/<details\b([^>]*)>/gi)];
    for (const detail of details) {
      assert(!/\bopen(?:\s|=|$)/i.test(detail[1]), `FAQ is expanded on load: ${file}`);
      faqs++;
    }
    if (!file.endsWith('contact.html')) {
      assert.equal((content.match(/class="namoli-enquiry-form"/g)||[]).length,1, `Expected inline form: ${file}`);
      assert.equal((content.match(/id="contact-form"/g)||[]).length,1, `Expected unique form anchor: ${file}`);
    }
    for (const match of content.matchAll(/\b(?:src|href)\s*=\s*(["'])(.*?)\1/gi)) await localReference(file,match[2]);
    for (const match of content.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) JSON.parse(match[1]);
  }
  // Stylesheets and HTML inline styles share the same local URL checks.
  for (const match of content.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)) await localReference(file,match[2]);
}
assert.equal(faqs,42,'Expected seven collapsed FAQs on each detail page');
console.log(`Checked ${pages.length} pages, ${faqs} collapsed FAQs and ${references} local references.`);
