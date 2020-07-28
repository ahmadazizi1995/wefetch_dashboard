import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.scss';

function Sidebar({
    user,
}) {
    if (user.role === 'admin') {
        return (
            <Nav className={'sidebarContainer'}>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/companies">Companies</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/pricing-plans">Pricing Plans</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/security">Security</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    } else {
        return (
            <Nav className={'sidebarContainer'}>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/facilities">Facilities</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/users">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/pricing-plans">Pricing Plans</Nav.Link>
                </Nav.Item>
                <Nav.Item className={'sidebarItem'}>
                    <Nav.Link className={'sidebarText'} href="/security">Security</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

Sidebar.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);