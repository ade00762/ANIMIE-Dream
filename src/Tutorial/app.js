import React from'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Lifecircle from './Lifecircle'
import Home from './Home'
import Component from '../component'
import Hooks from './Hooks';
import calculator from './calculator';

const App = ()=> {
    return (
      <Router>
            <Switch>
                <Route path= "/lifecircle" component={Lifecircle}/>
                <Route path= "/component" component={Component}/>
                <Route path= "/Hooks" component={Hooks}/>
                <Route path= "/calculator" component={calculator}/>
                <Route path= "/" exact component={Home}/>
            </Switch>
      </Router>
    )
  }
  export default App