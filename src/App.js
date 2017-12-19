import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { numbers: [] }
  }

  addNumber = () => {
    var num = Math.random();
    this.setState(st => { return { numbers: st.numbers.concat(num) } })
  }

  componentDidMount() {
    setInterval(
      this.addNumber,
      2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.numbers.map(x => (<li> {x} </li>))}
      </div>
    );
  }
}

export default App;
