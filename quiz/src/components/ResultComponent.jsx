import React, { Component } from 'react'

export class ResultComponent extends Component {
  render() {
    return (
      <div>
        <h2>Result</h2>

        <div>
            <p>You need more practice!</p>
            <h1>Your score is 20%</h1>

            <p><span>Total number of questions</span> <span>15</span></p>
            <p><span>Number of attempted questions</span> <span>9</span></p>
            <p><span>Number of correct answers</span> <span>3</span></p>
            <p><span>Number of wrong answers</span> <span>6</span></p>
        </div>

        <div>
            <button>Play Again</button>
            <button>Back to home</button>
        </div>
      </div>
    )
  }
}

export default ResultComponent