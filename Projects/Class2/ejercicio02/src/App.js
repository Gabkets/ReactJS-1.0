import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter increment={2} initial={1}/>
      </div>
    );
  }
}

// function Counter(props) {
//   return <button>{props.value}</button>;
// }

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value : props.initial }
    this.updateValue = this.updateValue.bind(this)
  }
  updateValue(i) {
    //4- Implementar este metodo, que actualiza el state con el nuevo language
    //Another option
    //var prevValue = this.state.value
    //this.setState({ value : prevValue + numb })
    this.setState(function(prevState, props){
      return{
        value: prevState.value + props.increment
      }
    });
  }

  render(){
    //var self = this;
    return(
      <button onClick = {this.updateValue}>{this.state.value}</button>
    )
  }
}

export default App;
