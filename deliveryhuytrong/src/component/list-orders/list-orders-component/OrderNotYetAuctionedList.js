import React from 'react';
import { Link } from 'react-router-dom';
import OrderPostInfoForm from './OrderPostInfoForm';
import orderPostListData from './OrderPostListData';

class OrderNotYetAuctionedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderPostList: orderPostListData,
            customerFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: '',
            isDisplayClearCustomerFilter: false,
            isDisplayClearReceivingAddressFilter: false,
            isDisplayClearSendingAddressFilter: false,
            isDisplayPostInfoForm: false
        }
    }

    onSearch = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onClearCustomerFilter = () => {
        this.setState({
            customerFilter: ''
        })
    }

    onClearReceivingAddressFilter = () => {
        this.setState({
            receivingAddressFilter: ''
        })
    }

    onClearSendingAddressFilter = () => {
        this.setState({
            sendingAddressFilter: ''
        })
    }

    onTogglePostInfoForm = () => {
        this.setState({
            isDisplayPostInfoForm: !this.state.isDisplayPostInfoForm
        });
    }

    onSubmit = (data) => {
        let { orderPostList } = this.state;
        orderPostList.push({
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

        this.setState({
            isDisplayPostInfoForm: false,
            orderPostList: orderPostListData
        });
    }

    render() {

        let { isDisplayPostInfoForm } = this.state;
        let elementPostInfoForm = isDisplayPostInfoForm
            ? <OrderPostInfoForm onSubmit={this.onSubmit} />
            : '';

        let { isDisplayClearCustomerFilter } = this.state;
        let { isDisplayClearReceivingAddressFilter } = this.state
        let { isDisplayClearSendingAddressFilter } = this.state

        let itemsOrigin = this.state.orderPostList;
        let orderPostList = [];

        const customerFilter = this.state.customerFilter;
        const receivingAddressFilter = this.state.receivingAddressFilter;
        const sendingAddressFilter = this.state.sendingAddressFilter;

        if (customerFilter.length > 0 || receivingAddressFilter.length > 0 || sendingAddressFilter.length > 0) {
            itemsOrigin.forEach((item) => {
                if (item.customer.toLowerCase().indexOf(customerFilter) !== -1
                    && item.receivingAddress.toLowerCase().indexOf(receivingAddressFilter) !== -1
                    && item.sendingAddress.toLowerCase().indexOf(sendingAddressFilter) !== -1) {
                    orderPostList.push(item);
                }
            });
        } else {
            orderPostList = itemsOrigin;
        }

        if (customerFilter.length > 0) {
            isDisplayClearCustomerFilter = true;
        }

        if (receivingAddressFilter.length > 0) {
            isDisplayClearReceivingAddressFilter = true;
        }

        if (sendingAddressFilter.length > 0) {
            isDisplayClearSendingAddressFilter = true;
        }

        return (
            <div>
                <h2>List of orders waiting to be auctioned</h2>
                <div className="create-post">
                    <div className="create-post-left">
                        <div className="new-page-tab" onClick={this.onTogglePostInfoForm}>
                            {
                                !isDisplayPostInfoForm ? <span>CREATE A NEW POST</span> : <span>CLOSE</span>
                            }
                        </div>
                    </div>
                    {elementPostInfoForm}
                </div>
                <div className="table-order-list-area">
                    <table className="table-order-list">
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
                                    <input type="text" name="customerFilter" value={this.state.customerFilter} onChange={this.onSearch} />
                                    {isDisplayClearCustomerFilter ? <button onClick={this.onClearCustomerFilter}>Clear</button> : <></>}
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="text" name="receivingAddressFilter" value={this.state.receivingAddressFilter} onChange={this.onSearch} />
                                    {isDisplayClearReceivingAddressFilter ? <button onClick={this.onClearReceivingAddressFilter}>Clear</button> : <></>}
                                </td>
                                <td>
                                    <input type="text" name="sendingAddressFilter" value={this.state.sendingAddressFilter} onChange={this.onSearch} />
                                    {isDisplayClearSendingAddressFilter ? <button onClick={this.onClearSendingAddressFilter}>Clear</button> : <></>}
                                </td>
                                <td></td>
                            </tr>
                            {
                                orderPostList.map((order, index) => {
                                    if (order.isWin === false) {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OrderNotYetAuctionedList;