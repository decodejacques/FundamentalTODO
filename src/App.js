import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {
  constructor() {
    super();
    this.state = { displayFirst: true };

  }

  toggle = () => {
    this.setState(st => { return { displayFirst: !st.displayFirst } })
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.toggle}> toggle </button>
      <TodoList hidden={this.state.displayFirst}/>
      <TodoList hidden={!this.state.displayFirst}/>
      </div>
    );
  }
}

export default App;
