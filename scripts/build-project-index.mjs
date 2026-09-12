import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const projectDirectory = new URL('../content/projects/', import.meta.url);
const files = (await readdir(projectDirectory)).filter((file) => file.endsWith('.json')).sort();
const projects = [];

for (const file of files) {
  const project = JSON.parse(await readFile(join(projectDirectory.pathname, file), 'utf8'));
  projects.push(project);
}

await writeFile(
  new URL('../content/projects.json', import.meta.url),
  `${JSON.stringify({ projects }, null, 2)}\n`,
);
