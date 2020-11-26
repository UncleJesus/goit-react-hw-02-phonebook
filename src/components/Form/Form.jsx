import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
export default class Form extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };

    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="number">Number</label> <br />
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add To Contacs</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" />
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name} : {contact.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
