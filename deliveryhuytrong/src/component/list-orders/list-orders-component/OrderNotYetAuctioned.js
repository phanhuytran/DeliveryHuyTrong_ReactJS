import React from 'react';
import OrderNotYetAuctionedList from './OrderNotYetAuctionedList';

class OrderNotYetAuctioned extends React.Component {
    render() {
        return (
            <div>
                <section className="order-bottom-area">
                    <div className="container">
                        <div className="row">
                            <OrderNotYetAuctionedList />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrderNotYetAuctioned;