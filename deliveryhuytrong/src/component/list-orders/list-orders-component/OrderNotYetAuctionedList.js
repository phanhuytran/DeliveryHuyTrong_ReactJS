import React from 'react';
import { Link } from 'react-router-dom';
import orderListNotYetAuctionedData from './OrderListNotYetAuctionedData.json';

class OrderNotYetAuctionedList extends React.Component {
    render() {
        return (
            <div>
                <div className="table-order-list-area">
                    <table className="table-order-list">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Order description</th>
                                <th>Image</th>
                                <th>Weight (kg)</th>
                                <th>Receiving address</th>
                                <th>Sending address</th>
                                <th>Detailed information</th>
                            </tr>
                        </thead>
                        {
                            orderListNotYetAuctionedData.map((order, index) => {
                                return <tbody key={index}>
                                    <tr>
                                        <td>{order.id}</td>
                                        <td>{order.description}</td>
                                        <td><img src={order.image} alt="img" /></td>
                                        <td>{order.weight} kilograms</td>
                                        <td>{order.receivingAddress}</td>
                                        <td>{order.sendingAddress}</td>
                                        <td><Link to={"order-auction/" + order.id}>Click to auction <span className="fas fa-info-circle" /></Link></td>
                                    </tr>
                                </tbody>
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default OrderNotYetAuctionedList;