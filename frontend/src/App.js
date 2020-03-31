import React from 'react';
import logo from './logo.svg';
import './App.css';
//this.setState({questions:response})

import Slide from 'react-reveal/Slide';


import Question from './question';
import Results from './results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions : [],
      questionCount: 0,
      currentScreen : 'Questions',
      answers: [],
      answerObject: []
    }

  }

  componentDidMount() {
    fetch("/questions")
      .then((response) => {
        return response.json()
      })
      .then(data => this.setState({questions : data}))
      .catch((error) => {
        console.log("Couldn't fetch data")
      })

  }

  onQuestionSubmit = () => {
    this.setState({currentScreen : 'Results'})
    fetch('/answers', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.answers),
    })
    .then((response) => {
      return response.json()
    })

    .then((data) => {
      this.setState({answerObject : data})
      console.log('Success:', this.state.answerObject);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  onQuestionChange = (e) => {


    var currentQuestions = this.state.answers

    currentQuestions[[e.target.name]] = e.target.value

    this.setState({ answers : currentQuestions });
    console.log({ [e.target.name]: e.target.value })
  }

  beginQuiz = (e) => {
    console.log('beginning quiz')

  }

  render() {
    if (this.state.currentScreen == 'Questions') {
      return (
        <div className="content">
          <div className="intro">
            <div class="introBox">
              <h1>Welcome Udemy!</h1>
              <h2>Here's a quiz about me, <b>Nathan Lee</b> </h2>
              <p>(Hint: my resume might help)</p><br/>
              <h3>My response to the <a href="https://github.com/udemy/coding-challenge">Udemy Web App Coding Challenge</a></h3>
              <h4>The <a href="https://github.com/Nathanllee1/UdemyChallenge">code and writeup</a></h4> <br/>
              <a type="button" class="btn btn-primary" href="#q0">Begin Quiz</a>
            </div>
          </div>
          <form onSubmit={this.onQuestionSubmit} onChange={this.onQuestionChange}>
            {this.state.questions.map((question, index) => (
              <Question question={question} questionNumber={index} onSubmit={this.onQuestionSubmit} lastQuestion={this.state.questions.length}/>

            ))}
          </form>
        </div>


      );
    } else if (this.state.currentScreen == 'Results') {
      return (

        <Results answerObject={this.state.answerObject} questions={this.state.questions}/>
      )
    }

  }

}

export default App;
