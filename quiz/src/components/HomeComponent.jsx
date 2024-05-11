import React, { Component } from 'react'

export class HomeComponent extends Component {
    
    render() {
      const {handleClick} = this.props;
      
    return (
      <div>
        <h2>Quiz App</h2>
        <button onClick={handleClick}>Play</button>
      </div>
    )
  }
}

export default HomeComponent