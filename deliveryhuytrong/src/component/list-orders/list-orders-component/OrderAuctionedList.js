import React, { useEffect, useState } from 'react';
import "../list-orders.css";
import * as _ from "lodash";
import { AuthAPI, endpoints } from '../../API';

export default function OrdertAuctionedList() {
    const [orderList, setOrderList] = useState([]);
    const [customerFilter, setCustomerFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);

    const customer = customerFilter;
    const sendingAddress = sendingAddressFilter;
    const receivingAddress = receivingAddressFilter;
    const itemsOrigin = orderList;

    let orders = [], result;
    let isDisplayClear = isDisplayClearFilter;

    useEffect(() => {
        async function getOrderList() {
            let res = await AuthAPI.get(endpoints['orders']);
            setOrderList(res.data);
        }
        getOrderList();
        console.log(orderList)
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
        result = <div className="no-data-found">
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
                    {isDisplayClear ? <button onClick={onClear}>Clear</button> : <></>}
                </div>
                <div className="row scroll-order-list">
                    {
                        _.sortBy(orders).reverse().map((order, index) => {
                            return <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4" key={index}>
                                <div className="single-order-us-bottom">
                                    <h4>{order.auction_win.post.customer.first_name} {order.auction_win.post.customer.last_name}</h4>
                                    <p>Order description:</p>
                                    <p className="title-info-order-auction">{order.auction_win.post.description}</p>
                                    <div style={{ height: '72px' }}>
                                        <p>Sending address:<span>{order.auction_win.post.send_stock.address}</span></p>
                                        <p>Receiving address:<span>{order.auction_win.post.receive_stock.address}</span></p>
                                    </div>
                                    <p style={{ marginTop: '15px' }}>Status:
                                        <span className={
                                            order.status === 'shipper' ? 'order-auction-status-shipped' : '' ||
                                                order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                                    order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                                        }>
                                            {
                                                order.status === 'shipper' ? 'Shipped' : '' ||
                                                    order.status === 'shipping' ? 'Shipping' : '' ||
                                                        order.status === 'not yet shipped' ? 'Not yet shipped' : ''
                                            }
                                        </span>
                                    </p>
                                </div>
                            </div>
                        })
                    }
                    {result}
                </div>
            </div>
        </section>
    );
}