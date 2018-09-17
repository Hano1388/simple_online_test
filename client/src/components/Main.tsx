import * as React from 'react';

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
    debugger;
    console.log('State for Questions: ', this.state)
    return(
      <h2> Hello World </h2>
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
