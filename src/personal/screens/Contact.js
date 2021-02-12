import react from 'react';


const Contact = () => {
    return(
        <div className='bg-primary height-100 text-white'>
            <div className="row justify-content-center">
               <div className="col-md-6 p-4">
                    <div className="form-group">
                        <label htmlFor="usr">Name:</label>
                        <input type="text" className="from-control" id=""usr/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Phone Number:</label>
                        <input type="Password" className="from-control" id=""pwd/>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <textarea name="form-control" id="comment" cols="30" rows="10"></textarea>
                        </div>

                    </form>

               </div>
            </div>
         </div>
    )
}
export default Contact