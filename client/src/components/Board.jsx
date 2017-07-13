import React from 'react'
import BoardSquare from './BoardSquare.jsx'

//Board is created with props: 'squares', 'onSquareClick'
class Board extends React.Component {

  render() {

    const boardSquares = this.props.squares.map((square, index) => {
      return (
        <BoardSquare
          currentPlayer={this.props.currentPlayer}
          onSquareClick={this.props.onSquareClick}
          value={index}
          winner={this.props.winner}
          key={index}>{square}</BoardSquare>
      );
    })

    return (
      <div className="board">
        <div className="row">
          {boardSquares[0]} {boardSquares[1]} {boardSquares[2]}
        </div>
        <div className="row">
          {boardSquares[3]} {boardSquares[4]} {boardSquares[5]}
        </div>
        <div className="row">
          {boardSquares[6]} {boardSquares[7]} {boardSquares[8]}
        </div>
      </div>
    )
  }

}

export default Board
