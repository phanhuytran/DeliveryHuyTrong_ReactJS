import React from 'react';
import OrderAuctionedList from './list-orders-component/OrderAuctionedList';
import OrderNotYetAuctioned from './list-orders-component/OrderNotYetAuctioned';
import OrderTitle from './list-orders-component/OrderTitle';
import NotificationBell from '../item-base/NotificationBell';

class BodyOrder extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <OrderTitle />
                <OrderNotYetAuctioned />
                <OrderAuctionedList />
            </div>
        );
    }
}

export default BodyOrder;