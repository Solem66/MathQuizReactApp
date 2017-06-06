import React, { Component } from 'react';
import QuizSheet from './QuizSheet';
import './App.css';

class App extends Component {
  render() {
    return (
        <QuizSheet numEqns={15} maxSum={100} />
    );
  }
}

export default App;
