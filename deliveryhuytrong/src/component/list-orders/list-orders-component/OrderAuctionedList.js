import React from 'react';
import "../list-orders.css";
import orderPostListData from './OrderPostListData';
// import a from './../../API'

class OrdertAuctionedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderPostList: orderPostListData,
            customerFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: '',
            isDisplayClear: false
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
            customerFilter: '',
            receivingAddressFilter: '',
            sendingAddressFilter: ''
        })
    }

    render() {

        var { isDisplayClear } = this.state;

        let itemsOrigin = this.state.orderPostList;
        let orderPostList = [];

        const customerFilter = this.state.customerFilter;
        const receivingAddressFilter = this.state.receivingAddressFilter;
        const sendingAddressFilter = this.state.sendingAddressFilter;

        if (customerFilter.length > 0 || receivingAddressFilter.length > 0 || sendingAddressFilter.length > 0) {
            isDisplayClear = true
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

        return (
            <section className="order-us-bottom-area">
                <div className="container">
                    <h2>List of orders have been auctioned</h2><br />
                    <div className="order-auctioned-filter">
                        <input type="text" placeholder="Search by customer..." name="customerFilter" value={this.state.customerFilter} onChange={this.onSearch} />
                        <input className="ml-spf" type="text" placeholder="Search by receiving address..." name="receivingAddressFilter" value={this.state.receivingAddressFilter} onChange={this.onSearch} />
                        <input className="ml-spf" type="text" placeholder="Search by send address..." name="sendingAddressFilter" value={this.state.sendingAddressFilter} onChange={this.onSearch} />
                        {isDisplayClear ? <button onClick={this.onClear}>Clear</button> : <></>}
                    </div>
                    <div className="row scroll-order-list">
                        {
                            orderPostList.map((order, index) => {
                                if (order.isWin === true) {
                                    return <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4" key={index}>
                                        <div className="single-order-us-bottom">
                                            <h4>{order.customer}</h4>
                                            <p>Order description:</p>
                                            <p className="title-info-order-auction">{order.description}</p>
                                            <p>Receiving address:<span>{order.receivingAddress}</span></p>
                                            <p>Sending address:<span>{order.sendingAddress}</span></p>
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
                    </div>
                </div>
            </section>
        );
    }
}

export default OrdertAuctionedList;