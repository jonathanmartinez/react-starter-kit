import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View1 extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFooChange(e.target.value);
  }

  render() {
    const foo = this.props.foo;
    return (
      <div>
        <p>Hello from View1</p>
        <p>Foo: {this.props.foo}</p>
        <input value={foo} onChange={this.handleChange} />
        <Link to="/View2/123">Go to View2</Link>
      </div>
    );
  }
}
