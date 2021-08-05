import React, { Component } from 'react';
import OrderNotYetAuctionedList from './OrderNotYetAuctionedList';
import OrderPostInfo from './OrderPostInfo';

class OrderNotYetAuctioned extends Component {
    render() {
        return (
            <div>
                <section className="order-bottom-area">
                    <div className="container">
                        <div className="row">
                            <OrderPostInfo />
                            <OrderNotYetAuctionedList />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrderNotYetAuctioned;