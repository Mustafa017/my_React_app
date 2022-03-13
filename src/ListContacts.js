import React, { Component } from "react";

class ListContact extends Component {
  render() {
    console.log("props", this.props);
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ol>
    );
  }
}

export default ListContact;
