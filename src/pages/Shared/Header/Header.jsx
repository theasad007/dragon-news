import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-wrap mb-4'>
            <Container>
                <header>
                    <div className="logo text-center mt-5" >
                        <Link to='/'><img src={logo} alt="" className='center-block' /></Link>
                        <p>Journalism Without Fear or Favour</p>
                        <p><b>{moment().format('dddd')},</b> {moment().format('MMMM D, YYYY')}</p>
                    </div>
                </header>
                <div className="latest-news d-flex">
                    <h5 className='bg-danger p-2 fs-5 text-white border-0 rounded-0'>Latest</h5>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/" className='nav-link'>About</Link>
                            <Link to="/" className='nav-link'>Career</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='p-0'><Button varient='secondary'>Login</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;