import React from 'react';
import HomeAbout from './home-component/HomeAbout';
import HomeInitiatory from './home-component/HomeInitiatory';
import HomeStatistic from './home-component/HomeStatistic';
import Introduction from './home-component/Introduction';
import OrderNotYetAuctionedList from './../list-orders/list-orders-component/OrderNotYetAuctionedList.js';

export default function BodyHome() {
    return (
        <>
            <Introduction />
            <HomeInitiatory />
            <HomeAbout />
            <HomeStatistic />
            <OrderNotYetAuctionedList />
        </>
    );
}