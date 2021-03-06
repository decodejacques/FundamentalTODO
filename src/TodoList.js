import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = { numbers: [] }
  }

  add = () => {
    this.setState(st => { return { numbers: st.numbers.concat(this.inp.value) } }, () => this.inp.value = "")
  }

  deleteEverything = () => {
    this.setState({ numbers: [] })
  }

  render() {
    if(this.props.hidden) return null;
    return (
      <div className="App">
        <input ref={r => this.inp = r}></input>
        <button onClick={this.add}>add it </button>
        <button onClick={this.deleteEverything}>delete them </button>
        {this.state.numbers.map(x => (<li> {x} </li>))}
      </div>
    );
  }
}

export default TodoList;
