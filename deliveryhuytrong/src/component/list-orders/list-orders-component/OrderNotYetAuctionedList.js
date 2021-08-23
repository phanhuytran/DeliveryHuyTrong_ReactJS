import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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

    const customer = customerFilter;
    const receivingAddress = receivingAddressFilter;
    const sendingAddress = sendingAddressFilter;
    const displayPostInfoForm = isDisplayPostInfoForm;
    const itemsOrigin = orderPostList;

    let orderPost = [], result, i = 0;
    let isDisplayClearCustomer = isDisplayClearCustomerFilter;
    let isDisplayClearReceivingAddress = isDisplayClearReceivingAddressFilter;
    let isDisplayClearSendingAddress = isDisplayClearSendingAddressFilter;

    const elementPostInfoForm = displayPostInfoForm
        ? <OrderPostInfoForm onSubmit={createPost} />
        : '';

    function createPost(data) {
        let orderPost = orderPostList;
        orderPost.push({
            id: uuidv4(),
            description: data.description,
            image: data.image,
            weight: data.weight,
            receivingAddress: data.receivingAddress,
            sendingAddress: data.sendingAddress,
            customer: "",
            createdDate: "",
            updatedDate: "",
            isWin: false,
            status: "NOTYETSHIPPED",
            isActive: true,
        });

        setIsDisplayPostInfoForm(false);
        setOrderPostList(orderPost);
    }
    
    function onTogglePostInfoForm() { setIsDisplayPostInfoForm(toggle => !toggle); }
    function onClearCustomerFilter() { setCustomerFilter(''); }
    function onClearReceivingAddressFilter() { setReceivingAddressFilter(''); }
    function onClearSendingAddressFilter() { setSendingAddressFilter(''); }

    if (customer.length > 0 || receivingAddress.length > 0 || sendingAddress.length > 0) {
        itemsOrigin.forEach((item) => {
            if (item.customer.toLowerCase().indexOf(customer) !== -1
                && item.receivingAddress.toLowerCase().indexOf(receivingAddress) !== -1
                && item.sendingAddress.toLowerCase().indexOf(sendingAddress) !== -1
                && item.isWin === false) {
                orderPost.push(item);
            }
        });
    } else {
        orderPost = itemsOrigin;
    }

    if (orderPost.length === 0) {
        result = <td colSpan={7} className="no-data-found">
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
                                        <input type="text" value={customer} onChange={e => setCustomerFilter(e.target.value)} />
                                        {isDisplayClearCustomer ? <button onClick={onClearCustomerFilter}>Clear</button> : <></>}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="text" value={receivingAddress} onChange={e => setReceivingAddressFilter(e.target.value)} />
                                        {isDisplayClearReceivingAddress ? <button onClick={onClearReceivingAddressFilter}>Clear</button> : <></>}
                                    </td>
                                    <td>
                                        <input type="text" value={sendingAddress} onChange={e => setSendingAddressFilter(e.target.value)} />
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