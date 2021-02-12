import React, { useState } from 'react'
import Message from './Message';




const Calculator= () => {
    const[value,setValue] = useState(0)

    const handleCalc =(e) =>{
        setValue(e.target.id)
    }

    const handlePlus = (e) =>{
        
    }
    const handleSub = (e) =>{

    }
    const handleEq = (e) =>{

    }
    return (
      <>
          <h2 className=" text-center mt-5">
              <div className="container">
                  <div className="card">
                      <div className="card-body">
                            <div className="box">
                                {value}
                            </div>
                            <div className=" first">
                                <button className="btn btn-info mx-5" id='10' onClick={handleCalc}>10 </button> 
                                <button className="btn btn-info mx-5" id='+' onClick={handlePlus}> + </button>   
                            </div>
                            <div className=" ">
                                <button className="btn btn-info mx-5" id='30' onClick={handleCalc}>30 </button> 
                                <button className="btn btn-info mx-5" id='-' onClick={handlePlus}> - </button>   
                            </div>
                            <div className=" ">
                                <button className="btn btn-info mx-5" id='=' onClick={handleEq}>30 </button> 
                            </div>
                            

                      </div>
                    
                            {/* <input type = "type" className = " form-control mb-3" placeholder="Answer Display here"/>
                                <div className="mr-4 justify-content-around  ">
                                    <button className="btn btn-info mx-5">10 </button>
                                        <button className="btn btn-info my-4 "> Plus + </button>
                    
                                </div>
                                <div className="mr-4 justify-content-around  ">
                                    <button className="btn btn-info mx-5">30 </button>
                                        <button className="btn btn-info my-4 "> Minus - </button>
                    
                                </div>
                                <div className="mr-4 justify-content-around  ">
                                    <button className="btn btn-info "> </button>
                                    
                    
                                </div>
                        </div> */}
                    </div>
          
                </div>
          </h2> 
      </>
    )
  }
export default Calculator;