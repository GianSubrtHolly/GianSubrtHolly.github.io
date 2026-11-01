import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const projectDirectory = new URL('../content/projects/', import.meta.url);
const files = (await readdir(projectDirectory)).filter((file) => file.endsWith('.json')).sort();
const projects = [];

console.log(`Found ${files.length} project file(s).`);

for (const [index, file] of files.entries()) {
  const project = JSON.parse(await readFile(join(projectDirectory.pathname, file), 'utf8'));
  projects.push(project);
  console.log(`Read ${file} (${index + 1}/${files.length}).`);
}

await writeFile(
  new URL('../content/projects.json', import.meta.url),
  `${JSON.stringify({ projects }, null, 2)}\n`,
);

console.log(`Wrote content/projects.json with ${projects.length} project(s).`);
