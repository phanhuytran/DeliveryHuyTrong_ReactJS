import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingTitle() {
    return (
        <div className="row page-title">
            <div className="col-md-5 col-sm-6">
                <div className="pricing-desc section-padding-two item2">
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
                    <ul className="breadcrumbs breadcrumbs-sp">
                        <li><Link to="/shipper">shipper</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}