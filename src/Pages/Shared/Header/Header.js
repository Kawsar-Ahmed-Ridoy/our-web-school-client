import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import photo from '../../../image/photo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


// const Header = () => {
//   const {user , logOut} = useContext(AuthContext)

// const handleLogOut = () =>{
//   logOut()
//   .then(()=>{})
//   .catch(error => console.error(error))
// }

const Header = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className='mb-4 sticky-top'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
    <Navbar.Brand><img height={40} src={photo} alt=''/> <Link to={'/'} className="text-decoration-none fw-bold">Our Web School</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto fw-bold">
        <Link className='mx-2' to='/courses'>Courses</Link>
        <Link className='mx-2'>Blog</Link>
        <Link className='mx-2'>FAQ</Link>
  
      </Nav>
      <Nav>
        <>
          {
            user?.uid ?
            <><span className='my-auto fw-bold'>{user?.displayName}</span>
            <Button  className='mx-2'>Log out</Button>
            </> 
            
            : <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
          }

          </>
        <Link to='/profile'>
          {user?.photoURL ?
        <Image style={{height:'35px', width:"35px"}} roundedCircle src={user?.photoURL}></Image>  : <FaUser></FaUser>
        }
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    );
};

export default Header;