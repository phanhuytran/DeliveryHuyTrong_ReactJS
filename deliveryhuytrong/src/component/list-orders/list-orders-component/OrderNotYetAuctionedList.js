import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import * as _ from "lodash";
import GavelIcon from '@mui/icons-material/Gavel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';

export default function OrderNotYetAuctionedList() {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [orderPostList, setOrderPostList] = useState([]);
    const [customerFilter, setCustomerFilter] = useState('');
    const [sendingAddressFilter, setSendingAddressFilter] = useState('');
    const [receivingAddressFilter, setReceivingAddressFilter] = useState('');
    const [isDisplayClearCustomerFilter] = useState(false);
    const [isDisplayClearReceivingAddressFilter] = useState(false);
    const [isDisplayClearSendingAddressFilter] = useState(false);

    const customer = customerFilter;
    const sendingAddress = sendingAddressFilter;
    const receivingAddress = receivingAddressFilter;
    const itemsOrigin = orderPostList;

    let orderPost = [], result, i = 0;
    let isDisplayClearCustomer = isDisplayClearCustomerFilter;
    let isDisplayClearSendingAddress = isDisplayClearSendingAddressFilter;
    let isDisplayClearReceivingAddress = isDisplayClearReceivingAddressFilter;

    useEffect(() => {
        async function getOrderPostList() {
            let res = await AuthAPI.get(endpoints['posts']);
            setLoadingProgress(false);
            setOrderPostList(res.data.results);
        }
        getOrderPostList();
    }, []);

    function onClearCustomerFilter() { setCustomerFilter(''); }
    function onClearSendingAddressFilter() { setSendingAddressFilter(''); }
    function onClearReceivingAddressFilter() { setReceivingAddressFilter(''); }

    if (customer.length > 0 || sendingAddress.length > 0 || receivingAddress.length > 0) {
        itemsOrigin.forEach((item) => {
            if ((item.customer.first_name + " " + item.customer.last_name).toLowerCase().indexOf(customer) !== -1
                && item.send_stock.address.toLowerCase().indexOf(sendingAddress) !== -1
                && item.receive_stock.address.toLowerCase().indexOf(receivingAddress) !== -1) {
                orderPost.push(item);
            }
        });
    } else {
        orderPost = itemsOrigin;
    }

    if (orderPost.length === 0) {
        result = <td colSpan={7} className="no-data-found">
            <h1>Order not found</h1>
        </td>
    }

    if (customer.length > 0) { isDisplayClearCustomer = true; }
    if (sendingAddress.length > 0) { isDisplayClearSendingAddress = true; }
    if (receivingAddress.length > 0) { isDisplayClearReceivingAddress = true; }

    return (
        <section className="order-bottom-area">
            <div className="container">
                <div className="row">
                    <h2>List of orders waiting to be auctioned</h2>
                    <div className="table-list-area">
                        <table className="table-list">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Image</th>
                                    <th>Weight (kg)</th>
                                    <th>Sending address</th>
                                    <th>Receiving address</th>
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
                                        <td colSpan={7} style={{ padding: '1% 0 2% 0' }}>
                                            <LoadingProgress />
                                        </td>
                                    </tr> : <>
                                        {
                                            _.sortBy(orderPost).reverse().map((order, index) => {
                                                if (order.is_finish === false) {
                                                    i++;
                                                    return <tr key={index}>
                                                        <td>{i}</td>
                                                        <td>{order.customer.first_name} {order.customer.last_name}</td>
                                                        <td><img src={order.image_items[0].image} alt="img" /></td>
                                                        <td>{order.weight}</td>
                                                        <td>{order.send_stock.address}</td>
                                                        <td>{order.receive_stock.address}</td>
                                                        {
                                                            cookies.load("user").username === 'admin'
                                                                ? <td><Link to={"order/" + order.id + "/auction"} className="see-another-page-2">Order details <VisibilityIcon /></Link></td>
                                                                : <td><Link to={"order/" + order.id + "/auction"} className="see-another-page-2">Click to auction <GavelIcon /></Link></td>
                                                        }
                                                    </tr>
                                                }
                                                return <React.Fragment key={index}></React.Fragment>
                                            })
                                        }
                                    </>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}