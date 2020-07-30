import React from 'react';
import PropTypes from 'prop-types';


function PriceCard({
    plan,
    price,
    duration,
    userLimit,
}) {
    return (
        <div className="col-lg-3 col-md-6 p-2">

            <div className="price-card p-4 mt-5">
                <div className="row justify-content-center heading mt-2"> {plan} </div>
    <div className="row justify-content-center price"> ${price}</div>
                <div className="row justify-content-center duration-text"> {duration}</div>
    <div className="row justify-content-center user-limit mt-4 mb-4">{userLimit}</div>
            </div>
        </div>
    );
};

PriceCard.propTypes = {
    plan: PropTypes.string,
    price: PropTypes.string,
    duration: PropTypes.string,
    userLimit: PropTypes.string,
}

export default PriceCard