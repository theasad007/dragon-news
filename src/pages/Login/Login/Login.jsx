import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState([])
    const [successMessage, setSuccessMessage] = useState([])
    const { signIn } = useContext(AuthContext);


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setErrorMessage('')
                setSuccessMessage('Loggin Successful')
                console.log(loggedUser)
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.message)
                console.log(error)
            })
    }

    return (
        <Container>
            <Form onSubmit={handleSignIn} style={{ width: 700, paddingTop: 80, paddingBottom: 80, paddingLeft: 70, paddingRight: 70, background: '#F3F3F3', }} className='rounded mt-5 mx-auto'>
                <h2 className='text-center fw-bold mb-5'>Login your account</h2>
                <hr className='mb-5' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
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
                    Don't have an Account? <Link to='/register' className='text-blue text-decoration-none'>Register</Link>.
                </div>
            </Form>
        </Container>
    );
};

export default Login;