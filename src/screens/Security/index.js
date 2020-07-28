import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../Auth/redux';
import { Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './styles.scss';

function Security({
    user,
    onUpdatePassword,
    isLoading,
}) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPasswordOne, setNewPasswordOne] = useState('');
    const [newPasswordTwo, setNewPasswordTwo] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const verifyPassword = (event) => {
        const newPasswordTwo = event.target.value; 
        setNewPasswordTwo(newPasswordTwo);

        newPasswordOne === newPasswordTwo ?
            (
                setPasswordError(false)
            ) : (
                setPasswordError(true)
            );
    };

    const buttonEnabled = () => {
        if (currentPassword && newPasswordOne && newPasswordTwo && !passwordError) {
            return false;
        } else {
            return true;
        }
    }

    const handleUpdatePasswordButton = () => {
        const body = {
            id: user.id,
            currentPassword: currentPassword,
            newPassword: newPasswordOne
        };

        onUpdatePassword(body);
    }

    return (
        <div className="security">
            <Container className='securityContainer'>
                <Row className='mt-1 centerAlign securityHeading'>
                    <label>Update Password</label>
                </Row>
                <Row className='mt-2 centerAlign labelText'>

                        <div className="form__group field">
                            <input type="password" className="form__field" placeholder="Current Password" required value={currentPassword} onChange={(event) => { setCurrentPassword(event.target.value) }} />
                            <label className="form__label">Current Password</label>
                        </div>
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                        <div className="form__group field">
                            <input type="password" className="form__field" placeholder="New Password" required value={newPasswordOne} onChange={(event) => { setNewPasswordOne(event.target.value) }}  />
                            <label className="form__label">New Password</label>
                        </div>
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                        <div className="form__group field">
                            <input type="password" className="form__field" placeholder="Confirm Password" required value={newPasswordTwo} onChange={(event) => { verifyPassword(event) }}  />
                            <label className="form__label">Confirm Password</label>
                        </div>
                </Row>
                {
                    passwordError && (
                        <Row className='mt-3 centerAlign'>
                            <p className='passwordError'>Passwords don't match, enter passwords again</p>
                        </Row>
                    )
                }
                <Row className='mt-3 mb-3 centerAlign'>
                    <Button className='btn updateButton' disabled={buttonEnabled()} onClick={() => { handleUpdatePasswordButton() }}>{isLoading ? (`Loading`) : (`Update`)}</Button>
                </Row>
            </Container>
        </div>
    );
};

Security.propTypes = {
    /* User object with user information */
    user: PropTypes.object.isRequired,

    /* Function to call when updating password */
    onUpdatePassword: PropTypes.func.isRequired,

    /* API call in progress */
    isLoading: PropTypes.bool.isRequired,
};

Security.defaultProps = {
    isLoading: false,
};

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    isLoading: auth.isLoading,
});

const mapDispatchToProps = { 
    onUpdatePassword: AuthActions.onUpdatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Security);