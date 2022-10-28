import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div style={{height: "85vh"}} className="d-flex justify-content-center align-items-center  ">
 
       <div className='text-center'>
            <h1 className='text-primary' style={{fontSize: "70px", fontWeight:"bold"}} >Welcome To, Our Web School</h1>
            <Link to='/login'>
            <button className='btn btn-outline-primary mt-3 py-3 px-5 fw-bold'>Get Started</button>
            </Link>
        </div> 
</div>
    );
};

export default Home;