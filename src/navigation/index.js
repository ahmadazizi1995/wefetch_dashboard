import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AuthActions } from '../screens/Auth/redux';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Authentication from '../screens/Auth/Authentication';
import Authorization from '../screens/Auth/Authorization';

function Navigation({
    onLogout,
}) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/signup'} component={Signup} />
                <Authentication>
                    <Fragment>
                        <Authorization
                            accessToCheck={'/dashboard'}
                            onApproval={() => {
                                return (
                                    <Route
                                        exact
                                        path={'/dashboard'}
                                        render={() => {
                                            return (
                                                <div>
                                                    <p>
                                                        Dashboard (ADMIN)
                                                    </p>
                                                    <Button onClick={() => { onLogout() }}>Logout</Button>
                                                </div>
                                            );
                                        }}
                                    />
                                );
                            }}
                            onReject={() => {
                                return (
                                    <Route
                                        exact
                                        path={'/dashboard'}
                                        render={() => {
                                            return (
                                                <div>
                                                    <p>
                                                        Dashboard (CLIENT)
                                                    </p>
                                                    <Button onClick={() => { onLogout() }}>Logout</Button>
                                                </div>
                                            );
                                        }}
                                    />
                                );
                            }}
                        />
                    </Fragment>
                </Authentication>
            </Switch>
        </BrowserRouter >
    );
}

const mapStateToProps = () => { };

const mapDispatchToProps = {
    onLogout: AuthActions.onLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);