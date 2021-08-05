import React, { Component } from 'react';
import OrdertAuctioned from './list-orders-component/OrderAuctioned';
import OrderNotYetAuctioned from './list-orders-component/OrderNotYetAuctioned';
import OrderTitle from './list-orders-component/OrderTitle';

class BodyOrder extends Component {
    render() {
        return (
            <div>
                <OrderTitle />
                <OrderNotYetAuctioned />
                <OrdertAuctioned />
            </div>
        );
    }
}

export default BodyOrder;