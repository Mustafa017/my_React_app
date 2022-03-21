import React from "react";
import PropTypes from "prop-types";
// creating a stateless function component.
// Note that the first parameter is props and we don't use the `this` keyword.
function ListContact(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map((contact) => (
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
          <button
            className="contact-remove"
            onClick={() => props.onDeleteContact(contact)}
          >
            remove
          </button>
        </li>
      ))}
    </ol>
  );
}

// Use PropTypes to type check the data passed to props
ListContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContact;
