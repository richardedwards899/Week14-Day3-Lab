import React from 'react'
import Board from './Board'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      winner: "No winner yet",
      currentPlayer: "Player 1"
    }
  }

  //to do: add a fucntion to check whether we have a winner

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div id="GameContainer">
          <Board squares={this.state.board}/>
        </div>
        <h1>Player turn</h1>
      </div>
    )
  }

}

export default GameContainer
