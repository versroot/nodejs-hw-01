import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PATH_DB } from './constants/contacts.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const PATH = path.join(dirname, PATH_DB.replace(/^src\//, ''));

fs.readFile(PATH, 'utf-8')
  .then((data) => {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  })
  .catch((error) => {
    console.error('Error reading the file:', error);
  });
