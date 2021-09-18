import React, { useContext } from 'react';
import cookies from 'react-cookies';
import { UserContext } from '../../App';
import HomeAbout from './home-component/HomeAbout';
import HomeInitiatory from './home-component/HomeInitiatory';
import HomeStatistic from './home-component/HomeStatistic';
import Introduction from './home-component/Introduction';
import OrderNotYetAuctionedList from './../list-orders/list-orders-component/OrderNotYetAuctionedList.js';

export default function BodyHome() {
    const auth = useContext(UserContext);
    let user = auth.user;
    return (
        <>
            <Introduction />
            <HomeInitiatory />
            <HomeAbout />
            {
                user ? <HomeStatistic /> : <></>
            }
            {
                user ? <>
                    {
                        cookies.load("user").username === 'admin' ? <OrderNotYetAuctionedList /> : <></>
                    }
                </> : <></>
            }
        </>
    );
}