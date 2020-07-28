import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../../screens/Auth/redux';
import { Navbar, Image } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './styles.scss';
import { logo } from '../../theme/Images';

function Header({
    user,
    onLogout,
}) {
    const handleLogoutButton = () => {
        onLogout();
    }

    return (
        <Navbar className={'headerContainer'}>
            <Image src={logo} className={'headerLogo  ml-3'} />
            <Navbar.Collapse className={'justify-content-end'}>
                <Navbar.Text className={'headerText'}>
                    {user.role === 'admin' ? (`Admin: ${user.fullName}`) : (`Client: ${user.fullName}`)}
                </Navbar.Text>
                <Button className={'btn headerLogoutButton ml-4 mr-3'} onClick={() => { handleLogoutButton() }}>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

Header.propTypes = {
    /* User object with user information */
    user: PropTypes.object.isRequired,

    /* Logout functionality */
    onLogout: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
 });

const mapDispatchToProps = {
    onLogout: AuthActions.onLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);