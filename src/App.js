import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { number: 0 }
  }
  componentDidMount() {
    setInterval(
      () => this.setState({ number: Math.random() }),
      1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.number}
      </div>
    );
  }
}

export default App;
