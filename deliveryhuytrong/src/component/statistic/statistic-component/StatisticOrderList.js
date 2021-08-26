import React, { useState } from 'react';
import '../statistic.css';
import orderPostListData from '../../list-orders/list-orders-component/OrderPostListData';

export default function StatisticOrderList() {
    const [orderPostList] = useState(orderPostListData);
    const [descriptionFilter, setDescriptionFilter] = useState('');
    const [createdDateFilter, setCreatedDateFilter] = useState('');
    const [customerFilter, setCustomerFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [isDisplayClearDescriptionFilter] = useState(false);
    const [isDisplayClearCreatedDateFilter] = useState(false);
    const [isDisplayClearCustomerFilter] = useState(false);
    const [isDisplayClearReceivingAddressFilter] = useState(false);
    const [isDisplayClearSendingAddressFilter] = useState(false);

    const description = descriptionFilter;
    const createdDate = createdDateFilter;
    const customer = customerFilter;
    const sendingAddress = sendingAddressFilter;
    const receivingAddress = receivingAddressFilter;
    const itemsOrigin = orderPostList;

    let orderPost = [], result, i = 0;
    let isDisplayClearDescription = isDisplayClearDescriptionFilter;
    let isDisplayClearCreatedDate = isDisplayClearCreatedDateFilter;
    let isDisplayClearCustomer = isDisplayClearCustomerFilter;
    let isDisplayClearSendingAddress = isDisplayClearSendingAddressFilter;
    let isDisplayClearReceivingAddress = isDisplayClearReceivingAddressFilter;

    function onClearDescriptionFilter() { setDescriptionFilter(''); }
    function onClearCreatedDateFilter() { setCreatedDateFilter(''); }
    function onClearCustomerFilter() { setCustomerFilter(''); }
    function onClearSendingAddressFilter() { setSendingAddressFilter(''); }
    function onClearReceivingAddressFilter() { setReceivingAddressFilter(''); }

    if (description.length > 0 || createdDate.length > 0 || customer.length > 0 || sendingAddress.length > 0 || receivingAddress.length > 0) {
        itemsOrigin.forEach((item) => {
            if (item.description.toLowerCase().indexOf(description) !== -1
                && item.createdDate.toLowerCase().indexOf(createdDate) !== -1
                && item.customer.toLowerCase().indexOf(customer) !== -1
                && item.sendingAddress.toLowerCase().indexOf(sendingAddress) !== -1
                && item.receivingAddress.toLowerCase().indexOf(receivingAddress) !== -1) {
                orderPost.push(item);
            }
        });
    } else {
        orderPost = itemsOrigin;
    }

    if (orderPost.length === 0) {
        result = <td colSpan={9} className="no-data-found">
            <h1>No order found</h1>
        </td>
    }

    if (description.length > 0) { isDisplayClearDescription = true; }
    if (createdDate.length > 0) { isDisplayClearCreatedDate = true; }
    if (customer.length > 0) { isDisplayClearCustomer = true; }
    if (sendingAddress.length > 0) { isDisplayClearSendingAddress = true; }
    if (receivingAddress.length > 0) { isDisplayClearReceivingAddress = true; }

    return (
        <div className="statistic-order">
            <h2>Order List</h2>
            <div className="table-list-area">
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Created date</th>
                            <th>Customer</th>
                            <th>Image</th>
                            <th>Weight (kg)</th>
                            <th>Sending address</th>
                            <th>Receiving address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="order-list-filter">
                            <td>Filter</td>
                            <td>
                                <input type="text" value={description} onChange={e => setDescriptionFilter(e.target.value)} />
                                {isDisplayClearDescription ? <button onClick={onClearDescriptionFilter}>Clear</button> : <></>}
                            </td>
                            <td>
                                <input type="date" value={createdDate} onChange={e => setCreatedDateFilter(e.target.value)} />
                                {isDisplayClearCreatedDate ? <button onClick={onClearCreatedDateFilter}>Clear</button> : <></>}
                            </td>
                            <td>
                                <input type="text" value={customer} onChange={e => setCustomerFilter(e.target.value)} />
                                {isDisplayClearCustomer ? <button onClick={onClearCustomerFilter}>Clear</button> : <></>}
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <input type="text" value={sendingAddress} onChange={e => setSendingAddressFilter(e.target.value)} />
                                {isDisplayClearSendingAddress ? <button onClick={onClearSendingAddressFilter}>Clear</button> : <></>}
                            </td>
                            <td>
                                <input type="text" value={receivingAddress} onChange={e => setReceivingAddressFilter(e.target.value)} />
                                {isDisplayClearReceivingAddress ? <button onClick={onClearReceivingAddressFilter}>Clear</button> : <></>}
                            </td>
                            <td></td>
                        </tr>
                        {
                            orderPost.map((order, index) => {
                                i++;
                                return <tr key={index}>
                                    <td>{i}</td>
                                    {/* <td><span className="see-another-page-2">Show description</span></td> */}
                                    <td>{order.description}</td>
                                    <td>{order.createdDate}</td>
                                    <td>{order.customer}</td>
                                    <td><img src={order.image[0]} alt="img" /></td>
                                    <td>{order.weight}</td>
                                    <td>{order.sendingAddress}</td>
                                    <td>{order.receivingAddress}</td>
                                    <td>
                                        {
                                            order.isWin === false ? <span className="status-not-yet-auctioned">Not yet auctioned</span> : '' ||
                                                order.status === 'SHIPPED' ? <span className={
                                                    order.status === 'SHIPPED' ? 'order-auction-status-shipped' : '' ||
                                                        order.status === 'SHIPPING' ? 'order-auction-status-shipping' : '' ||
                                                            order.status === 'NOTYETSHIPPED' ? 'order-auction-status-not-yet-shipped' : ''
                                                }>Shipped</span> : '' ||
                                                    order.status === 'SHIPPING' ? <span className={
                                                        order.status === 'SHIPPED' ? 'order-auction-status-shipped' : '' ||
                                                            order.status === 'SHIPPING' ? 'order-auction-status-shipping' : '' ||
                                                                order.status === 'NOTYETSHIPPED' ? 'order-auction-status-not-yet-shipped' : ''
                                                    }>Shipping</span> : '' ||
                                                        order.status === 'NOTYETSHIPPED' ? <span className={
                                                            order.status === 'SHIPPED' ? 'order-auction-status-shipped' : '' ||
                                                                order.status === 'SHIPPING' ? 'order-auction-status-shipping' : '' ||
                                                                    order.status === 'NOTYETSHIPPED' ? 'order-auction-status-not-yet-shipped' : ''
                                                        }>Not yet shipped</span> : ''
                                        }
                                    </td>
                                </tr>
                            })
                        }
                        <tr>{result}</tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}