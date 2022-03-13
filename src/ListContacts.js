import React, { Component } from "react";

class ListContact extends Component {
  render() {
    console.log("props", this.props);
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            {/* double curly braces to inline the style attribute. Template literals parse the url */}
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className="contact-remove">remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContact;
