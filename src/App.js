import React, {Component} from 'react';
import './App.css';
import Header from './components/header-component'
import Introduction from './components/introduction-component';
import Button from './components/button-component';
import QuestionPage from './components/questionPage-component';
import Result from './components/result-component';

import QUESTIONS from './data/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizOn: false,
      questions: QUESTIONS,
      questionNr: 0,
      points: 0
    };
  };

  onPressed = () => {
    this.setState({ quizOn: !this.state.quizOn});
  }

  reset = () => {
    this.setState({
      quizOn: false,
      questionNr: 0,
      points: 0,
    })
  }

  saveAnswer = (p) => {
    this.setState({ points: this.state.points+p});
    this.nextQuestion();
    console.log("points", this.state.points, this.state.questionNr)
  }

  nextQuestion = () => {
    this.setState({ questionNr: this.state.questionNr+1 });
  }

  render() {
    const quizOn = this.state.quizOn;
    const qNr = this.state.questionNr;
    if (qNr >= this.state.questions.length) {
      return(
        <Result points={this.state.points} onPressed={this.reset}/>
      )
    }
    
    if (quizOn) {
      const  {nr, question, srcImg, answers} = this.state.questions[qNr];
      return (
        
        <div>
          <Header text="Jakim jesteś grzybem?"/>

          <QuestionPage 
            question={question}
            srcImg={srcImg}
            answers={answers}
            saveAnswer={this.saveAnswer}
          />
        </div>        
      ) 
    } else {
      return (
        <div>
          <Header text="QUIZ Jakim jesteś grzybem?"/>
          <Introduction />
          <Button buttonText='Rozpocznij quiz' onPressed={this.onPressed}/>
        </div>
      )
    }
  }
}

export default App;