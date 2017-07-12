import React from 'react'

class BoardSquare extends React.Component {

  handleClick(event){
    const index = this.props.value;
    let symbol = 'X';
    if (this.props.currentPlayer === 'Player 2') {
      symbol = 'O';
    }
    if (!this.props.children){
      this.props.onSquareClick(index, symbol);
    }
  }

  render() {
    return (
      <div className="square-container" onClick={this.handleClick.bind(this)}>
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }

}

export default BoardSquare;
