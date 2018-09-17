import * as React from 'react';
import DisplayAnswers from './DisplayAnswers';

export class Main extends React.Component<{}, IState> {
  constructor(props, {}) {
    super(props);
    this.state = {
      questions:[],
      answers: []
    }
  }
  componentDidMount() {
    const questionsURL = 'http://localhost:3000/questions',
          answersURL   = 'http://localhost:3000/answers',
          GetQuestions = fetch(questionsURL),
          GetAnswers   = fetch(answersURL);

    GetQuestions.then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        questions: result.questions
      })
    })
    .catch(err => console.log(err));

    GetAnswers.then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        answers: result.answers
      })
    })
    .catch(err => console.log(err));
  }
  render() {
    if(this.state.questions === [] && this.state.answers ===[]) {
      return <div> Loading... </div>
    }
    let { questions } = this.state;
    // debugger;
    return(
      <div>
        <ul className="list-group">
				{(questions.length > 0) ?
					<li className="list-group-item row">
						<div className="col-xs-12">Simple General Test </div>
					</li>: ''}

					{ questions.map((question,i) => (
						<li className="list-group-item row" key={i}>
              <DisplayAnswers
                question_id={question.id}
                answers={this.state.answers} />
						</li>
					 ))}
				</ul>
      </div>
    )
  }
}

export interface questionsObject {
    id: number;
    question: string;
    created_at: any;
    updated_at: any;
}

export interface answersObject {
    id: number;
    answer: string;
    created_at: any;
    updated_at: any;
    question_id: number;
}
//
interface IState {
  questions: Array<questionsObject>
  answers: Array<answersObject>
}
