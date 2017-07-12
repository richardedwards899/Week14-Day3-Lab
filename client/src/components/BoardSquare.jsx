import React from 'react'

class BoardSquare extends React.Component {

  render() {
    return (
      <div className="square-container">
        <h1>
          {this.props.children}
        </h1>
      </div>
    )
  }

}

export default BoardSquare;
