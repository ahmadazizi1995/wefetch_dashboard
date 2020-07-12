import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap'
import './styles.scss';
import Button from '../../../common/Button';

class LoginScreen extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <Container className='loginContainer'>
                <Row className='mt-3 centerAlign loginHeading'>
                    <label>We Fetch Login</label>
                </Row>
                <Row className='mt-5 centerAlign labelText '>
                    <label className='mt-2 mr-5'>Email</label>
                    <input className='ml-2' type='email' placeholder='Enter Email' onChange={(event) => { this.setState({ email: event.target.value }) }} />
                </Row>
                <Row className='mt-2 centerAlign labelText'>
                    <label className='mt-2 mr-2'>Password</label>
                    <input className='ml-2' type='password' placeholder='Enter Password' onChange={(event) => { this.setState({ password: event.target.value }) }} />
                </Row>
                <Row className='centerAlign'>
                    <Button className='loginButton' text='Login' onClick={() => {}} />
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);