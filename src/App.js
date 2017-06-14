import React, { Component } from 'react';
import QuizSheet from './QuizSheet';
import TopBar from './TopBar'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numQuestions : 30,
      questionType : "Mixed",
      maxNumber : 100,
      genQuiz : 0,
    };
  }

  updateNumQuestions(event) {
    var n = Number.parseInt(event.target.value, 10);
    this.state.numQuestions = n;
  }

  updateQuestionType(event) {
    this.state.questionType = event.target.value;
  }

  updateMaxNumber(event) {
    var max = Number.parseInt(event.target.value, 10);
    this.state.maxNumber = max;
  }

  generateQuiz() {
    this.setState({genQuiz : this.state.genQuiz+1});
  }

  render() {
    if (this.state.genQuiz >= 1) {
      return (
        <div>
          <TopBar onChangeNumQuestions={(event) => this.updateNumQuestions(event)}
                  onChangeQuestionType={(event) => this.updateQuestionType(event)}
                  onChangeMaxNumber={(event) => this.updateMaxNumber(event)}
                  onClickGo={() => this.generateQuiz()} />
          <QuizSheet numEqns={this.state.numQuestions}
                    maxSum={this.state.maxNumber}
                    qType={this.state.questionType} />
        </div>
      );
    } else {
      return (
        <div>
          <TopBar onChangeNumQuestions={(event) => this.updateNumQuestions(event)}
                  onChangeQuestionType={(event) => this.updateQuestionType(event)}
                  onChangeMaxNumber={(event) => this.updateMaxNumber(event)}
                  onClickGo={() => this.generateQuiz()} />
        </div>
      );
    }
  }
}

export default App;
