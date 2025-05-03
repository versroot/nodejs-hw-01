import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContact = createFakeContact();
    const contacts = [...oldContacts, newContact];
    await writeContacts(contacts);
    console.log(`New contact added successfully!`);
  } catch (error) {
    console.error('Error adding contacts:', error);
  }
};

addOneContact();
