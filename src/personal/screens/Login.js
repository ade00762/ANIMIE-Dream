import react from 'react';


const Login = () => {
    return(
        <div className="container-fluid bg-grad-A p-5 height-100  text-center text-white ">
            <p className='display-4'>WELCOME TO ANIME DREAM !!!</p>
            <div className="row justify-content-center p-4">
                <form className='col-md-6'>
                    <label className='p-3'>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            

        </div>
    )
}
export default Login