import React from 'react';

export default function Results(props) {
  var correctCount = 0;

  for (var i=0; i < props.answerObject.length; i++) {
    if (props.answerObject[i][0] === parseInt(props.answerObject[i][1])) {
      correctCount += 1;
    };
  };

  return (
    <div className="results">
      <div className="resultsBox">
        <h1>You got {correctCount} out of {props.questions.length} questions right</h1><br/>

          {props.answerObject.map((answerNum, index) => (
            <div className='answerBox' key={index}>
              <h3><b>Question {index}</b>: {props.questions[index].question}</h3>
              {(props.questions[index].answers[answerNum[1]] !== props.questions[index].answers[answerNum[0]]) ?
                <div className="incorrectAnswer">
                  <h4>{props.questions[index].answers[answerNum[1]]}  <i className="fas fa-times"></i></h4>
                  <h4>Correct Answer: {props.questions[index].answers[answerNum[0]]}</h4>
                </div>
                :
                <div className="correctAnswer">
                  <h4>{props.questions[index].answers[answerNum[0]]}  <i className="fas fa-check"></i></h4>
                </div>
              }
              <br />
            </div>
          ))}
        <a type="button" className="btn btn-primary" href="/">Take Quiz Again</a>
      </div>
    </div>
  );
};
