import React from 'react'

class BoardSquare extends React.Component {

  handleClick(event){
    console.log("booyah: ", this.props.value);
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
