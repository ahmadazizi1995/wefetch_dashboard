import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthActions } from '../../screens/Auth/redux';
import { Navbar, Image, Button } from 'react-bootstrap';
import './styles.scss';
import { logo } from '../../theme/Images';

function Header({
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
                    Admin: Mark Otto
                </Navbar.Text>
                <Button className={'headerLogoutButton ml-4 mr-3'} onClick={() => { handleLogoutButton() }}>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

Header.propTypes = {
    /* Logout functionality */
    onLogout: PropTypes.func.isRequired,
}

const mapStateToProps = () => { };

const mapDispatchToProps = {
    onLogout: AuthActions.onLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);