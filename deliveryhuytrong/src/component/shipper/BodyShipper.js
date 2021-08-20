import React from 'react';
// import ShipperCustomerOpinion from './shipper-component/ShipperCustomerOpinion';
import ShipperList from './shipper-component/ShipperList';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyShipper() {
    return (
        <div>
            <NotificationBell />
            <ShipperList />
            {/* <ShipperCustomerOpinion /> */}
        </div>
    );
}