import React from 'react'

class BoardSquare extends React.Component {

  handleClick(event){
    const index = this.props.value;
    let symbol = 'X';
    if (this.props.currentPlayer === 'Player2') {
      symbol = 'O';
    }
    if (!this.props.children){
      this.props.onSquareClick(index, symbol);
    }
  }

  render() {
    return (
      <div className="square-container" onClick={this.handleClick.bind(this)}>
        <h1>
          {this.props.children}
        </h1>
      </div>
    )
  }

}

export default BoardSquare;
