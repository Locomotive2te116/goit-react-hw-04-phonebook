import React from 'react';
import { nanoid } from 'nanoid';
import s from './Input.module.css';
export class Input extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = { name, number, id: nanoid(5) };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact  ${name} already in contacts!`);
      return;
    }
    if (this.props.contacts.some(contact => contact.number === number)) {
      alert(`Contact  ${number} already in contacts!`);
      return;
    }

    this.props.updateContactState(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.createContact}>
        <div className={s.styleForm}>
          <label>
            Name <br />
            <input
              className={s.win}
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Enter contact name"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number <br />
            <input
              className={s.win}
              name="number"
              value={this.state.number}
              type="tel"
              placeholder="Enter contact number"
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <button className={s.inputbtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
