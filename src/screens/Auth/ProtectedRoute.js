import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({
    children,
    isUserLoggedIn,
    user,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={() => {
                if (isUserLoggedIn && user.permissions.includes(rest.path)) {
                    return (
                        children
                    );
                } else {
                    return (
                        <Redirect
                            to={'/dashboard'}
                        />
                    );
                }
            }}
        />
    );
}

ProtectedRoute.propTypes = {
    /* Components to be rendered inside */
    children: PropTypes.node,

    /* Whether the current user is logged in or not */
    isUserLoggedIn: PropTypes.bool,

    /* User object with user inforamtion */
    user: PropTypes.object
};

ProtectedRoute.defaultProps = {
    isUserLoggedIn: false,
    children: null,
};

const mapStateToProps = ({ auth }) => ({
    isUserLoggedIn: auth.isUserLoggedIn,
    user: auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);