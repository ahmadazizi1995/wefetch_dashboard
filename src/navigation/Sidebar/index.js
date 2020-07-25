import React from 'react';
import { Nav } from 'react-bootstrap';
import './styles.scss';

function Sidebar() {
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
                <Nav.Link className={'sidebarText'} href="/pricing-plan">Pricing Plan</Nav.Link>
            </Nav.Item>
            <Nav.Item className={'sidebarItem'}>
                <Nav.Link className={'sidebarText'} href="/security">Security</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item className={'sidebarItem'}>
                <Nav.Link className={'sidebarText'} disabled>Disabled</Nav.Link>
            </Nav.Item> */}
        </Nav>
    );
}

export default Sidebar;