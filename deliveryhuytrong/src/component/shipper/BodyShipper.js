import React from 'react';
// import ShipperCustomerOpinion from './shipper-component/ShipperCustomerOpinion';
import ShipperList from './shipper-component/ShipperList';
import NotificationBell from '../item-base/NotificationBell';

class BodyShipper extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <ShipperList />
                {/* <ShipperCustomerOpinion /> */}
            </div>
        );
    }
}

export default BodyShipper;