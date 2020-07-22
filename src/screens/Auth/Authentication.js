import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function Authentication({
    isUserLoggedIn,
    children
}) {
    return (
        <Fragment>
            {
                isUserLoggedIn ? 
                    (
                        children
                    ) : (
                        <Redirect to={{ pathname: '/login' }} />
                    )
            }
        </Fragment>
    );
}

Authentication.propTypes = {
    /* Denotes whether user is logged in or not */
    isUserLoggedIn: PropTypes.bool,

    /* Components to render is authenticated */
    children: PropTypes.node.isRequired,
};

Authentication.defaultProps = {
    isUserLoggedIn: false,
};

const mapStateToProps = ({ auth }) => ({
    isUserLoggedIn: auth.isUserLoggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);