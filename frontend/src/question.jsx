import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle : true,
      formValue: '',
    };
  };

  onChange = (e) => {
    this.setState({buttonToggle : false})
  };

  render() {
    var button;

    if (this.props.questionNumber < this.props.lastQuestion - 1) {
      button = <a className={this.state.buttonToggle ? 'btn btn-primary disabled' : 'btn btn-primary'} href={'#q' + (this.props.questionNumber + 1).toString()}>Next</a>
    } else {

      button = <input className="btn btn-primary" type="submit" value={'Submit Quiz'} disabled={this.state.buttonToggle}/>
    };

    return (
      <div className="question" id={'q' + this.props.questionNumber.toString()} key={this.props.questionNumber}>
        <div className="questionBox">
          <h1 className="questionTitle">{this.props.question.question}</h1>
            {this.props.question.answers.map((answer, index) =>
              <div className="radio" key={index}>
                <label>
                  <input type="radio" value={index} name={this.props.questionNumber} onChange={this.onChange}></input>
                  {answer}
                </label>
              </div>
            )}
            {button}
        </div>
      </div>
    );
  };
};
