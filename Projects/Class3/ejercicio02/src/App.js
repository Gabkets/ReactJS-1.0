import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock /* time={new Date().toLocaleTimeString()}*/ />
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { initialTime : new Date().toLocaleTimeString() };
    this.interval = setInterval(() => this.updateTime(), 1000);
  }
  updateTime = (time) =>{
//debugger;
    this.setState({
         initialTime : new Date().toLocaleTimeString()
    });
  }

  startStop = () => {
    if(this.interval){
      clearInterval(this.interval)
      this.interval = null;
    }else{
      this.interval = setInterval(() => this.thick(), 1000);
    }
  }
  render() {

    return (
      <div>
        <h1>Hello, world, I'm the Clock component!</h1>
        <h2>The time is: {this.state.initialTime}.</h2>
        <button
          onClick={ this.startStop }
        >
          Actualizar hora
        </button>
      </div>
    );
  }
}

export default App;
