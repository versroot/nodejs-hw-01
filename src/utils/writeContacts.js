import { PATH_DB } from '../constants/contacts.js';
import appRoot from 'app-root-path';
import * as fs from 'node:fs/promises';
import path from 'node:path';

const root = appRoot.path;
const PATH = path.join(root, PATH_DB.replace(/^src\//, ''));

export const writeContacts = async (updatedContacts) => {
  fs.writeFile(PATH, JSON.stringify(updatedContacts, null, 2), 'utf-8')
    .then(() => {
      console.log('Contacts updated successfully!');
    })
    .catch((error) => {
      console.error('Error writing the file:', error);
    });
};
