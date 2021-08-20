import React from 'react';
import OrderAuctionPost from './order-auction-component/OrderAuctionPost';
import OrderAuctionTitle from './order-auction-component/OrderAuctionTitle';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyAuction(props) {
    return (
        <div>
            <NotificationBell />
            <OrderAuctionTitle />
            <OrderAuctionPost props={props.props} />
        </div>
    );
}