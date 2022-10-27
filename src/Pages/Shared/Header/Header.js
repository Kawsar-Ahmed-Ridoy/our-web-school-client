import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



// const Header = () => {
//   const {user , logOut} = useContext(AuthContext)

// const handleLogOut = () =>{
//   logOut()
//   .then(()=>{})
//   .catch(error => console.error(error))
// }

const Header = () => {
    return (
        <div className='mb-4 sticky-top'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
    <Navbar.Brand><Link to={'/'}>Our Web School</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">All News</Nav.Link>
        <Nav.Link href="#pricing">Category</Nav.Link>
        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        {/* <>
          {
            user?.uid ?
            <><span>{user?.displayName}</span>
            <Button onClick={handleLogOut} className='ms-2'>Log out</Button>
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
        </Link> */}
      </Nav>
      {/* <div className="d-lg-none">
        <LeftSideNav></LeftSideNav>
      </div> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    );
};

export default Header;