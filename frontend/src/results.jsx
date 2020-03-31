import React from 'react';

export default function Results(props) {
  console.log(props.questions[1].answers[2])

  var answerObject =  props.answerObject.map((answerNum, index) => (
    <div className='questionBox'>
      <h3>Question {index}: </h3>
      <h4><i>{props.questions[index].question}</i></h4>

      if (props.questions[index].answers[answerNum[1]] != props.questions[index].answers[answerNum[0]]) {
        <div className="correctAnswer">
          <h4>{props.questions[index].answers[answerNum[1]]}  <i class="fas fa-times"></i></h4>
          <h4>Correct Answer: props.questions[index].answers[answerNum[0]])</h4>
        </div>
      }

      <h4>{props.questions[index].answers[answerNum[1]]}
      <i class="fas fa-check"></i>

      </h4>
      <br />

    </div>

  ))


  return (
    <div className="results">
      <div className="resultsBox">
        <h1>You got 3 out of 3 questions right</h1><br/>
        {answerObject}
      <a type="button" class="btn btn-primary" href="#q0">Take Quiz Again</a>
      </div>
    </div>

  )
}
