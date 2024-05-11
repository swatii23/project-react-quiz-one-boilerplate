import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      question: false,
      result: false
    }
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  handlePlayClick() {
    this.setState(prev => ({
      home: false,
      question: false,
      result: true
    }))
  }

  render() {
    const { home, question, result } = this.state;

    return (
      <div>
        {home && <HomeComponent handleClick={this.handlePlayClick} />}
        {question && <QuizComponent />}
        {result && <ResultComponent />}
      </div>
    )
  }
}

export default App
