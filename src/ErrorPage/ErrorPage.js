import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{height: "100vh"}} className="d-flex justify-content-center align-items-center  ">
 
       <div className='text-center'>
            <h1 style={{fontSize: "100px", fontWeight:"bold"}} >404</h1>
            <h4 className='fw-bold mb-4'>Sorry, we couldn't find this page!</h4>
            <Link to={'/'}><button className='btn btn-primary'>Back To Home Page</button></Link>
        </div> 
</div>
    //     </div> */}
      
    );
};

export default ErrorPage;