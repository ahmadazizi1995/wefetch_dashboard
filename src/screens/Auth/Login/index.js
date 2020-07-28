import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../redux';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Image } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import './styles.scss';
import { logo } from '../../../theme/Images';

function Login({
    isUserLoggedIn,
    onLogin,
    isLoading,
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
            <div className="login">
                <Container className='loginContainer'>
                    <Row className='mt-3 centerAlign'>
                        <Image src={logo} className='loginLogo' />
                    </Row>
                    <Row className='mt-1 centerAlign loginHeading'>
                        <label>Login</label>
                    </Row>
                    <Row className='mt-3 centerAlign labelText '>
                        <div className="form__group field">
                            <input type="email" className="form__field" placeholder="Email" name="email" id='email' required onChange={(event) => { setEmail(event.target.value) }} />
                            <label className="form__label">Email</label>
                        </div>
                    </Row>
                    <Row className='mt-2 centerAlign labelText'>
                        <div className="form__group field">
                            <input type="password" className="form__field" placeholder="Password" name="password" id='password' required onChange={(event) => { setPassword(event.target.value) }} />
                            <label className="form__label">Password</label>
                        </div>
                    </Row>
                    <Row className='mt-4 mb-3 centerAlign'>
                        <Button className='btn loginButton' disabled={false} onClick={() => { handleLoginButton() }}>{isLoading ? (`Loading`) : (`Login`)}</Button>
                    </Row>
                    <Row className='mt-3 mb-3 centerAlign'>
                        <Link className='redirectLink' to='/signup'>Register</Link>
                    </Row>
                </Container>
            </div>
        );
    }
}

Login.propTypes = {
    /* Whether user is logged in or not */
    isUserLoggedIn: PropTypes.bool,

    /* Function dispatched when login button clicked */
    onLogin: PropTypes.func.isRequired,

    /* API call in progress */
    isLoading: PropTypes.bool.isRequired,
};

Login.defaultProps = {
    isLoading: false,
};

const mapStateToProps = ({ auth }) => ({
    isUserLoggedIn: auth.isUserLoggedIn,
    isLoading: auth.isLoading
});

const mapDispatchToProps = {
    onLogin: AuthActions.onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);