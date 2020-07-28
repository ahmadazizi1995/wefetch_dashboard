import React from 'react';
import './styles.scss';
import { Accordion, Card } from 'react-bootstrap';
import facility from '../../theme/Images/facility.svg';
import users from '../../theme/Images/users.svg';
import payment from '../../theme/Images/payment.svg';

function Companies() {

    let data = [
        {
            "id": 1,
            "createdAt": 1595015351671,
            "updatedAt": 1595015351671,
            "name": "Jet Pet",
            "city": "",
            "plan": "standard",
            "facilities": 4,
            "users": 31,
            "allowedUsers": 100
        },
        {
            "id": 2,
            "createdAt": 1595015555755,
            "updatedAt": 1595015555755,
            "name": "Pet Mania",
            "city": "",
            "plan": "standard",
            "facilities": 4,
            "users": 31,
            "allowedUsers": 100
        }
    ];

    return (
        <div className="companies-body">
            <div className="content-card">
                <Accordion>
                    {data.map((element, index) => {
                        return (
                            <Card key={index}>
                                <Accordion.Toggle as={Card.Header} eventKey={element.id}>

                                    <div className="row ">
                                        <div className="col-2 text-center align-self-center company-name">
                                            {element.name}
                                        </div>

                                        <div className="col-3">
                                            <div className="row justify-content-center">
                                                <img className="image-icon" src={facility} alt="facility-icon" />
                                            </div>
                                            <div className="row justify-content-center">
                                                Facilities
                                            </div>
                                            <div className="row justify-content-center header-value">
                                                {element.facilities}
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="row justify-content-center">
                                                <img className="image-icon" src={users} alt="facility-icon" />
                                            </div>
                                            <div className="row justify-content-center">
                                                Users
                                            </div>
                                            <div className="row justify-content-center header-value">
                                                {element.users} / {element.allowedUsers}
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <div className="row justify-content-center">
                                                <img className="image-icon" src={payment} alt="facility-icon" />
                                            </div>
                                            <div className="row justify-content-center">
                                                Plan
                                            </div>
                                            <div className="row justify-content-center header-value">
                                                {element.plan}
                                            </div>
                                        </div>

                                        <div className="col-1 text-center align-self-center">
                                            ...
                                        </div>
                                    </div>

                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={element.id}>
                                    <div className="accordion-facilities">
                                        <Card.Body>
                                            <div className="row facility">
                                                <div className="col-2">
                                                    Facility 1
                                            </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        );
                    })}

                </Accordion>
            </div>
        </div>
    );
};

export default Companies;