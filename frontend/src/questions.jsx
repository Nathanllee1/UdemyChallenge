import React from 'react';

export default function Questions(props) {
  var QA = props.questionList[props.questionNumber]
  var radio = []

  for (var i=0; i < QA.answers.length; i++) {

    radio.push(
      <div className="radio" key={i}>
        <input type="radio" name="contact"></input>
        <label>{QA.answers[i]}</label>
      </div>
    )
  }

  console.log(radio)
  return (
    <div className="question">
      <div class="questionTitle">{QA.question}</div>
      <form>
        {radio}
      </form>
    </div>


  )
}
