import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View2 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <p>Hello from View2</p>
        <p>Foo: {this.props.foo}</p>
        <p>Param ID: {this.props.match.params.id}</p>
        <Link to="/">Go to View1</Link>
      </div>
    );
  }
}
