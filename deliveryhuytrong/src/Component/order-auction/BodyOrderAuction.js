import React from 'react';
import OrderAuctionPost from './order-auction-component/OrderAuctionPost';
import OrderAuctionTitle from './order-auction-component/OrderAuctionTitle';

class BodyAuction extends React.Component {
    render() {
        return (
            <div>
                <OrderAuctionTitle />
                <OrderAuctionPost />
            </div>
        );
    }
}

export default BodyAuction;