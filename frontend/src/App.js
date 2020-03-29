import React from 'react';
import logo from './logo.svg';
import './App.css';
//this.setState({questions:response})

import Questions from './questions'

var questionList = [
    {
        'question' : "Where does Nathan go to school?",
        'answers' : ['Cal Poly', 'UC San Diego', 'UC Davis']
    },
    {
        'question' : "What other language does Nathan know other than English?",
        'answers' : ['Spanish', 'Pig Latin', 'Mandarin']
    },
    {
        'question' : "Does Nathan prefer React or Angular?",
        'answers' : ['React', 'Angular']
    },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions : [],
      questionCount: 0,
      currentScreen : ''
    }
  }

  componentDidMount() {
    fetch("/questions")
      .then((response) => {
        response.json().then(function(data) {
          console.log(data)
        })
      })
      /*
      .catch((error) => {
        alert("Couldn't fetch data")
      })
      */
  }

  onSubmit = (e) = {

  }

  render() {
    if (this.state.currentScreen == 'Welcome') {
      return (
        <div className="content">
          <div className="intro">
            <h1>Welcome Udemy!</h1>
            <h2>Here's a quiz about me, Nathan Lee</h2>
            <button>Begin Quiz</button>

          </div>
        </div>

      );
    } else if (this.state.currentScreen == 'Questions') {
      <Questions questionList={questionList} questionNumber={this.state.questionCount} />
    }

  }

}

export default App;
