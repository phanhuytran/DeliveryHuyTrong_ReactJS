import React from 'react';
import PricingTitle from './pricing-component/PricingTitle';
import NotificationBell from '../item-base/NotificationBell';

class BodyPricing extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <section className="order_us_area" id="pricing">
                    <div className="container">
                        <PricingTitle />
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single-pricing-table">
                                    <div className="pricing-title">
                                        <h6>standard</h6>
                                        <h1>50$</h1>
                                        <h5>for a delivery</h5>
                                    </div>
                                    <ul className="price-list">
                                        <li>Full website maintance</li>
                                        <li>Free domain &amp; hosting</li>
                                        <li>High quality product</li>
                                        <li>24/7 Customer shipper</li>
                                    </ul>
                                    <div className="order-buton">
                                        <a>order now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single-pricing-table">
                                    <div className="pricing-title">
                                        <h6>premium</h6>
                                        <h1>250$</h1>
                                        <h5>for a delivery</h5>
                                    </div>
                                    <ul className="price-list">
                                        <li>Full website maintance</li>
                                        <li>Free domain &amp; hosting</li>
                                        <li>High quality product</li>
                                        <li>24/7 Customer shipper</li>
                                    </ul>
                                    <div className="order-buton">
                                        <a>order now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12 text-center">
                                <div className="single-pricing-table">
                                    <div className="pricing-title">
                                        <h6>Basic</h6>
                                        <h1>50$</h1>
                                        <h5>for a delivery</h5>
                                    </div>
                                    <ul className="price-list">
                                        <li>Full website maintance</li>
                                        <li>Free domain &amp; hosting</li>
                                        <li>High quality product</li>
                                        <li>24/7 Customer shipper</li>
                                    </ul>
                                    <div className="order-buton">
                                        <a>order now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><br /><br />
            </div>
        );
    }
}

export default BodyPricing;