
import React, {useEffect, useState} from 'react'
import Message from './Message'


const Hooks=({history})=> {

    useEffect(() =>{
        document.body.classList.add('bg-dark')
    }, [])

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [password, setPassword]= useState('')
    const [confirmpassword, setConfirmpassword]= useState('')
    const [message,setMessage]=useState('')
    const [color, setColor]= useState('success')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name != '' && email !='' && password != '' && confirmpassword != ''){
            if(password === confirmpassword){
            setColor('success')
            setMessage('correct!')
            setTimeout(() =>{
                history.push('/')
            },2000)
            
            
            }else{
                setColor('danger')
                setMessage('passwords does not match')
            }
            
        }else{
            setColor('danger')
            setMessage('please fill all fields')
        }
            
        
    }
    return (
        <div className ="container">
             <h1>This is</h1>
             <form onSubmit= {handleSubmit}>
                 <div className="row">
                     <div className=" col-md-6">
                         <div className="box">
                             <input
                              type= "text" 
                              placeholder="Username" 
                              className="form-control mb-3" 
                              value={name} 
                              onChange={e => setName(e.target.value)}
                              />

                             <input
                              type= "text"
                               placeholder="Email Address" 
                               className="form-control mb-3"
                               value={email} 
                                onChange={e => setEmail(e.target.value)}
                                />
                             <input 
                             type= "text" 
                             placeholder="Contact Number" 
                             className="form-control mb-3"
                             value={number} 
                              onChange={e => setNumber(e.target.value)}/>
                             <input type= "text" placeholder="Password" className="form-control mb-3" value={password} 
                              onChange={e => setPassword(e.target.value)}/>
                             <input type= "text" placeholder="Confrim Password" className="form-control mb-3"  value={confirmpassword} 
                              onChange={e => setConfirmpassword(e.target.value)}/>
                             <input type= "Submit" placeholder="Submit" className="btn btn-dark" 
                              />

                            { message && <Message color= {color}>{message} </Message>}
                             
                             
                         </div>
                         

                     </div>
                 </div>
                 
             </form>
             
             
    
        </div>

     )
    }
    
export default Hooks