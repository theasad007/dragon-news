import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const MenuBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar bg="light" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/" className='nav-link'>About</Link>
                        <Link to="/" className='nav-link'>Career</Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        {user &&
                            <Nav.Link className='p-0 me-3'><FaUserCircle className='fs-2'></FaUserCircle></Nav.Link>}

                        {user ? <Nav.Link className='p-0'><Button varient='secondary'>Logout</Button></Nav.Link> :
                            <Link to='/login' className='p-0 nav-link'><Button varient='secondary'>Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;