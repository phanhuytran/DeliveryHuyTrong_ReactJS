import React from 'react';
import '../post.css';

export default function ChangeShippingStatus(props) {
    return (
        <form className="edit-form"><br />
            <h1 style={{ margin: '5% 0 8% 0' }}>CHANGE SHIPPING STATUS</h1>
            <table className="table-change-shipping-status">
                <tbody>
                    <tr>
                        <td><input type="radio" name="radio-change-status" required /></td>
                        <td><span className="order-auction-status-not-yet-shipped">Not yet shipped</span></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="radio-change-status" required /></td>
                        <td><span className="order-auction-status-shipping">Shipping</span></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="radio-change-status" required /></td>
                        <td><span className="order-auction-status-shipped">Shipped</span></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type="submit">Change</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}