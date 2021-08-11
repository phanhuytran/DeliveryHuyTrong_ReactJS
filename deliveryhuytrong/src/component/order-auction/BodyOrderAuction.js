import React from 'react';
import OrderAuctionPost from './order-auction-component/OrderAuctionPost';
import OrderAuctionTitle from './order-auction-component/OrderAuctionTitle';
import NotificationBell from '../item-base/NotificationBell';

class BodyAuction extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <OrderAuctionTitle />
                <OrderAuctionPost props={this.props.props} />
            </div>
        );
    }
}

export default BodyAuction;