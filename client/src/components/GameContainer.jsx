import React from 'react'
import Board from './Board'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      winner: false,
      currentPlayer: "Player1"
    }
  }

  getNameOfNextPlayer() {
    if (this.state.currentPlayer === 'Player1')
      return 'Player2';
    else return 'Player1';
  }

  checkAllCombos(){
    const winningCombos = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    let winner = false;
    let counter = 0;
    let symbol;

    if (this.state.currentPlayer === 'Player1')
      symbol = 'X';
    else symbol = 'O';

    while (!winner && counter < winningCombos.length){
      let array = winningCombos[counter];
      winner = this.checkForWinner(array[0], array[1], array[2], symbol);
      counter++;
    }
    return winner;
  }

  checkForWinner(index1, index2, index3, symbol){
    console.log("Checking indices: "+index1+", "+index2+", "+index3+" for symbol "+symbol);
    if (this.state.board[index1] === symbol &&
        this.state.board[index2] === symbol &&
        this.state.board[index3] === symbol){
          console.log("FOUND A WINNER!");
          return true;
        }
      else return false;
  }

  //to do: add a fucntion to check whether we have a winner
  updateBoard(index, playerSymbol){
    console.log("About to set index "+index+ " to be "+ playerSymbol);

    let newArray = this.state.board
    newArray[index] = playerSymbol

    let nextPlayer =  this.getNameOfNextPlayer();

    this.setState( {
      board: newArray
    });

    let winCheck = this.checkAllCombos();

    if (winCheck){
      console.log("currentPlayer: ", this.state.currentPlayer);
      this.setState({
        winner: true
      })
    } else {
      this.setState({
        currentPlayer: nextPlayer
      })
    }
  }

  displayGameMessage(){
    if (this.state.winner){
      return this.state.currentPlayer+ " has WON!!";
    } else {
      return this.state.currentPlayer+ " to play!";
    }
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div id="GameContainer">
          <Board currentPlayer={this.state.currentPlayer} onSquareClick={this.updateBoard.bind(this)} squares={this.state.board}/>
        </div>
          <h1>{this.displayGameMessage()}</h1>
        </div>
    )
  }
}

export default GameContainer
