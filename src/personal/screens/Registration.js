import react from 'react';


const Registration = () => {
    return(
        <>
           <div className="container-fluid height-100 text-white bg-grad-A text-center">
{/*                 
                <h2 className="" >Sign up</h2> */}
                <div className=" bg-primary height-50 text-center my-2 p-4">Sign up today for <strong className="text-white">ANIMIE</strong> DREAM
                    <h3 className="">Please get in touch and our expert support team will answer all your questions.</h3>
                    </div>
                    <div className="row">
                    </div >

                    <h3 className> LOG IN</h3>
                    
                    <div className="form-group">
                        <label htmlFor="usr">Name:</label>
                        <input type="text" className="from-control" id=""usr/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Phone Number:</label>
                        <input type="Password" className="from-control" id=""pwd/>
                    </div>
                    <form action="">
                    <input type="submit" value="Submit" />
                    </form>
                </div>

        </>
    )
}
export default Registration