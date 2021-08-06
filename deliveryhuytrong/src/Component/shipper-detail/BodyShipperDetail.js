import React, { Component } from 'react';
import ShipperDetailCustomerOpinion from './shipper-detail-component/ShipperDetailCustomerOpinion';
import ShipperDetailRating from './shipper-detail-component/ShipperDetailRating';

class BodyShipperDetail extends Component {
    render() {
        return (
            <div>
                <ShipperDetailRating />
                <ShipperDetailCustomerOpinion />
            </div>
        );
    }
}

export default BodyShipperDetail;