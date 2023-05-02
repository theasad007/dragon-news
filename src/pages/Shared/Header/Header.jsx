import React from 'react';
import logo from '../../../assets/logo.png'
import { Container } from 'react-bootstrap'
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
            </Container>
        </div>
    );
};

export default Header;