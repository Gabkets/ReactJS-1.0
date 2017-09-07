import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Comments extends React.Component{
  render() {
    return(
      <div className="c-comments">
        <p>{this.props.comment}</p>
      </div>
    )
  }
}

class Badge extends React.Component {
  render() {
    var comments = {
      comment: 'starting with react js appliactions'
    };

    return (
      <div className="c-badge">
        <img className="c-badge__img" src={this.props.img} alt="avatar" />
        <h2>Name: {this.props.name}</h2>
        <h3>NickName: {this.props.nickName}</h3>
        <span>gloria</span>
        <Comments comment={comments.comment} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    var user = {
      name: "Luis Suarez",
      nickName: "Pistolero",
      img:
        "http://cdne.elbocon.pe/thumbs/uploads/img/2017/03/30/luis-suarez-y-su-gran-gesto-jpg_900x0.jpg"
    };

    return (
      <div className="App a-app">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Badge name={user.name} img={user.img} nickName={user.nickName} user={user}/>
        </div>
      </div>
    );
  }
}

export default App;
