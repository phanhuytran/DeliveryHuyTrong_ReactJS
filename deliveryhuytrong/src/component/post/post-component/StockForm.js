import React, { useContext, useState } from 'react';
import cookies from 'react-cookies';
import { PhoneStockErrorContext } from './PostForm';
import '../post.css';

export default function StockForm(props) {
    const message = useContext(PhoneStockErrorContext);
    const [address, setAddress] = useState('');
    const [representative, setRepresentative] = useState('');
    const [phone, setPhone] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        let item = {
            customer: cookies.load("user").id,
            address: address,
            name_represent_man: representative,
            phone: phone,
        }
        props.onSubmit(item);
    }

    return (
        <form onSubmit={onSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" placeholder="Address..." value={address} onChange={e => setAddress(e.target.value)} required /></td>
                    </tr>
                    <tr>
                        <td>Representative:</td>
                        <td><input type="text" placeholder="Representative..." value={representative} onChange={e => setRepresentative(e.target.value)} required /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>
                            <input type="text" placeholder="Phone..." value={phone} onChange={e => setPhone(e.target.value)} required />
                            <p className="phone-stock-error">{message.messagePhoneStockError}</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}