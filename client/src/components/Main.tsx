import * as React from 'react';

export class Main extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  componentDidMount() {
    console.log('HELLO');
    const URL     = 'http://localhost:3000/questions',
          apiCall = fetch(URL);

    apiCall.then(response => {
      return response.json();
    }).then(result => {
      console.log(result);
      this.setState({
        isLoaded: true
      })
    })
  }

  render() {
    console.log(this.state.isLoaded);
    return(
      <h2> Hello World </h2>
    )
  }
}

interface IState {
  isLoaded: Boolean
}
