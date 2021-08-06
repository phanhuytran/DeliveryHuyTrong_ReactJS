import React from 'react';
import ShipperDetailCustomerOpinion from './shipper-detail-component/ShipperDetailCustomerOpinion';
import ShipperDetailInfo from './shipper-detail-component/ShipperDetailInfo';

class BodyShipperDetail extends React.Component {
    render() {
        return (
            <div>
                <ShipperDetailInfo />
                <ShipperDetailCustomerOpinion />
            </div>
        );
    }
}

export default BodyShipperDetail;