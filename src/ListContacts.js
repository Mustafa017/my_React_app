import React, { Component } from "react";
import PropTypes from "prop-types";
import sortBy from "sort-by";
import escapeRegExp from "escape-string-regexp";

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
    // object instead of a function to setState. The new state is merged to the component's internal state.
    this.setState({
      query: query.trim(),
    });
  };

  clearQuery = () => {
    this.setState({
      query: "",
    });
  };

  render() {
    const { contacts, onDeleteContact, onNavigate } = this.props;
    const { query } = this.state;
    let showingContacts;

    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingContacts = contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(sortBy("name"));
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* bind the input to the state. Hence our input state lives inside our component.*/}
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            // 1. whenever a value changes, the onchange event listener invokes updateQuery passing it the text.
            // 2. Then updateQuery function updates the state (i.e the query property)
            // 3. The Input field is updated with the value in the state.
            onChange={(event) => {
              this.updateQuery(event.target.value);
            }}
          />
          <a href="#create" onClick={onNavigate} className="add-contact">
            Add Contact
          </a>
        </div>
        {/* {JSON.stringify(this.state)} */}

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length} total.
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map((contact) => (
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
                onClick={() => onDeleteContact(contact)}
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
