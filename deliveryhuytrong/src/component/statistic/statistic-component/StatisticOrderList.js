import React, { useEffect, useState } from 'react';
import * as _ from "lodash";
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import '../statistic.css';

export default function StatisticOrderList() {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [orderList, setOrderList] = useState([]);
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
    const itemsOrigin = orderList;

    let order = [], result, i = 0;
    let isDisplayClearDescription = isDisplayClearDescriptionFilter;
    let isDisplayClearCreatedDate = isDisplayClearCreatedDateFilter;
    let isDisplayClearCustomer = isDisplayClearCustomerFilter;
    let isDisplayClearSendingAddress = isDisplayClearSendingAddressFilter;
    let isDisplayClearReceivingAddress = isDisplayClearReceivingAddressFilter;

    useEffect(() => {
        async function getOrderList() {
            let res = await AuthAPI.get(endpoints['posts']);
            setLoadingProgress(false);
            setOrderList(res.data.results);
        }
        getOrderList();
    }, [orderList]);

    function onClearDescriptionFilter() { setDescriptionFilter(''); }
    function onClearCreatedDateFilter() { setCreatedDateFilter(''); }
    function onClearCustomerFilter() { setCustomerFilter(''); }
    function onClearSendingAddressFilter() { setSendingAddressFilter(''); }
    function onClearReceivingAddressFilter() { setReceivingAddressFilter(''); }

    if (description.length > 0 || createdDate.length > 0 || customer.length > 0 || sendingAddress.length > 0 || receivingAddress.length > 0) {
        itemsOrigin.forEach((item) => {
            if (item.description.toLowerCase().indexOf(description) !== -1
                && item.created_date.toLowerCase().indexOf(createdDate) !== -1
                && (item.customer.first_name + " " + item.customer.last_name).toLowerCase().indexOf(customer) !== -1
                && item.send_stock.address.toLowerCase().indexOf(sendingAddress) !== -1
                && item.receive_stock.address.toLowerCase().indexOf(receivingAddress) !== -1) {
                order.push(item);
            }
        });
    } else {
        order = itemsOrigin;
    }

    if (order.length === 0) {
        result = <td colSpan={9} className="no-data-found">
            <h1>Order not found</h1>
        </td>
    }

    if (description.length > 0) { isDisplayClearDescription = true; }
    if (createdDate.length > 0) { isDisplayClearCreatedDate = true; }
    if (customer.length > 0) { isDisplayClearCustomer = true; }
    if (sendingAddress.length > 0) { isDisplayClearSendingAddress = true; }
    if (receivingAddress.length > 0) { isDisplayClearReceivingAddress = true; }

    return (
        <div className="statistic-order">
            <h2>List of Orders</h2>
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
                        <tr>{result}</tr>
                        {
                            loadingProgress ? <tr>
                                <td colSpan={9} style={{ padding: '1% 0 2% 0' }}>
                                    <LoadingProgress />
                                </td>
                            </tr> : <>
                                {
                                    _.sortBy(order).reverse().map((order, index) => {
                                        i++;
                                        return <tr key={index}>
                                            <td>{i}</td>
                                            <td>{order.description}</td>
                                            <td>{(order.created_date).slice(0, 10)}</td>
                                            <td>{order.customer.first_name} {order.customer.last_name}</td>
                                            <td><img src={order.image_items[0].image} alt="img" /></td>
                                            <td>{order.weight}</td>
                                            <td>{order.send_stock.address}</td>
                                            <td>{order.receive_stock.address}</td>
                                            <td></td>
                                        </tr>
                                    })
                                }
                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}