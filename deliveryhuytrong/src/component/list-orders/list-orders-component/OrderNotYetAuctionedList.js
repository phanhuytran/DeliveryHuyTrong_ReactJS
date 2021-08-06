import React from 'react';
import { Link } from 'react-router-dom';

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
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dĩa bánh cuốn nóng hổi</td>
                                <td>...</td>
                                <td>0.5</td>
                                <td>TPHCM</td>
                                <td>Long Xuyên</td>
                                <td><Link to="/order-auction">Click to auction <span className="fas fa-info-circle" /></Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tô bò kho + 1 ổ bánh mì</td>
                                <td>...</td>
                                <td>1.0</td>
                                <td>Thừa Thiên Huế</td>
                                <td>Cà Mau</td>
                                <td><Link to="/order-auction">Click to auction <span className="fas fa-info-circle" /></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OrderNotYetAuctionedList;