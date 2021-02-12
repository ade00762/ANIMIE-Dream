import React from 'react';
import Giff from './Giff';
import Chart from './Chart'

const Home =()=> {

    
    return (
        <div className ="container-md nav-position bg">
            <div className=" my-3">
                <input type="search" className="col-sm-6 my-2 search-bar " id="" Search/>
                <p className="hr-search"></p>
            </div>
            <div className="row my-4">
                <div className="  col-md-4 chat-bg-left left-scroll">
                    <p clasName=""></p>
                    <div className="left-bar ">
                        
                    </div>
                    <div >
                        {Chart.map((b,i) =>
                        <h2 className='col-md-9 bg-primary bg-gr left-col'>
                            {/* <img src={b.photo1}  className='w-50' alt=""/> */}
                            {b.message}
                        </h2>
                        
                    )}
                     
                    </div>
                    
                </div>
                <input type="search" className="search-bar-left-col " id="" Search/>
                
                
                
                {Giff.map((a,i)=>

                    <div    className="logo-right col-md-4 chat-bg-right">
                            <img src={a.movie} className='w-75' alt=""/>
                            <h6 className="">Keep your phone connected</h6>
                    </div>

                )}
                
                <div className="">

                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </div>
            
            
            <div className="div"></div>
        </div>

     )
    
}
export default Home;