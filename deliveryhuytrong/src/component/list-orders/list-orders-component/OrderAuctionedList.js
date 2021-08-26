import React, { useState } from 'react';
import "../list-orders.css";
import orderPostListData from './OrderPostListData';

export default function OrdertAuctionedList() {
    const [orderPostList] = useState(orderPostListData);
    const [customerFilter, setCustomerFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);

    const customer = customerFilter;
    const sendingAddress = sendingAddressFilter;
    const receivingAddress = receivingAddressFilter;
    const itemsOrigin = orderPostList;

    let orderPost = [], result;
    let isDisplayClear = isDisplayClearFilter;

    function onClear() { setCustomerFilter(''); setSendingAddressFilter(''); setReceivingAddressFilter(''); }

    if (customer.length > 0 || sendingAddress.length > 0 || receivingAddress.length > 0) {
        isDisplayClear = true;
        itemsOrigin.forEach((item) => {
            if (item.customer.toLowerCase().indexOf(customer) !== -1
                && item.sendingAddress.toLowerCase().indexOf(sendingAddress) !== -1
                && item.receivingAddress.toLowerCase().indexOf(receivingAddress) !== -1
                && item.isWin === true) {
                orderPost.push(item);
            }
        });
    } else {
        orderPost = itemsOrigin;
    }

    if (orderPost.length === 0) {
        result = <div className="no-data-found">
            <h1>No order found</h1>
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
                        orderPost.map((order, index) => {
                            if (order.isWin === true) {
                                return <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4" key={index}>
                                    <div className="single-order-us-bottom">
                                        <h4>{order.customer}</h4>
                                        <p>Order description:</p>
                                        <p className="title-info-order-auction">{order.description}</p>
                                        <p>Sending address:<span>{order.sendingAddress}</span></p>
                                        <p>Receiving address:<span>{order.receivingAddress}</span></p>
                                        <p>Status:
                                            <span className={
                                                order.status === 'SHIPPED' ? 'order-auction-status-shipped' : '' ||
                                                    order.status === 'SHIPPING' ? 'order-auction-status-shipping' : '' ||
                                                        order.status === 'NOTYETSHIPPED' ? 'order-auction-status-not-yet-shipped' : ''
                                            }>
                                                {
                                                    order.status === 'SHIPPED' ? 'Shipped' : '' ||
                                                        order.status === 'SHIPPING' ? 'Shipping' : '' ||
                                                            order.status === 'NOTYETSHIPPED' ? 'Not yet shipped' : ''
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            }
                            return '';
                        })
                    }
                    {result}
                </div>
            </div>
        </section>
    );
}