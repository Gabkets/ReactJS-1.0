import React, { Component } from "react";
import "./Game.css";

class Square extends Component {
  constructor(props){
    super(props);
    this.handlClick = this.handlClick.bind(this);
  }
  handlClick(){
    this.props.onPress();
  }
  render() {
    return (
      <button className="square" onClick={this.handlClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xisNext: true
    }
    this.handlClick = this.handlClick.bind(this);
    this.reset = this.reset.bind(this);
  }
  handlClick(i){
    if(calculateWinner(this.state.squares)){
      return
    }
    if(this.state.squares[i] !== null){
      return
    }
    var sq = this.state.squares.slice();
    var isX = this.state.xisNext;

    if(isX === true){
        sq[i] = 'X';
    }else{
        sq[i] = 'O';
    }

    this.setState({
      squares : sq,
      xisNext: !isX
    });
  }
  reset(){
    this.setState({
      squares: Array(9).fill(null),
      xisNext: true
    });
  }
  renderSquare(i) { //this alow us to reuse the component inside our render with some arguments availables
    var self = this;
    return <Square
      value={this.state.squares[i]}
      onPress={function(){
        self.handlClick(i);
      }}
      />;
  }

  render() {
    var status = this.state.xisNext ? "Next player: X" : "Next player: O";
    var winner = calculateWinner(this.state.squares);

    if(winner){
      status = "Winner player " + winner;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>

    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

// ========================================
function calculateWinner(squares) {
  var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    var [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
