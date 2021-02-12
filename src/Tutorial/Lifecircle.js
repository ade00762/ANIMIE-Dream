import React  from 'react'
import Message from './Message'


class Lifecycle extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           value:0 
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //Run before components gets mounted to the DOM
    componentWillMount(){
        document.body.classList.remove("bg-dark")
    }
    //Run after components gets mounted to the DOM
    componentWillMount(){
        document.body.classList.add("bg-dark")
    }
    //Run after components gets mounted to the DOM
    shouldComponentUpdate(){
        return true
    }
    //Run after components gets mounted to the DOM
    componentWillMount(){
        document.body.classList.remove("bg-dark")
    }
    //Runs after components gets mounted to the DOM
    componentDidMount(){
        document.body.classList.add("bg-dark")
    }





handleClick(){
    this.setState({
        value:(this.state.value + 1)
    })
 }
    render(){

    return (
       <>
        <div className ="container">
             <h1>Your value is {this.state.value}</h1>
             <button className="btn btn-info" onClick={this.handleClick}>Increment</button>
            
        </div>
        <Message/>
        
       </>

     )
    }
}
export default Lifecycle



