import React, { Component } from 'react';
import { Navigator, SignIn, SignUp, HomePage } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
