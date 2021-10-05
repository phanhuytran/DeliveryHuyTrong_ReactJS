import React, { useState } from 'react';
import '../post.css';

export default function ChangeShippingStatus(props) {
    const [changeShippingStatus, setChangeShippingStatus] = useState(0);
    const confirmChangeShippingStatus = (e) => {
        e.preventDefault();
        // let order = orderList;
        let formData = new FormData();
        formData.append('status', changeShippingStatus);
        // .auction_win.id
    }
    return (
        <form className="edit-form" onSubmit={confirmChangeShippingStatus}><br />
            <h1 style={{ margin: '5% 0 8% 0' }}>CHANGE SHIPPING STATUS</h1>
            <table className="table-change-shipping-status">
                <tbody>
                    <tr>
                        <td><input type="radio" name="radio-change-status" value={0} onChange={e => setChangeShippingStatus(e.target.value)} required /></td>
                        <td><span className="order-auction-status-not-yet-shipped"><i className="fas fa-times-circle"></i>Not yet shipped</span></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="radio-change-status" value={1} onChange={e => setChangeShippingStatus(e.target.value)} required /></td>
                        <td><span className="order-auction-status-shipping"><i className="fas fa-exclamation-triangle"></i>Shipping</span></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="radio-change-status" value={2} onChange={e => setChangeShippingStatus(e.target.value)} required /></td>
                        <td><span className="order-auction-status-shipped"><i className="fas fa-check-circle"></i>Shipped</span></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type="submit">Change</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}