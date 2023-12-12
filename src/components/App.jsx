import { useState, useEffect } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Input } from './Input/Input';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const updateContactState = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getFilteredData = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <Input contacts={contacts} updateContactState={updateContactState} />
      <h2 className={s.title2}>Contacts</h2>
      <ContactsList
        contacts={contacts}
        getFilteredData={getFilteredData}
        deleteContact={deleteContact}
      >
        <Filter changeFilter={changeFilter} filterState={filter} />
      </ContactsList>
    </div>
  );
};
