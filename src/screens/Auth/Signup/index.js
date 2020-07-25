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
        <div className="signUp">
            <Container className='signupContainer'>
                <Row className='mt-3 centerAlign'>
                    <Image src={logo} className='signupLogo' />
                </Row>
                <Row className='mt-1 centerAlign signupHeading'>
                    <label>Signup</label>
                </Row>
                <Row className='mt-3 centerAlign labelText '>

                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Company Name" name="company" id='company' required onChange={(event) => { setCompanyName(event.target.value) }} />
                        <label for="company" class="form__label">Company Name</label>
                    </div>
                </Row>
                <Row className='mt-2 centerAlign labelText '>

                    <div class="form__group field">
                        <input type="email" class="form__field" placeholder="Email" name="email" id='email' required onChange={(event) => { setEmail(event.target.value) }} />
                        <label for="email" class="form__label">Email</label>
                    </div>
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                    {/* <Col className='passwordFields'> */}

                        <div class="form__group field">
                            <input type="password" class="form__field" placeholder="Password" name="password" id='password' required onChange={(event) => { setPasswordOne(event.target.value) }} />
                            <label for="password" class="form__label">Password</label>
                        </div>
                    {/* </Col> */}
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                    {/* <Col className='passwordFields'> */}
                        <div class="form__group field">
                            <input type="password" class="form__field" placeholder="Password" name="password" id='password' required onChange={(event) => { setPasswordTwo(event.target.value) }}  />
                            <label for="password" class="form__label">Confirm Password</label>
                        </div>
                    {/* </Col> */}
                </Row>
                {
                    passwordError && (
                        <Row className='mt-3 centerAlign'>
                            <text className='passwordError'>Passwords don't match, enter passwords again</text>
                        </Row>
                    )
                }
                <Row className='mt-3 mb-3 centerAlign'>
                    <Button className='btn signupButton' disabled={false} onClick={() => { handleSignupButton() }}>Signup</Button>
                </Row>
                <Row className='mt-3 mb-3 centerAlign'>
                    <Link className='redirectLink' to='/login'>Already registered? Login instead</Link>
                </Row>
            </Container>
        </div>
    );
}

Signup.propTypes = {
    onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = () => { };

const mapDispatchToProps = {
    onSignup: AuthActions.onSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);