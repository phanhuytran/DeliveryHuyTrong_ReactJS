import React from 'react';
import orderAuctionedListData from './OrderAuctionedListData';
import "../list-orders.css";

class OrdertAuctionedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderAuctionedData: orderAuctionedListData,
            orderNameFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: '',
            isDisplayClearOrderNameFilter: false,
            isDisplayClearReceivingAddressFilter: false,
            isDisplayClearSendingAddressFilter: false
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

    onClearOrderNameFilter = () => {
        this.setState({
            orderNameFilter: ''
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

    render() {

        var { isDisplayClearOrderNameFilter } = this.state;
        var { isDisplayClearReceivingAddressFilter } = this.state;
        var { isDisplayClearSendingAddressFilter } = this.state;

        let itemsOrigin = this.state.orderAuctionedData;
        let orderAuctionedData = [];

        const orderNameFilter = this.state.orderNameFilter;
        const receivingAddressFilter = this.state.receivingAddressFilter;
        const sendingAddressFilter = this.state.sendingAddressFilter;

        if (orderNameFilter.length > 0 || receivingAddressFilter.length > 0 || sendingAddressFilter.length > 0) {
            itemsOrigin.forEach((item) => {
                if (item.description.toLowerCase().indexOf(orderNameFilter) !== -1
                    && item.receivingAddress.toLowerCase().indexOf(receivingAddressFilter) !== -1
                    && item.sendingAddress.toLowerCase().indexOf(sendingAddressFilter) !== -1) {
                    orderAuctionedData.push(item);
                }
            });
        } else {
            orderAuctionedData = itemsOrigin;
        }

        if (orderNameFilter.length > 0) {
            isDisplayClearOrderNameFilter = true;
        }

        if (receivingAddressFilter.length > 0) {
            isDisplayClearReceivingAddressFilter = true;
        }

        if (sendingAddressFilter.length > 0) {
            isDisplayClearSendingAddressFilter = true;
        }

        return (
            <section className="order-us-bottom-area">
                <div className="container">
                    <h2>List of orders have been auctioned</h2><br />
                    <div className="order-auctioned-filter">
                        <input
                            type="text"
                            placeholder="Search by order name..."
                            name="orderNameFilter"
                            value={this.state.orderNameFilter}
                            onChange={this.onSearch}
                        />
                        {
                            isDisplayClearOrderNameFilter ? <button onClick={this.onClearOrderNameFilter}>Clear</button> : <></>
                        }<br />
                        <input
                            className="ml-spf"
                            type="text"
                            placeholder="Search by receiving address..."
                            name="receivingAddressFilter"
                            value={this.state.receivingAddressFilter}
                            onChange={this.onSearch}
                        />
                        {
                            isDisplayClearReceivingAddressFilter ? <button onClick={this.onClearReceivingAddressFilter}>Clear</button> : <></>
                        }<br />
                        <input
                            className="ml-spf"
                            type="text"
                            placeholder="Search by send address..."
                            name="sendingAddressFilter"
                            value={this.state.sendingAddressFilter}
                            onChange={this.onSearch}
                        />
                        {
                            isDisplayClearSendingAddressFilter ? <button onClick={this.onClearSendingAddressFilter}>Clear</button> : <></>
                        }<br />
                    </div>
                    <div className="row scroll-order-list">
                        {
                            orderAuctionedData.map((order, index) => {
                                return <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4" key={index}>
                                    <div className="single-order-us-bottom">
                                        <h4>{order.description}</h4>
                                        <p>Receiving address:<span>{order.receivingAddress}</span></p>
                                        <p>Sending address:<span>{order.sendingAddress}</span></p>
                                        <p>Status:<span>{order.status}</span></p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default OrdertAuctionedList;