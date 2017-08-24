import React, { Component } from 'react';
import logo from './images/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import View1 from './View1/View1.jsx';
import View2 from './View2/View2.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {foo: 'bar'};
    this.handleFooChange = this.handleFooChange.bind(this);
  }

  handleFooChange(newVal) {
    this.setState({foo: newVal});
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <View1 foo={this.state.foo} onFooChange={this.handleFooChange} {...props}/>}/>
            <Route path="/view2/:id" render={(props) => <View2 foo={this.state.foo} onFooChange={this.handleFooChange} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
