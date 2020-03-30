import React from 'react';
import logo from './logo.svg';
import './App.css';
//this.setState({questions:response})



import Questions from './questions'
import Question from './question'

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
      questions : questionList,
      questionCount: 0,
      currentScreen : 'Welcome',
      answers: [],
      answerObject: []
    }

  }

  componentDidMount() {
    fetch("/questions")
      .then((response) => {
        response.json().then(function(data) {
          console.log(data)
        })
      })
      .catch((error) => {
        console.log("Couldn't fetch data")
      })

  }

  onQuestionSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.questions)
    if (this.state.questionCount < this.state.questions.length - 1) {
      this.setState({questionCount : this.state.questionCount += 1})
      console.log(e.target.value)
    } else {
      this.setState({currentScreen : "Results"})
    }
  }

  beginQuiz = (e) => {
    console.log('beginning quiz')
    this.setState({currentScreen : 'Questions'})
  }

  render() {
    if (this.state.currentScreen == 'Welcome') {
      return (
        <div className="content">
          <div className="intro">
            <h1>Welcome Udemy!</h1>
            <h2>Here's a quiz about me, Nathan Lee</h2>
            <button type="button" class="btn btn-primary" onClick={this.beginQuiz}>Begin Quiz</button>

          </div>
        </div>

      );
    } else if (this.state.currentScreen == 'Questions') {
      return (
        <Questions questionList={questionList} questionNumber={this.state.questionCount} onSubmit={this.onQuestionSubmit} />
      )
    } else if (this.state.currentScreen == 'Results') {
      return (
        <h1>Results</h1>
      )
    }

  }

}

export default App;
