import React from 'react';
import ShipperDetailInfo from './shipper-detail-component/ShipperDetailInfo';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyShipperDetail(props) {
    return (
        <div>
            <NotificationBell />
            <ShipperDetailInfo props = {props.props} />
        </div>
    );
}