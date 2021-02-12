import React from'react';
import{BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Component from './component'
import EventClass from './Eventclass'


const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route path="/course/:name" component={Component}/>
        <Route path="/event" component={EventClass}/>
        <Route path="/" exact component={Component}/>
      </Switch>
    </Router>
  )
}
export default App