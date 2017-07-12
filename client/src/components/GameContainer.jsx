import React from 'react'
// import CommentList from './CommentList'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      winner: "No winner yet",
      currentPlayer: "Player 1"
    }
  }

  render() {
    return (
      <div id="GameContainer">
        <Board />
      </div>
    )
  }

}

export default GameContainer
