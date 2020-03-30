import React from 'react';
import Slide from 'react-reveal/Fade'


export default class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer : '',
      buttonToggle : true
    };
  };


  onChange = (e) => {
    this.setState({buttonToggle : false})
  }

  render() {
    var QA = this.props.questionList[this.props.questionNumber];
    var radio = [];

    for (var i=0; i < QA.answers.length; i++) {

      radio.push(
        <div className="radio" key={i}>

          <label><input type="radio" name="contact" value={i}></input> {QA.answers[i]}</label>
        </div>
      )
    }

    var buttonText;
    console.log(this.props.questionNumber)
    if (this.props.questionNumber < this.props.questionList.length - 1) {
      buttonText = "Next";
    } else {
      buttonText = "Submit Quiz";
    };

    return (

      <div className="question">
        <div className="questionTitle">{QA.question}</div>
        <form onSubmit={this.props.onSubmit} onChange = {this.onChange}>
          {radio}
          <input class="btn btn-primary" type="submit" value={buttonText} disabled={this.state.buttonToggle}/>
        </form>
      </div>
    )
  }

}



/*
export default class Questions extends React.Component {

  render() {

    return (
      <div>
        {this.props.questionList.map((item, key) => (
          <h1>{item.answer}</h1>
        ))}
      </div>
    )
  }
}



<Fade top>
  <div className="questionBlock">
    <h1>item.question</h1>
    item.answers.map((answer) => {
      <div className="radio">
        <label><input type="radio" name="contact" ></input></label>
      </div>
    }
  </div>
</Fade>
*/
