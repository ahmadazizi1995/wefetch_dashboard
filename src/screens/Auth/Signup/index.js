import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import './styles.scss';
import Button from '../../../common/Button';
import { logo } from '../../../theme/Images'

class Signup extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            passwordError: false
        };
    }

    verifyPassword(event) {
        const { passwordOne } = this.state;
        const passwordTwo = event.target.value;

        this.setState({ passwordTwo })
        passwordOne === passwordTwo ?
            (
                this.setState({ passwordError: false })
            ) : (
                this.setState({ passwordError: true })
            );
    }

    onSignup() {

    }

    render() {
        const { passwordOne, passwordTwo, passwordError } = this.state;

        return (
            <Container className='signupContainer'>
                <Row className='mt-3 centerAlign'>
                    <Image src={logo} className='logoImage' roundedCircle />
                </Row>
                <Row className='mt-1 centerAlign signupHeading'>
                    <label>We Fetch Signup</label>
                </Row>
                <Row className='mt-5 centerAlign labelText '>
                    <label className='mt-2 mr-3'>Company</label>
                    <input className='ml-2' type='text' placeholder='Enter Company Name' onChange={(event) => { this.setState({ companyName: event.target.value }) }} />
                </Row>
                <Row className='mt-2 centerAlign labelText '>
                    <label className='mt-2 mr-5'>Email</label>
                    <input className='ml-2' type='email' placeholder='Enter Email' onChange={(event) => { this.setState({ email: event.target.value }) }} />
                </Row>
                <Row className='mt-2 passwordRow centerAlign labelText'>
                    <label className='passwordLabel'>Password</label>
                    <Col className='passwordFields'>
                        <input type='password' placeholder='Enter Password' value={passwordOne} onChange={(event) => { this.setState({ passwordOne: event.target.value }) }} />
                        <input className='mt-1' type='password' placeholder='Enter Password Again' value={passwordTwo} onChange={(event) => { this.verifyPassword(event) }} />
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
                    <Button className='signupButton' text='Signup' onClick={() => { this.onSignup() }} />
                </Row>
                <Row className='mt-3 mb-3 centerAlign'>
                    <Link className='redirectLink' to='/login'>Already registered? Login instead</Link>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ }) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);