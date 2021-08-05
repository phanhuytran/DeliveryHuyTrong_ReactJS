import React, { Component } from 'react';

class ShipperTitle extends Component {
    render() {
        return (
            <div>
                <div className="row page-title">
                    <div className="col-md-5 col-sm-6">
                        <div className="pricing-desc section-padding-two">
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
                            <ul className="breadcrumbs">
                                <li><a href="/">home</a></li>
                                <li><a href="/shipper">shipper</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShipperTitle;