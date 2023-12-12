import React from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Input } from './Input/Input';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // fdjdydj
  componentDidMount() {
    const contactsAddToLS = localStorage.getItem('contacts');
    if (contactsAddToLS) {
      this.setState({
        contacts: JSON.parse(contactsAddToLS),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  updateContactState = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredData = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return this.state.contacts;
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <Input
          contacts={this.state.contacts}
          updateContactState={this.updateContactState}
        />
        <h2 className={s.title2}>Contacts</h2>
        <ContactsList
          contacts={this.state.contacts}
          getFilteredData={this.getFilteredData}
          deleteContact={this.deleteContact}
        >
          <Filter
            changeFilter={this.changeFilter}
            filterState={this.state.filter}
          />
        </ContactsList>
      </div>
    );
  }
}
