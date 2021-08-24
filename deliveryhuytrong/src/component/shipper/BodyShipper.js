import React from 'react';
import ShipperList from './shipper-component/ShipperList';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyShipper() {
    return (
        <div>
            <NotificationBell />
            <ShipperList />
        </div>
    );
}