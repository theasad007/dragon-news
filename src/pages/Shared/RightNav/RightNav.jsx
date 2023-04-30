import React from 'react';
import './RightNav.css'
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';


const RightNav = () => {

    return (
        <div>
            <h4 className='fs-5 fw-bold mb-3'>Login With</h4>
            <Button variant="outline-dark" className='w-100 mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark" className='w-100'> <FaGithub></FaGithub> Login with Github</Button>
            <div className="social-share mt-4">
                <h4 className='fs-5 fw-bold mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebookF></FaFacebookF> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter></FaTwitter> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram></FaInstagram>Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="banner mt-4">
                <h3 className='text-white fw-bold fs-2 mb-4'>Create an Amazing Newspaper</h3>
                <p className='text-white mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant='danger' className='py-3 px-4'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;