import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState([])
    const [successMessage, setSuccessMessage] = useState([])
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.accept.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccessMessage('User Created Successfully')

                updateProfileData(user, name, photo)
            })
            .catch(error => {
                console.log(error)
                setSuccessMessage('')
                setErrorMessage(error.message)
            })

        const updateProfileData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() =>{})
                .catch(error => console.log(error))
        }

    }

    return (

        <Container>
            <Form onSubmit={handleRegister} style={{ width: 700, paddingTop: 80, paddingBottom: 80, paddingLeft: 70, paddingRight: 70, background: '#F3F3F3', }} className='rounded mt-5 mx-auto'>
                <h2 className='text-center fw-bold mb-5'>Register your account</h2>
                <hr className='mb-5' />

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="url" name='photo' placeholder="Enter Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" required />
                </Form.Group>

                <Button variant="primary w-100 bg-dark border-0 py-3 mt-3" type="submit">
                    Submit
                </Button>

                <div className="text-center text-success fw-semibold mt-3">
                    {successMessage}
                </div>
                <div className="text-center text-danger fw-semibold mt-3">
                    {errorMessage}
                </div>
                <div className="fw-bold fs-6 text-center mt-3">
                    Already have an Account? <Link to='/login' className='text-danger text-decoration-none'>Login</Link>.
                </div>
            </Form>
        </Container>
    );
};

export default Register;