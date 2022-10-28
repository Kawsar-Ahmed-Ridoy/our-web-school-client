
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Pages/context/AuthProvider/AuthProvider';

const Login = () => {
    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <h1>login</h1>
            <button onClick={handleGoogleSignIn}>click</button>
        </div>
    );
};

export default Login;