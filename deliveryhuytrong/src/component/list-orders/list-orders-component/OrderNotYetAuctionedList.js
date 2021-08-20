import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderPostInfoForm from './OrderPostInfoForm';
import orderPostListData from './OrderPostListData';

export default function OrderNotYetAuctionedList() {
    const [orderPostList, setOrderPostList] = useState(orderPostListData);
    const [customerFilter, setCustomerFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [isDisplayClearCustomerFilter] = useState(false);
    const [isDisplayClearReceivingAddressFilter] = useState(false);
    const [isDisplayClearSendingAddressFilter] = useState(false);
    const [isDisplayPostInfoForm, setIsDisplayPostInfoForm] = useState(false);

    const itemsOrigin = orderPostList;
    const customer = customerFilter;
    const receivingAddress = receivingAddressFilter;
    const sendingAddress = sendingAddressFilter;
    const displayPostInfoForm = isDisplayPostInfoForm;

    let orderPost = [], result, i = 0;
    let isDisplayClearCustomer = isDisplayClearCustomerFilter;
    let isDisplayClearReceivingAddress = isDisplayClearReceivingAddressFilter;
    let isDisplayClearSendingAddress = isDisplayClearSendingAddressFilter;

    const elementPostInfoForm = displayPostInfoForm
        ? <OrderPostInfoForm onSubmit={onSubmit} />
        : '';

    function onClearCustomerFilter() { setCustomerFilter(''); }
    function onClearReceivingAddressFilter() { setReceivingAddressFilter(''); }
    function onClearSendingAddressFilter() { setSendingAddressFilter(''); }
    function onTogglePostInfoForm() { setIsDisplayPostInfoForm(toggle => !toggle); }

    function onSubmit(data) {
        let orderPost = orderPostList;
        orderPost.push({
            id: 10,
            description: data.description,
            image: data.image,
            weight: data.weight,
            receivingAddress: data.receivingAddress,
            sendingAddress: data.sendingAddress,
            customer: "",
            createdDate: "",
            updatedDate: "",
            isWin: false,
            isActive: true,
        });

        setIsDisplayPostInfoForm(false);
        setOrderPostList(orderPost);
    }

    if (customerFilter.length > 0 || receivingAddressFilter.length > 0 || sendingAddressFilter.length > 0) {
        itemsOrigin.forEach((item) => {
            if (item.customer.toLowerCase().indexOf(customerFilter) !== -1
                && item.receivingAddress.toLowerCase().indexOf(receivingAddressFilter) !== -1
                && item.sendingAddress.toLowerCase().indexOf(sendingAddressFilter) !== -1
                && item.isWin === false) {
                orderPost.push(item);
            }
        });
    } else {
        orderPost = itemsOrigin;
    }

    if (orderPost.length === 0) {
        result = <td colSpan={7} className="no-shipper-found">
            <h1>No order found</h1>
        </td>
    }

    if (customer.length > 0) { isDisplayClearCustomer = true; }
    if (receivingAddress.length > 0) { isDisplayClearReceivingAddress = true; }
    if (sendingAddress.length > 0) { isDisplayClearSendingAddress = true; }

    return (
        <section className="order-bottom-area">
            <div className="container">
                <div className="row">
                    <h2>List of orders waiting to be auctioned</h2>
                    <div className="create-post">
                        <div className="create-post-left">
                            <div className="new-page-tab" onClick={onTogglePostInfoForm}>
                                {
                                    !displayPostInfoForm ? <span>CREATE A NEW POST</span> : <span>CLOSE</span>
                                }
                            </div>
                        </div>
                        {elementPostInfoForm}
                    </div>
                    <div className="table-list-area">
                        <table className="table-list">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Image</th>
                                    <th>Weight (kg)</th>
                                    <th>Receiving address</th>
                                    <th>Sending address</th>
                                    <th>Detailed information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="order-list-filter">
                                    <td>Filter</td>
                                    <td>
                                        <input type="text" name="customerFilter" value={customerFilter} onChange={e => setCustomerFilter(e.target.value)} />
                                        {isDisplayClearCustomer ? <button onClick={onClearCustomerFilter}>Clear</button> : <></>}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="text" name="receivingAddressFilter" value={receivingAddressFilter} onChange={e => setReceivingAddressFilter(e.target.value)} />
                                        {isDisplayClearReceivingAddress ? <button onClick={onClearReceivingAddressFilter}>Clear</button> : <></>}
                                    </td>
                                    <td>
                                        <input type="text" name="sendingAddressFilter" value={sendingAddressFilter} onChange={e => setSendingAddressFilter(e.target.value)} />
                                        {isDisplayClearSendingAddress ? <button onClick={onClearSendingAddressFilter}>Clear</button> : <></>}
                                    </td>
                                    <td></td>
                                </tr>
                                {
                                    orderPost.map((order, index) => {
                                        if (order.isWin === false) {
                                            i++;
                                            return <tr key={index}>
                                                <td>{i}</td>
                                                <td>{order.customer}</td>
                                                <td><img src={order.image[0]} alt="img" /></td>
                                                <td>{order.weight}</td>
                                                <td>{order.receivingAddress}</td>
                                                <td>{order.sendingAddress}</td>
                                                <td><Link to={"order-auction/" + order.id} className="see-another-page-2">Click to auction <span className="fas fa-info-circle" /></Link></td>
                                            </tr>
                                        }
                                        return <React.Fragment key={index}></React.Fragment>;
                                    })
                                }
                                <tr>{result}</tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}