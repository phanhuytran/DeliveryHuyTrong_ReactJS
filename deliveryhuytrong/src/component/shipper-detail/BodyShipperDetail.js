import React from 'react';
import ShipperDetailInfo from './shipper-detail-component/ShipperDetailInfo';
import NotificationBell from '../item-base/NotificationBell';

class BodyShipperDetail extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <ShipperDetailInfo props={this.props.props}/>
            </div>
        );
    }
}

export default BodyShipperDetail;