import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import './styles.scss';
import { logo } from '../../../theme/Images';

function Signup({
    onSignup
}) {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [passwordError, setPasswordError] = useState(false);


    const verifyPassword = (event) => {
        const passwordTwo = event.target.value;

        setPasswordTwo(passwordTwo);
        passwordOne === passwordTwo ?
            (
                setPasswordError(false)
            ) : (
                setPasswordError(true)
            );
    };

    const handleSignupButton = () => {
        if (!passwordError) {
            const body = {
                companyName,
                email,
                passwordOne,
            };

            onSignup(body);
        }
    };

    return (
        <Container className='signupContainer'>
            <Row className='mt-3 centerAlign'>
                <Image src={logo} className='signupLogo' />
            </Row>
            <Row className='mt-1 centerAlign signupHeading'>
                <label>Signup</label>
            </Row>
            <Row className='mt-5 centerAlign labelText '>
                <label className='mt-2 mr-3'>Company</label>
                <input className='ml-2' type='text' placeholder='Enter Company Name' value={companyName} onChange={(event) => { setCompanyName(event.target.value) }} />
            </Row>
            <Row className='mt-2 centerAlign labelText '>
                <label className='mt-2 mr-5'>Email</label>
                <input className='ml-2' type='email' placeholder='Enter Email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
            </Row>
            <Row className='mt-2 passwordRow centerAlign labelText'>
                <label className='passwordLabel'>Password</label>
                <Col className='passwordFields'>
                    <input type='password' placeholder='Enter Password' value={passwordOne} onChange={(event) => { setPasswordOne(event.target.value) }} />
                    <input className='mt-1' type='password' placeholder='Enter Password Again' value={passwordTwo} onChange={(event) => { verifyPassword(event) }} />
                </Col>
            </Row>
            {
                passwordError && (
                    <Row className='mt-3 centerAlign'>
                        <text className='passwordError'>Passwords don't match, enter passwords again</text>
                    </Row>
                )
            }
            <Row className='mt-3 mb-3 centerAlign'>
                <Button className='signupButton' disabled={false} onClick={() => { handleSignupButton() }}>Signup</Button>
            </Row>
            <Row className='mt-3 mb-3 centerAlign'>
                <Link className='redirectLink' to='/login'>Already registered? Login instead</Link>
            </Row>
        </Container>
    );
}

Signup.propTypes = {
    onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = () => {};

const mapDispatchToProps = {
    onSignup: AuthActions.onSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);