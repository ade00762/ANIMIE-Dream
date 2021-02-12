import React from 'react'

export default class EventsClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:"white",
            toggled:true
        }
        this.handleCLick= this.handleCLick.bind(this)
    }

    handleCLick() {
        this.setState({
            toggled:!this.state.toggled
        })    
    }
    
    render() {
        return (
            <div className ="container mt-3 mb-5">
                <h1 className= "text-center">Class component state</h1>
                <div clsassName="text-center mt-3 mb-3">
                    <button className="btn btn-info" onClick={this.handleCLick}>
                        change Background
                    </button>

                </div>
                <div className={"box text-center ${this.state.toggled ?'' : 'bg-dark}"}>
                    <p>Background color is {this.state.toggled ? "white" : "Black"}</p>
                </div>
            </div>

        )
    }
}
