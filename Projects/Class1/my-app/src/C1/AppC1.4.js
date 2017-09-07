import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function formatDate(date) {
  return date.toLocaleDateString();
}

class UserInfoName extends React.Component {
  render() {
      return(
        <div className="UserInfo-name">
          {this.props.comment.author.name}
        </div>
      );
  }
}

class UserInfo extends React.Component {
  render() {
    return(
      <div className="UserInfo">
        <img
          className="Avatar"
          src={this.props.comment.author.avatarUrl}
          alt={this.props.comment.author.name}
        />
      <UserInfoName comment={this.props.comment}/>
      </div>
    );
  }
}

class CommentText extends React.Component {
  render() {
    return(
      <div className="Comment-text">
        {this.props.comment.text}
      </div>
    );
  }
}

class CommentDate extends React.Component {
  render() {
    return(
      <div className="Comment-date">
        {formatDate(this.props.comment.date)}
      </div>
    );
  }
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo comment={props.comment}/>
      <CommentText comment={props.comment}/>
      <CommentDate comment={props.comment}/>
    </div>
  );
}

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64"
      }
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Comment comment={comment} />
        </div>
      </div>
    );
  }
}

export default App;
