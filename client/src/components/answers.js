import React from 'react';

export default class Answers extends React.Component {
  render() {
    let allAnswers      = this.props.answers,
        currentQuestion = this.props.question_id,
        questionAnswers = allAnswers.filter(obj => {
      return obj.question_id === currentQuestion;
    });
    // debugger;
    return (
      <div>
        {questionAnswers.map((obj,i) => (
          <li className="list-group-item row" key={i}>
            <div className="col-xs-6">{obj.answer} </div>
          </li>
        ))}
      </div>
    )
  }
}
