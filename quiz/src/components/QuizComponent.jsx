import React, { Component } from 'react'

export class QuizComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Dog", "Cat", "Elephant", "Lion"]
        }
    }

  render() {
    const { options } = this.state;

    return (
      <div>
        <h2>Question</h2>
        <p>1 of 15</p>
        <p>Which is the only mammal that can jump?</p>

        <div>
            {options.map(option => (
                <button>{option}</button>
            ))}
        </div>

        <div>
            <button>Previous</button>
            <button>Next</button>
            <button>Quit</button>
        </div>
      </div>
    )
  }
}

export default QuizComponent