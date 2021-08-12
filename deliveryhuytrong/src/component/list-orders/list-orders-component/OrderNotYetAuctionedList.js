import React from 'react';
import { Link } from 'react-router-dom';
import orderListNotYetAuctionedData from './OrderListNotYetAuctionedData';

class OrderNotYetAuctionedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisplayClearDescriptionFilter: false,
            isDisplayClearReceivingAddressFilter: false,
            isDisplayClearSendingAddressFilter: false,
            orderNotYetAuctionedData: orderListNotYetAuctionedData,
            descriptionFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: ''
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

    onClear = () => {
        this.setState({
            descriptionFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: ''
        })
    }

    render() {

        var { isDisplayClearDescriptionFilter } = this.state;
        var { isDisplayClearReceivingAddressFilter } = this.state
        var { isDisplayClearSendingAddressFilter } = this.state

        let itemsOrigin = this.state.orderNotYetAuctionedData;
        let orderNotYetAuctionedData = [];

        const descriptionFilter = this.state.descriptionFilter;
        const receivingAddressFilter = this.state.receivingAddressFilter;
        const sendingAddressFilter = this.state.sendingAddressFilter;

        if (descriptionFilter.length > 0) {
            isDisplayClearDescriptionFilter = true;
            itemsOrigin.forEach((item) => {
                if (item.description.toLowerCase().indexOf(descriptionFilter) !== -1) {
                    orderNotYetAuctionedData.push(item);
                }
            });
        } else {
            if (receivingAddressFilter.length > 0) {
                isDisplayClearReceivingAddressFilter = true;
                itemsOrigin.forEach((item) => {
                    if (item.receivingAddress.toLowerCase().indexOf(receivingAddressFilter) !== -1) {
                        orderNotYetAuctionedData.push(item);
                    }
                });
            } else {
                if (sendingAddressFilter.length > 0) {
                    isDisplayClearSendingAddressFilter = true;
                    itemsOrigin.forEach((item) => {
                        if (item.sendingAddress.toLowerCase().indexOf(sendingAddressFilter) !== -1) {
                            orderNotYetAuctionedData.push(item);
                        }
                    });
                } else {
                    orderNotYetAuctionedData = itemsOrigin;
                }
            }
        }

        return (
            <div>
                <div className="table-order-list-area">
                    <table className="table-order-list">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order description</th>
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
                                    <input
                                        type="text"
                                        name="descriptionFilter"
                                        value={this.state.descriptionFilter}
                                        onChange={this.onSearch}
                                    />
                                    {
                                        isDisplayClearDescriptionFilter ? <button onClick={this.onClear}>Clear</button> : <></>
                                    }
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        name="receivingAddressFilter"
                                        value={this.state.receivingAddressFilter}
                                        onChange={this.onSearch}
                                    />
                                    {
                                        isDisplayClearReceivingAddressFilter ? <button onClick={this.onClear}>Clear</button> : <></>
                                    }
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="sendingAddressFilter"
                                        value={this.state.sendingAddressFilter}
                                        onChange={this.onSearch}
                                    />
                                    {
                                        isDisplayClearSendingAddressFilter ? <button onClick={this.onClear}>Clear</button> : <></>
                                    }
                                </td>
                                <td></td>
                            </tr>
                            {
                                orderNotYetAuctionedData.map((order, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{order.description}</td>
                                        <td><img src={order.image} alt="img" /></td>
                                        <td>{order.weight}</td>
                                        <td>{order.receivingAddress}</td>
                                        <td>{order.sendingAddress}</td>
                                        <td><Link to={"order-auction/" + order.id}>Click to auction <span className="fas fa-info-circle" /></Link></td>
                                    </tr>
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