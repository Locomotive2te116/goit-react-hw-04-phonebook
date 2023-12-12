import React from 'react';
import s from './ContactItem.module.css';
export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.contact_item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={s.contactsBtn}
        type="button"
        onClick={event => deleteContact(id, event)}
      >
        Delete
      </button>
    </li>
  );
};
