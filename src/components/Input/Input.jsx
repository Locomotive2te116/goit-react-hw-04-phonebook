import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Input.module.css';

export const Input = ({ contacts, updateContactState }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const type = event.target.name;
    const val = event.target.value;
    if (type === 'name') {
      setName(val);
    }
    if (type === 'number') {
      setNumber(val);
    }
  };

  const createContact = event => {
    event.preventDefault();

    const newContact = { name, number, id: nanoid(5) };

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact  ${name} already in contacts!`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert(`Contact  ${number} already in contacts!`);
      return;
    }

    updateContactState(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={createContact}>
      <div className={s.styleForm}>
        <label>
          Name <br />
          <input
            className={s.win}
            name="name"
            value={name}
            type="text"
            placeholder="Enter contact name"
            onChange={handleChange}
          />
        </label>

        <label>
          Number <br />
          <input
            className={s.win}
            name="number"
            value={number}
            type="tel"
            placeholder="Enter contact number"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button className={s.inputbtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
