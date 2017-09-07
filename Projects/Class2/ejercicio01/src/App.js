import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    //1- Implementar el state inicial, con una propiedad "selectedLanguage"
    this.state = {
      selectedLanguage : 'English'
    }
    //2- Bindear el metodo updateLanguage
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    console.log("Se hizo click en: ", lang);
    //4- Implementar este metodo, que actualiza el state con el nuevo language
    //debugger;
    this.setState({ selectedLanguage : lang})
  }

  render() {
    var languages = [
      "All",
      "Spanish",
      "French",
      "English",
      "Chinese",
      "Italian"
    ];
    /*Creamos una copia de this en self para poder utilizar dentro del map que se
    encuentra debajo, ya que sino perdemos el contexto*/
    var self = this;
    return (
      <div className="container">
        <div>
          <p>Selected Language is {this.state.selectedLanguage} </p>
        </div>
        <div>
          <ul className="languages">
            <li style={
                languages[0] === this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                ? { color: "#d0021b" } : {} }
                onClick={function() {
                  self.updateLanguage(languages[0]);
                }}
              key={0}
            >
              {languages[0]}
            </li>
            <li
              style={
                languages[1] ===
                  this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                  ? { color: "#d0021b" }
                  : {}
              }
              onClick={function() {
                self.updateLanguage(languages[1]);
              }}
              key={1}
            >
              {languages[1]}
            </li>
            <li
              style={
                languages[2] ===
                  this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                  ? { color: "#d0021b" }
                  : {}
              }
              onClick={function() {
                self.updateLanguage(languages[2]);
              }}
              key={2}
            >
              {languages[2]}
            </li>
            <li
              style={
                languages[3] ===
                  this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                  ? { color: "#d0021b" }
                  : {}
              }
              onClick={function() {
                self.updateLanguage(languages[3]);
              }}
              key={3}
            >
              {languages[3]}
            </li>
            <li
              style={
                languages[4] ===
                  this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                  ? { color: "#d0021b" }
                  : {}
              }
              onClick={function() {
                self.updateLanguage(languages[4]);
              }}
              key={4}
            >
              {languages[4]}
            </li>
            <li
              style={
                languages[5] ===
                  this.state.selectedLanguage /* TODO Acceder y compararlo con el valor de state*/
                  ? { color: "#d0021b" }
                  : {}
              }
              onClick={function() {
                self.updateLanguage(languages[5]);
              }}
              key={5}
            >
              {languages[5]}
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
