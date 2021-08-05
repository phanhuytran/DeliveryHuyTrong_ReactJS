import React, { Component } from 'react';
import ShipperDetailCustomerOpinion from './shipper-detail-component/ShipperDetailCustomerOpinion';
import ShipperDetailPersonalInfo from './shipper-detail-component/ShipperDetailPersonalInfo';

class BodyShipperDetail extends Component {
    render() {
        return (
            <div>
                <ShipperDetailPersonalInfo/>
                <ShipperDetailCustomerOpinion/>
            </div>
        );
    }
}

export default BodyShipperDetail;