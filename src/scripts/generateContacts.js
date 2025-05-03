import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const nArg = process.argv[2];
const number = parseInt(nArg, 10);

if (isNaN(number) || number <= 0) {
  console.error('Please provide a valid positive integer as an argument.');
  process.exit(1);
}

export const generateContacts = async (number) => {
  try {
    const oldContacts = await readContacts();
    let newContacts = [];
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      newContacts.push(newContact);
    }
    const contacts = [...oldContacts, ...newContacts];
    await writeContacts(contacts);
    console.log(`New ${number} contact(s) added successfully!`);
  } catch (error) {
    console.error('Error adding contacts:', error);
  }
};

generateContacts(number);
