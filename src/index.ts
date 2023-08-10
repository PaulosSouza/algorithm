import { statSync } from "node:fs";
import { readdir } from "node:fs/promises";

const IGNORED_FILES = ["index.ts"];

async function readFilesAndImport(path: string) {
  const stat = statSync(path);

  if (stat.isFile()) {
    await import(path);
    return;
  }

  if (!stat.isDirectory()) {
    return;
  }

  const files = await readdir(path, { withFileTypes: true });

  for (const file of files) {
    const fullPath = `${path}/${file.name}`;

    if (IGNORED_FILES.includes(file.name) || /\.md$/.test(file.name)) {
      continue;
    }

    await readFilesAndImport(fullPath);
  }
}

async function start() {
  try {
    await readFilesAndImport(__dirname);
  } catch (error) {
    console.error(error);
    return;
  }
}

start();
