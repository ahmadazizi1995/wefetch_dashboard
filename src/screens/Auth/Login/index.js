import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../redux';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Image, Button } from 'react-bootstrap'
import './styles.scss';
import { logo } from '../../../theme/Images';

function Login({
    isUserLoggedIn,
    onLogin,
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = () => {
        const body = {
            email,
            password
        };
        onLogin(body);
    }

    if (isUserLoggedIn) {
        return (
            <Redirect exact to={'/dashboard'} />
        );
    } else {
        return (
            <Container className='loginContainer'>
                <Row className='mt-3 centerAlign'>
                    <Image src={logo} className='loginLogo' />
                </Row>
                <Row className='mt-1 centerAlign loginHeading'>
                    <label>Login</label>
                </Row>
                <Row className='mt-5 centerAlign labelText '>
                    <label className='mt-2 mr-5'>Email</label>
                    <input className='ml-2' type='email' placeholder='Enter Email' onChange={(event) => { setEmail(event.target.value) }} />
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                    <label className='mt-2 mr-2'>Password</label>
                    <input className='ml-2' type='password' placeholder='Enter Password' onChange={(event) => { setPassword(event.target.value) }} />
                </Row>
                <Row className='mt-3 mb-3 centerAlign'>
                    <Button className='loginButton' disabled={false} onClick={() => { handleLoginButton() }}>Login</Button>
                </Row>
                <Row className='mt-3 mb-3 centerAlign'>
                    <Link className='redirectLink' to='/signup'>Register</Link>
                </Row>
            </Container>
        );
    }
}

Login.propTypes = {
    /* Whether user is logged in or not */
    isUserLoggedIn: PropTypes.bool,

    /* Function dispatched when login button clicked */
    onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
    isUserLoggedIn: auth.isUserLoggedIn,
});

const mapDispatchToProps = {
    onLogin: AuthActions.onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);