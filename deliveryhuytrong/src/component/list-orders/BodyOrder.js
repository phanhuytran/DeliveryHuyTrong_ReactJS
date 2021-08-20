import React from 'react';
import OrderAuctionedList from './list-orders-component/OrderAuctionedList';
import OrderTitle from './list-orders-component/OrderTitle';
import NotificationBell from '../item-base/NotificationBell';
import OrderNotYetAuctionedList from './list-orders-component/OrderNotYetAuctionedList';

export default function BodyOrder() {
    return (
        <div>
            <NotificationBell />
            <OrderTitle />
            <OrderNotYetAuctionedList />
            <OrderAuctionedList />
        </div>
    );
}