import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

if(loading){
    return <p className='text-center'>Loading...</p>
}

   if(!user){
    return <Navigate to="/" state={{from: location}} replace></Navigate>
   }
   return children;
};

export default PrivateRoute;