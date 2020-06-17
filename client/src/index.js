import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import UserForm from './components/form/UserForm'


const routing = (
  <Router>
    <div>
      <p className="test-text">This is test release with version: <b>a.1.1.0</b></p>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/welcome" component={UserForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


