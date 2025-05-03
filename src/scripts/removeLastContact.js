import { countContacts } from './countContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const count = await countContacts();
  if (count === 0) {
    console.log('"Contacts" is empty, nothing to remove');

    return;
  } else {
    try {
      const oldContacts = await readContacts();
      const contacts = [...oldContacts];
      contacts.pop();
      console.log('The last added contact was removed');
      await writeContacts(contacts);
    } catch (error) {
      console.error('Error removing the contact:', error);
    }
  }
};

removeLastContact();
