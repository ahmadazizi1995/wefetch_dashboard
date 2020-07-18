import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

class Navigation extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/login'}>
                        <Login />
                    </Route>
                    <Route exact path={'/signup'}>
                        <Signup />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;