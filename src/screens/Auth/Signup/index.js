import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../redux';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Image } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import './styles.scss';
import { logo } from '../../../theme/Images';

function Signup({
    signupSuccessful,
    setSignupSuccessful,
    onSignup,
    isLoading,
}) {
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const verifyEmail = (event) => {
        const email = event.target.value; 
        setEmail(email);

        (email.includes('@') && email.includes('@') && (email.indexOf('@') < email.indexOf('.'))) ? 
            (
                setEmailError(false)
            ) : (
                setEmailError(true)
            );
    }

    const verifyPassword = (event) => {
        setPasswordTwo(event.target.value);

        passwordOne === event.target.value ?
            (
                setPasswordError(false)
            ) : (
                setPasswordError(true)
            );
    };

    const handleSignupButton = () => {
        if (!passwordError) {
            const body = {
                fullName,
                companyName,
                email,
                password: passwordOne,
            };

            onSignup(body);
        }
    };

    const buttonEnabled = () => {
        if (fullName && companyName && email && passwordOne && !passwordError) {
            return false
        } else {
            return true
        }
    }

    if (!signupSuccessful) {
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
                        <div className="form__group field">
                            <input type="text" className="form__field" placeholder="Full Name" name="fullName" id='fullName' required value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                            <label className="form__label">Full Name</label>
                        </div>
                    </Row>
                    <Row className='mt-2 centerAlign labelText '>
                        <div className="form__group field">
                            <input type="text" className="form__field" placeholder="Company Name" name="company" id='company' required value={companyName} onChange={(event) => { setCompanyName(event.target.value) }} />
                            <label className="form__label">Company Name</label>
                        </div>
                    </Row>
                    <Row className='mt-2 centerAlign labelText '>
    
                        <div className="form__group field">
                            <input type="email" className="form__field" placeholder="Email" name="email" id='email' required value={email} onChange={(event) => { verifyEmail(event) }} />
                            <label className="form__label">Email</label>
                        </div>
                    </Row>
                    <Row className='mt-2 centerAlign labelText'>
    
                            <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Password" name="password" id='passwordOne' required value={passwordOne} onChange={(event) => { setPasswordOne(event.target.value) }} />
                                <label className="form__label">Password</label>
                            </div>
                    </Row>
                    <Row className='mt-2 centerAlign labelText'>
                            <div className="form__group field">
                                <input type="password" className="form__field" placeholder="Password" name="password" id='passwordTwo' required value={passwordTwo} onChange={(event) => { verifyPassword(event) }}  />
                                <label className="form__label">Confirm Password</label>
                            </div>
                    </Row>
                    {
                        emailError && (
                            <Row className='mt-3 centerAlign'>
                                <p className='passwordError'>Invalid Email</p>
                            </Row>
                        )
                    }
                    {
                        passwordError && (
                            <Row className='mt-3 centerAlign'>
                                <p className='passwordError'>Passwords don't match, enter passwords again</p>
                            </Row>
                        )
                    }
                    <Row className='mt-3 mb-3 centerAlign'>
                        <Button className='btn signupButton' disabled={buttonEnabled()} onClick={() => { handleSignupButton() }}>{isLoading ? (`Loading`) : (`Signup`)}</Button>
                    </Row>
                    <Row className='mt-3 mb-3 centerAlign'>
                        <Link className='redirectLink' to='/login'>Already registered? Login instead</Link>
                    </Row>
                </Container>
            </div>
        );
    } else {
        setSignupSuccessful(false);

        return (
            <Redirect exact to={'/login'} />
        );
    }
}

Signup.propTypes = {
    /* Boolean value which indicated whether user signed up successfully */
    signupSuccessful: PropTypes.bool,

    /* Function to alter signupSuccessful */
    setSignupSuccessful: PropTypes.func,

    /* Function to call when submitting signup form */
    onSignup: PropTypes.func.isRequired,

    /* API call in progress */
    isLoading: PropTypes.bool.isRequired,
};

Signup.defaultProps = {
    signupSuccessful: false,
    setSignupSuccessful: () => { },
    isLoading: false,
};

const mapStateToProps = ({ auth }) => ({
    signupSuccessful: auth.signupSuccessful,
    isLoading: auth.isLoading,
 });

const mapDispatchToProps = {
    setSignupSuccessful: AuthActions.setSignupSuccessful,
    onSignup: AuthActions.onSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);