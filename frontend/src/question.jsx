import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="question">
        <div className="questionTitle">{this.props.question}</div>
        <form onSubmit={this.props.onSubmit} onChange = {this.onChange}>
          {this.props.answers.map((answer, index) -> {
            <label><input type="radio" name="contact" value={index}></input> {answer}</label>
          })}
          <input class="btn btn-primary" type="submit" value={buttonText} disabled={this.state.buttonToggle}/>
        </form>
      </div>
    )
  }
}
