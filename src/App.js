import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contacts={[
            { name: "Mustafa" },
            { name: "Stephen" },
            { name: "Abdul" },
          ]}
        />
        <ContactList
          contacts={[{ name: "Alex" }, { name: "Beatrice" }, { name: "Janet" }]}
        />
      </div>
    );
  }
}

export default App;
