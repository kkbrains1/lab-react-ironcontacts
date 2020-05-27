import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

//const firstFiveContacts = [...contacts].slice(0, 5);

/* const ContactsTable = (props) => {
  //console.log(props);
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="profile" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td>{props.id}</td>
      <td>
        <button onClick={() => deleteContact(props.id)}>Delete</button>
      </td>
    </tr>
  );
}; */

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: [...contacts].slice(0, 5),
      contactsStock: [...contacts].slice(5),
    };
    //console.log('this state is', this.state);
  }

  addContact = () => {
    let index = Math.floor(
      Math.random() *
        (this.state.contactsStock.length - this.state.contactsList.length) +
        this.state.contactsList.length
    );
    let newContact = this.state.contactsStock.splice(index, 1);

    this.setState({
      contactsList: [...this.state.contactsList].concat(newContact),
      //contactsList: [...this.state.contactsList, newContact],
    });
  };

  sortName = () => {
    this.setState({
      contactsList: [...this.state.contactsList].sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    });
  };

  sortPopularity = () => {
    this.setState({
      contactsList: [...this.state.contactsList].sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    });
  };

  deleteContact = (id) => {
    console.log(id);
    this.setState({
      contactsList: this.state.contactsList.filter(
        (contact) => contact.id !== id
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <span>
          <button onClick={this.addContact}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
        </span>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="profile" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    <span role="img" aria-label="delete-button">
                      💥DELETE💥
                    </span>
                  </button>
                </td>
              </tr>

              /*<ContactsTable key={contact.id} {...contact} />*/
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
