import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles.scss';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Header from './Header';
import Sidebar from './Sidebar';
import Authentication from '../screens/Auth/Authentication';
import ProtectedRoute from '../screens/Auth/ProtectedRoute';
import Dashboard from '../screens/Dashboard';
import Companies from '../screens/Companies';
import Facilities from '../screens/Facilities';
import Users from '../screens/Users';
import PricingPlans from '../screens/PricingPlans';
import Security from '../screens/Security';

function Navigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/signup'} component={Signup} />
                <Authentication>
                    <Fragment>
                        <Sidebar />
                        <Header />
                        <main className={'dashboardContentBox'}>
                            <ProtectedRoute
                             exact
                             path={'/dashboard'}
                            >
                                <Dashboard />
                            </ProtectedRoute>
                            <ProtectedRoute
                             exact
                             path={'/companies'}
                            >
                                <Companies />
                            </ProtectedRoute>
                            <ProtectedRoute
                             exact
                             path={'/facilities'}
                            >
                                <Facilities />
                            </ProtectedRoute>
                            <ProtectedRoute
                             exact
                             path={'/users'}
                            >
                                <Users />
                            </ProtectedRoute>
                            <ProtectedRoute
                             exact
                             path={'/pricing-plans'}
                            >
                                <PricingPlans />
                            </ProtectedRoute>
                            <ProtectedRoute
                             exact
                             path={'/security'}
                            >
                                <Security />
                            </ProtectedRoute>
                        </main>
                    </Fragment>
                </Authentication>
            </Switch>
        </BrowserRouter >
    );
}

export default Navigation;