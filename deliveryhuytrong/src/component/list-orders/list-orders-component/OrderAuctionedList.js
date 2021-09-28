import React, { useEffect, useState } from 'react';
import * as _ from "lodash";
import Slider from "react-slick";
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import "../list-orders.css";

export default function OrdertAuctionedList() {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [orderList, setOrderList] = useState([]);
    const [customerFilter, setCustomerFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);

    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    const customer = customerFilter;
    const sendingAddress = sendingAddressFilter;
    const receivingAddress = receivingAddressFilter;
    const itemsOrigin = orderList;

    let orders = [], result;
    let isDisplayClear = isDisplayClearFilter;

    useEffect(() => {
        async function getOrderList() {
            let res = await AuthAPI.get(endpoints['orders']);
            setLoadingProgress(false);
            setOrderList(res.data);
        }
        getOrderList();
    }, [orderList]);

    function onClear() { setCustomerFilter(''); setSendingAddressFilter(''); setReceivingAddressFilter(''); }

    if (customer.length > 0 || sendingAddress.length > 0 || receivingAddress.length > 0) {
        isDisplayClear = true;
        itemsOrigin.forEach((item) => {
            if ((item.auction_win.post.customer.first_name + " " + item.auction_win.post.customer.last_name).toLowerCase().indexOf(customer) !== -1
                && item.auction_win.post.send_stock.address.toLowerCase().indexOf(sendingAddress) !== -1
                && item.auction_win.post.receive_stock.address.toLowerCase().indexOf(receivingAddress) !== -1) {
                orders.push(item);
            }
        });
    } else {
        orders = itemsOrigin;
    }

    if (orders.length === 0) {
        result = <div className="no-data-found" style={{ marginTop: '2%' }}>
            <h1>Order not found</h1>
        </div>
    }

    return (
        <section className="order-us-bottom-area">
            <div className="container">
                <h2>List of orders have been auctioned</h2><br />
                <div className="order-auctioned-filter">
                    <input type="text" placeholder="Search by customer..." value={customer} onChange={e => setCustomerFilter(e.target.value)} />
                    <input className="ml-spf" type="text" placeholder="Search by send address..." value={sendingAddress} onChange={e => setSendingAddressFilter(e.target.value)} />
                    <input className="ml-spf" type="text" placeholder="Search by receiving address..." value={receivingAddress} onChange={e => setReceivingAddressFilter(e.target.value)} />
                    {isDisplayClear ? <button className="btn-order-auctioned-list" onClick={onClear}>Clear</button> : <></>}
                </div>
                <div className="order-auctioned-list-scroll">
                    {result}
                    {
                        loadingProgress ? <LoadingProgress /> : <>
                            {
                                _.sortBy(orders).reverse().map((order, index) => {
                                    return <div key={index} className="order-auctioned-list">
                                        <div className="order-auctioned-list-left">
                                            <Slider className="order-auctioned-image" {...settingSlider}>
                                                {
                                                    order.auction_win.post.image_items.map((i, ix) => {
                                                        return <img key={ix} src={i.image} alt="img" />
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                        <div className="order-auctioned-list-right">
                                            <p>Customer:<span>{order.auction_win.post.customer.first_name} {order.auction_win.post.customer.last_name}</span></p>
                                            <p>Description:<span>{order.auction_win.post.description}</span></p>
                                            <p>Weight:<span>{order.auction_win.post.weight} kilograms</span></p>
                                            <p>Sending address:<span>{order.auction_win.post.send_stock.address}</span></p>
                                            <p>Sending address information:<span>{order.auction_win.post.send_stock.name_represent_man} - {order.auction_win.post.send_stock.phone}</span></p>
                                            <p>Receiving address:<span>{order.auction_win.post.receive_stock.address}</span></p>
                                            <p>Receiving address information:<span>{order.auction_win.post.receive_stock.name_represent_man} - {order.auction_win.post.receive_stock.phone}</span></p>
                                            <hr style={{ width: '50%', margin: '15px auto 10px auto' }} />
                                            <p style={{ margin: '8px 0' }}>Cost:<span style={{ fontSize: 18 }}>{currencyFormat((order.auction_win.cost).slice(0, -3))} VND</span></p>
                                            <p style={{ margin: '8px 0' }}>Status:
                                                <span className={
                                                    order.status === 'shipped' ? 'order-auction-status-shipped' : '' ||
                                                        order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                                            order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                                                }>
                                                    {
                                                        order.status === 'shipped' ? <span><i className="fas fa-exclamation-triangle"></i>Not yet shipped</span> : <></> ||
                                                            order.status === 'shipping' ? <span><i className="fas fa-times-circle"></i>Shipping</span> : <></> ||
                                                                order.status === 'shipped' ? <span><i className="fas fa-check-circle"></i>Shipped</span> : <></>
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}