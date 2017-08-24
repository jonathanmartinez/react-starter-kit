import React, { Component } from 'react';
import logo from './images/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import View1 from './View1/View1.jsx';
import View2 from './View2/View2.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [{id:1, name:'Task1'}]};
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(name) {
    this.setState({tasks: [{id:1, name}]});
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <View1 tasks={this.state.tasks} onNameChange={this.handleNameChange} {...props}/>}/>
            <Route path="/view2/:id" render={(props) => <View2 tasks={this.state.tasks} onNameChange={this.handleNameChange} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
