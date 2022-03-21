import React, { Component } from "react";
import PropTypes from "prop-types";

// change to a class component because we need to introduce a state to our component
class ListContact extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  updateQuery = (query) => {
    // Remember the form inputs are saved in the DOM.
    // We are not updating the state based on previous state, therefore we can pass an
    // object instead of a function to setState. The object gets merged to the current state.
    this.setState({
      query: query.trim(),
    });
  };

  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* bind the input to the state. Hence our input state lives inside our component.*/}
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            // 1. whenever a value changes, the onchange calls updateQuery passing it the text.
            // 2. Then updateQuery function updates the state (i.e the query property)
            // 3. The Input field is updated with the value in the state.
            onChange={(event) => {
              this.updateQuery(event.target.value);
            }}
          />
        </div>
        {JSON.stringify(this.state)}
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
              <button
                className="contact-remove"
                onClick={() => this.props.onDeleteContact(contact)}
              >
                remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContact;
