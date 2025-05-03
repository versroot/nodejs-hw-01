import * as fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import appRoot from 'app-root-path';

const root = appRoot.path;
const PATH = path.join(root, PATH_DB.replace(/^src\//, ''));
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the file:', error);
    throw error;
  }
};
