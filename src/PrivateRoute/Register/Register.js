import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/context/AuthProvider/AuthProvider';



const Register = () => {
 
    const [error, setError] = useState()
    const {createUser, updateUserProfile, providerLogin } =useContext(AuthContext)
    
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        setError('')
        form.reset()
        handleUpdateUserProfile(name,photoURL)
        toast.success("Register Successfully")
    })
    .catch(error => {
        console.error(error)
        setError(error.message)
    })
    }

    const handleUpdateUserProfile = (name,  photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    return (
       <div>
         <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name= "photoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name= "password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label={<>Accept <Link >Terms and conditions</Link></>} />
      </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
      <Button className="mt-2" onClick={handleGoogleSignIn}>Login With Google</Button>
       </div>
      
    );
};

export default Register;