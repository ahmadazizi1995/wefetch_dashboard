import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Authorization({
    user,
    accessToCheck,
    onApproval,
    onReject,
}) {
    const permissions = ['/dashboard', '/facilities', '/users', '/pricing-plan', '/security'];

    return (
        <div>
            {
                (permissions.includes(accessToCheck) && user.role === 'admin') ? 
                    (
                        onApproval()
                    ) : (
                        onReject()
                    )
            }
        </div>
    );
}

Authorization.propTypes = {
    /* User object from store */
    user: PropTypes.object.isRequired,

    /* Url access string */
    accessToCheck: PropTypes.string.isRequired,

    /* Function to execute if user has permission */
    onApproval: PropTypes.func,

    /* Function to execute is user does't have permission */
    onReject: PropTypes.func,
}

Authorization.defaultProps = {
    onApproval: () => { },
    onReject: () => { },
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);