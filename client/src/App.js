import React, { Component } from 'react';
import Questions from './components/questions'

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <Questions />
      </div>
    );
  }
}

export default App;
