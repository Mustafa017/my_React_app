import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ListContact from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {
  // move the contacts array into the state so that react can track changes to its contents.
  // e.g when an entry is deleted
  state = {
    screen: "list",
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
    // remove from component's state
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id),
    }));

    // remove from database
    ContactsAPI.remove(contact);
  };
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ListContact
                onDeleteContact={this.removeContact}
                contacts={this.state.contacts}
              />
            }
          />
          <Route path="/create" element={<CreateContact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
