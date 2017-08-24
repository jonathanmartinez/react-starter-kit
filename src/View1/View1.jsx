import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View1 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        <p>Hello from View1</p>
        <p>{this.props.tasks[0].name}</p>
        <input value={tasks[0].name} onChange={this.handleChange} />
        <Link to="/View2/123">Go to View2</Link>
      </div>
    );
  }
}
