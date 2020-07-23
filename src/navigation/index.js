import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Header from './Header';
import Sidebar from './Sidebar';
import Authentication from '../screens/Auth/Authentication';
import Authorization from '../screens/Auth/Authorization';

function Navigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/signup'} component={Signup} />
                <Authentication>
                    <Fragment>
                        <Header />
                        <Sidebar />
                        <main className={'dashboardContentBox'}>
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
                                                        <p>DASHBOARD (ADMIN)</p>
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
                                                        <p>DASHBOARD (CLIENT)</p>
                                                    </div>
                                                );
                                            }}
                                        />
                                    );
                                }}
                            />
                            <Authorization
                                accessToCheck={'/facilities'}
                                onApproval={() => {
                                    return (
                                        <Route
                                            exact
                                            path={'/facilities'}
                                            render={() => {
                                                return (
                                                    <div>
                                                        <p>FACILITIES (ADMIN)</p>
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
                                                        <p>Dashboard (CLIENT)</p>
                                                    </div>
                                                );
                                            }}
                                        />
                                    );
                                }}
                            />
                            <Authorization
                                accessToCheck={'/users'}
                                onApproval={() => {
                                    return (
                                        <Route
                                            exact
                                            path={'/users'}
                                            render={() => {
                                                return (
                                                    <div>
                                                        <p>USERS (ADMIN)</p>
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
                                                        <p>DASHBOARD (CLIENT)</p>
                                                    </div>
                                                );
                                            }}
                                        />
                                    );
                                }}
                            />
                            <Authorization
                                accessToCheck={'/pricing-plan'}
                                onApproval={() => {
                                    return (
                                        <Route
                                            exact
                                            path={'/pricing-plan'}
                                            render={() => {
                                                return (
                                                    <div>
                                                        <p>PRICING_PLAN (ADMIN)</p>
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
                                                        <p>DASHBOARD (CLIENT)</p>
                                                    </div>
                                                );
                                            }}
                                        />
                                    );
                                }}
                            />
                            <Authorization
                                accessToCheck={'/security'}
                                onApproval={() => {
                                    return (
                                        <Route
                                            exact
                                            path={'/security'}
                                            render={() => {
                                                return (
                                                    <div>
                                                        <p>SECURITY (ADMIN)</p>
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
                                                        <p>DASHBOARD (CLIENT)</p>
                                                    </div>
                                                );
                                            }}
                                        />
                                    );
                                }}
                            />
                        </main>
                    </Fragment>
                </Authentication>
            </Switch>
        </BrowserRouter >
    );
}

export default Navigation;