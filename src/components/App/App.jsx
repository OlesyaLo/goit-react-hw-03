import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox .jsx';
import ContactList from '../ContactList/ContactList.jsx';

import initialContacts from '../../contacts.json';

import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
