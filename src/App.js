import React, { Component } from "react";
import ListContact from "./ListContacts";

class App extends Component {
  // move the contacts array into the state so that react can track changes to its contents.
  // e.g when an entry is deleted
  state = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg",
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ],
  };

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
