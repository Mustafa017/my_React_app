import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

class ContactList extends React.Component {
  render() {
    const people = [
      { name: "Mustafa" },
      { name: "Stephen" },
      { name: "Abdul" },
    ];

    return (
      <ol>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

ReactDOM.render(<ContactList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
