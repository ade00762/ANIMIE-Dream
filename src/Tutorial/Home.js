import React from 'react'
import {Link} from 'react-router-dom'
const Home =()=> {

    
    return (
        <div className ="container">
             <h1 className= "text-center ">React Course Content</h1>
             <ul>
                    
                 <li><Link to ='/component'>Mapping and Components</Link> </li>
                 <li><Link to ='/Hooks'>IT's an Hook Component</Link> </li>
                 <li> <Link to ='/lifecircle'>Component Life Circle</Link></li>
                 <li> <Link to ='/calculator'>CALCULATOR</Link></li>


             </ul>
             <p><strong></strong></p>
        </div>

     )
    
}
export default Home