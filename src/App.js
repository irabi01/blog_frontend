import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Notification from './pages/Notification'
import Login from './pages/Login';
import Register from './pages/register';

class App extends Component {
  render() {
    return (
      <Router>
      <div>  
          <Navigation/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/notification' component={Notification}/>
            <Route path='/auth/login' component={Login}/>
            <Route path='/auth/register' component={Register}/>
          </Switch>
      </div>
       </Router>
    );
  }
}

export default App;
