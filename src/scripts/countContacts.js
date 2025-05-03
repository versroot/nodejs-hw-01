import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return Object.keys(contacts).length;
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};
console.log(await countContacts());
