import React from 'react';
import IndexAbout from './index-component/IndexAbout';
import IndexInitiatory from './index-component/IndexInitiatory';
import IndexStatistic from './index-component/IndexStatistic';
import Introduction from './index-component/Introduction';
import OrderNotYetAuctionedList from './../list-orders/list-orders-component/OrderNotYetAuctionedList.js';

export default function BodyIndex() {
    return (
        <>
            <Introduction />
            <IndexInitiatory />
            <IndexAbout />
            <IndexStatistic />
            <OrderNotYetAuctionedList />
        </>
    );
}