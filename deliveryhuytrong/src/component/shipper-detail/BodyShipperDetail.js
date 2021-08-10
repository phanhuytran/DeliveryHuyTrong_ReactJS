import React from 'react';
import ShipperDetailCustomerOpinion from './shipper-detail-component/ShipperDetailCustomerOpinion';
import ShipperDetailInfo from './shipper-detail-component/ShipperDetailInfo';
import NotificationBell from '../item-base/NotificationBell';

class BodyShipperDetail extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <ShipperDetailInfo props={this.props.props}/>
                <ShipperDetailCustomerOpinion />
            </div>
        );
    }
}

export default BodyShipperDetail;