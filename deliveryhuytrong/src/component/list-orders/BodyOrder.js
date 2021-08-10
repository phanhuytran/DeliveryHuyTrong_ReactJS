import React from 'react';
import OrdertAuctioned from './list-orders-component/OrderAuctioned';
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
                <OrdertAuctioned />
            </div>
        );
    }
}

export default BodyOrder;