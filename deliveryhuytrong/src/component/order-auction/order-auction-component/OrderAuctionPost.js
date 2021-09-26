import React, { useEffect, useState } from 'react';
import "../order-auction.css";
import cookies from 'react-cookies';
import moment from 'moment';
import { Link } from 'react-router-dom';
import OrderInformation from './OrderInformation';
import OrderAuctionComment from './OrderAuctionComment';
import { AuthAPI, endpoints } from '../../API';

export default function OrderAuctionPost(props) {
    const [orderPostList, setOrderPostList] = useState([]);
    const orderID = parseInt(props.props.match.params.id, 10);

    useEffect(() => {
        const getOrderPostList = async () => {
            let res = await AuthAPI.get(endpoints['posts']);
            setOrderPostList(res.data.results);
        }
        getOrderPostList();
    }, [orderPostList]);

    return (
        <section className="order-bottom-area">
            <div className="container">
                <div className="row" style={{ marginBottom: '5%' }}>
                    <div className="auction-area">
                        {
                            orderPostList.map((post, index) => {
                                if (post.id === orderID) {
                                    return <React.Fragment key={index}>
                                        <div className="auction-customer-info">
                                            <div className="auction-customer-info-left">
                                                <img src={post.customer.avatar} alt="img" />
                                            </div>
                                            <div className="auction-customer-info-right">
                                                <p>
                                                    <span style={{ fontSize: 16 }}>{post.customer.username}</span><br />
                                                    <span>{moment(post.created_date, "YYYYMMDD").fromNow()}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <OrderInformation post={post} />
                                        {
                                            cookies.load("user").groups[0] === 2 ? <OrderAuctionComment post={post} /> : <></>
                                        }
                                    </React.Fragment>
                                }
                                return '';
                            })
                        }
                    </div>
                </div>
                <Link to="/list-orders" className="see-another-page">SEE LIST OF ORDERS</Link>
            </div>
        </section>
    );
}