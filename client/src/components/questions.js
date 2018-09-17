import * as React from 'react';
import Answers from './answers';
import Loader from './loader';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions:[],
      answers: [],
      cAnswers: [],
      loading: true,
      errMessage: '',
      score: null
    }
    this.calculateResult = this.calculateResult.bind(this)
  }
  // API requests
  componentDidMount() {
    const questionsURL         = 'http://localhost:3000/questions',
          answersURL           = 'http://localhost:3000/answers',
          correctAnswersURL    = 'http://localhost:3000/answers/correct',
          GetQuestions         = fetch(questionsURL),
          GetAnswers           = fetch(answersURL),
          GetAllCorrectAnswers = fetch(correctAnswersURL);

    GetQuestions.then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        questions: result.questions
      })
    })
    .catch(err => {
      this.setState({
        errMessage: "failed to load data from server",
        loading: false
      });
    });

    GetAnswers.then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        answers: result.answers,
        loading: false
      })
    })
    .catch(err => {
      this.setState({
        errMessage: "failed to load data from server",
        loading: false
      });
    });

    GetAllCorrectAnswers.then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        cAnswers: result,
      })
    })
    .catch(err => {
      this.setState({
        errMessage: "failed to load data from server",
        loading: false
      });
    });
  }
  // Calculating result 
  calculateResult() {
    let inputs = document.getElementsByTagName('input');
    let { cAnswers } = this.state;
    cAnswers = cAnswers.map(element => element.id);
    // counter to count the number of correct answers
    let counter = 0;
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked && cAnswers.includes(Number(inputs[i].value))) {
    			counter += 1;
        }
    }
    this.setState({
      score: counter
    });
  }
  render() {
    let { questions, answers } = this.state;
    // debugger;
    return(
      <div>
        <Loader show={this.state.loading} />
        <ul className="list-group">
					<li className="list-group-item row">
						<div className="col-xs-12">General knowledge Test </div>
					</li>

          {(questions.length > 0 && answers.length > 0) ?
					 questions.map((question,i) => (
						<li className="list-group-item row" key={i}>
              <div className="col-xs-6"><strong>{i + 1}. {question.question} </strong></div>
              <Answers
                question_id={question.id}
                answers={this.state.answers} />
						</li>
					 )): ''}
				</ul>
        <div className="row submit-and-result">
          <div className="col-xs-2">
            <button className="btn btn-default" type="button" onClick={this.calculateResult}>Submit</button>
          </div>
          <div className="col-xs-3 score">
            {(this.state.score != null) ?
              <div> You scored {this.state.score}</div> : " "
            }
          </div>
        </div>
      </div>
    )
  }
}
