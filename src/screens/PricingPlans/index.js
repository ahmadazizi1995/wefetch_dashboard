import React from 'react';
import './styles.scss';
import payment from '../../theme/Images/payment.svg';

import { Tabs, Tab } from 'react-bootstrap';
import PriceCard from '../../common/priceCard';

function PricingPlans() {
    return (
        <div className="pricing-plan">
            <Tabs defaultActiveKey="monthly" id="pricing-plan">
                <Tab tabClassName="" eventKey="monthly" title="Monthly">
                    <div className="row justify-content-around mt-4 pricing-plan-cards">

                        <PriceCard
                            plan={"BASIC"}
                            price={"49"}
                            duration={"MONTHLY"}
                            userLimit={"Upto 100 USERS"}
                        />
                        <PriceCard
                            plan={"PRO"}
                            price={"59"}
                            duration={"MONTHLY"}
                            userLimit={"Upto 200 USERS"}
                        />
                        <PriceCard
                            plan={"PREMIUM"}
                            price={"69"}
                            duration={"MONTHLY"}
                            userLimit={"Upto 300 USERS"}
                        />
                        <PriceCard
                            plan={"ENTERPRISE"}
                            price={"79"}
                            duration={"MONTHLY"}
                            userLimit={"300+ USERS"}
                        />

                    </div>
                </Tab>
                <Tab eventKey="yearly" title="Yearly">
                    <div className="row justify-content-around mt-4 pricing-plan-cards">

                        <PriceCard
                            plan={"BASIC"}
                            price={"490"}
                            duration={"ANNUAL"}
                            userLimit={"Upto 100 USERS"}
                        />
                        <PriceCard
                            plan={"PRO"}
                            price={"590"}
                            duration={"ANNUAL"}
                            userLimit={"Upto 200 USERS"}
                        />
                        <PriceCard
                            plan={"PREMIUM"}
                            price={"690"}
                            duration={"ANNUAL"}
                            userLimit={"Upto 300 USERS"}
                        />
                        <PriceCard
                            plan={"ENTERPRISE"}
                            price={"790"}
                            duration={"ANNUAL"}
                            userLimit={"300+ USERS"}
                        />

                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default PricingPlans;