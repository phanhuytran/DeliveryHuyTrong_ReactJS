import React from 'react';
import PricingTitle from './pricing-component/PricingTitle';
import NotificationBell from '../item-base/NotificationBell';
import Pricing from './pricing-component/Pricing';

export default function BodyPricing() {
    return (
        <>
            <NotificationBell />
            <section className="order_us_area" id="pricing" style={{ marginBottom: '5%' }}>
                <div className="container">
                    <PricingTitle />
                    <Pricing />
                </div>
            </section>
        </>
    );
}