import React, { Component } from 'react';

class BodyPricing extends Component {
    render() {
        return (
            <div>
                <section className="order_us_area" id="pricing">
                    <div className="container">
                        <div className="row page-title">
                            <div className="col-md-5 col-sm-6">
                                <div className="pricing-desc section-padding-two">
                                    <div className="pricing-desc-title">
                                        <div className="title">
                                            <h2>Pricing &amp; plans</h2>
                                            <p>Free shipping is a method used by many businesses to attract and keep customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                                <div className="shipper_content_title">
                                    <ul className="breadcrumbs">
                                        <li><a href="/">home</a></li>
                                        <li><a href="/pricing">pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                </section><br/><br/>
            </div>
        );
    }
}

export default BodyPricing;