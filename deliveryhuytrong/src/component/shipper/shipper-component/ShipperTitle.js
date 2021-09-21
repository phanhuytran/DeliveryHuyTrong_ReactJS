import React from 'react';
import { Link } from 'react-router-dom';

export default function ShipperTitle() {
    return (
        <div>
            <div className="row page-title">
                <div className="col-md-5 col-sm-6">
                    <div className="pricing-desc section-padding-two mt-shippper">
                        <div className="pricing-desc-title">
                            <div className="title">
                                <h2>our shipper</h2>
                                <p>Prestigious delivery partner, high quality at an affordable price</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                    <div className="shipper_content_title">
                        <ul className="breadcrumbs breadcrumbs-sp">
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/pricing">pricing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}