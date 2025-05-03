import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    // I assume there is no need to check if the array is empty

    writeContacts([]);
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();
