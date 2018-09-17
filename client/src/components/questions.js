import * as React from 'react';
import Answers from './answers';
import Loader from './loader';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions:[],
      answers: [],
      loading: true,
      errMessage: ''
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
        answers: result.answers,
        loading: false
      })
    })
    .catch(err => console.log(err));
  }
  render() {
    let { questions, answers } = this.state;
    // debugger;
    return(
      <div>
        <Loader show={this.state.loading} />
        <ul className="list-group">
					<li className="list-group-item row">
						<div className="col-xs-12">Simple General Test </div>
					</li>

          {(questions.length > 0 && answers.length > 0) ?
					 questions.map((question,i) => (
						<li className="list-group-item row" key={i}>
              <div className="col-xs-6">{question.question} </div>
              <Answers
                question_id={question.id}
                answers={this.state.answers} />
						</li>
					 )): ''}
				</ul>
      </div>
    )
  }
}
