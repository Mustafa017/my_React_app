import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const people = [{ name: "Mustafa" }, { name: "Stephen" }, { name: "Abdul" }];

const element = (
  <ol>
    {people.map((person, index) => (
      <li key={index}>{person.name}</li>
    ))}
  </ol>
);
ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
