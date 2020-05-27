import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

const firstFiveContacts = [...contacts].slice(0, 5);

const ContactsTable = (props) => {
  //console.log(props);
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="profile" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
    </tr>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactsList: firstFiveContacts,
    };
    //console.log('this state is', this.state);
  }

  addContact = () => {
    let index = Math.floor(
      Math.random() * (contacts.length - firstFiveContacts.length) +
        firstFiveContacts.length
    );
    let newContact = [...contacts].splice(index, 1);
    //console.log(newContact);
    this.setState({
      contactsList: [...this.state.contactsList].concat(newContact),
      //contactsList: [...this.state.contactsList, newContact],
    });
    //console.log(this.state.contactsList);
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((contact) => (
              <ContactsTable key={contact.id} {...contact} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
