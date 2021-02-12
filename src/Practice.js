import react, { Component } from "react";
import reactDOM from "react-dom" ;
import './App.css';
 
ReactDom.render(<h1>These is a test practice</h1> ,document.getElementById('root'))

// function Component

export const Header = () =>{
  return (
    <div>
      <h1> My Header</h1>
    </div>
  )
}

// Classes Component

export default class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>My Header</h1>
      </div>
    )
  }
}

import react from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return(

  );
} 

reactDOM.render()





// Components render/return JSX (javascript Syntax Extension)
// Components can also take in "Props"
// e.g <Header title = "My title">



// NOTE : (Ctr + `) to open terminal in your VS code.

// import logo from './logo.svg';
// import './App.css';

  // function App() {
  //   return (
  //     <>
  //       <div className="App">
  //         LEARN REACT.JS TO WRITE EASILY ON WEB.
  //       </div>
  //       <div className="App">
  //       always study to know more
  //     </div>
  //   </>
// function App () {
//   const elem = "I am who i am"
//   const me = <h1 className="" type="">{elem}</h1>
//   const players=[
//     {name:"Weyn", club:"psg",
//     },{
//       name:"Ramous", club:"psg"
//     },
//   ]

//   return (
//     <>
//       {me}
//       <h2>list of players </h2>
//       <ul>
//         courses.map ((p, i)=> <li key={i}> {p.name}, {p.club}</li> )}
//       </ul>
//     </>   
//   )
// // }
// class App extends Component{
//   render(){
//     return(
//       <div className ="App">
//         <header className ="App-header">
//           <img src={logo} className="App-logo" alt ="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="-blank"
//           rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//      </div> 
//     );     
//   }
// }
// class App extends Component {
//     render () {
//       return(
//         <div className="App">
//           <h1>ITS MY REACT CLASS</h1>
//         </div>
//       );
//     }
//   }
//   export default App;
  
  
  