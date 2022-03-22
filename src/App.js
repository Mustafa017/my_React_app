import React, { Component } from "react";
import ListContact from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {
  // move the contacts array into the state so that react can track changes to its contents.
  // e.g when an entry is deleted
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
  }
  // passing a function to setState instead of an object.
  // This is done if your new state depends on the current state.
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id),
    }));
  };
  render() {
    return (
      <ListContact
        onDeleteContact={this.removeContact}
        contacts={this.state.contacts}
      ></ListContact>
    );
  }
}

export default App;
