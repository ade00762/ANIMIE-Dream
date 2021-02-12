import react from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Review from './screens/Review';
import Registration from './screens/Registration';
import About from './screens/About';
// import Loadable from 'react-loadable';
import Header from './component/Header';


// const LandingPage = Loadable({
//   loader:() => import('./'),
//   loading: <p> Lo  ading...</p>
// })
const Message = () => {
    return (
      <>
        <Router>
          <Header />
            <Switch>
                <Route path= "/about" component={About}/>
                <Route path= "/contact" component={Contact}/>
                <Route path= "/login" component={Login}/>
                <Route path= "/review" component={Review}/>
                <Route path= "/register" component={Registration}/>
                <Route path= "/" component= {Home}/>  
            </Switch>
        </Router>
          
      </>
    )
  }
export default Message