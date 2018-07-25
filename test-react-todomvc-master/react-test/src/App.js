import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Main from './container/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <h1>Todo-App (React)</h1>
            <Switch>
                <Route exact path="/" component={Main}/>
                
            </Switch>
          </div>          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
