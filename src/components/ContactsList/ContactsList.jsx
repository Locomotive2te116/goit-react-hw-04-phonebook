import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';
export const ContactsList = ({
  contacts,
  getFilteredData,
  children,
  deleteContact,
}) => {
  const filteredContacts = getFilteredData(contacts);

  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p>No contacts match your search</p>
      ) : (
        <ul className={s.contact_list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};
