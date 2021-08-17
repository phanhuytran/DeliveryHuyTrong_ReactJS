import React from 'react';
import OrderAuctionedList from './list-orders-component/OrderAuctionedList';
import OrderTitle from './list-orders-component/OrderTitle';
import NotificationBell from '../item-base/NotificationBell';
import OrderNotYetAuctionedList from './list-orders-component/OrderNotYetAuctionedList';

class BodyOrder extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <OrderTitle />
                <OrderNotYetAuctionedList />
                <OrderAuctionedList />
            </div>
        );
    }
}

export default BodyOrder;