import React, { useState } from 'react';
import '../shipper.css';

export default function ShipperInfoForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [idCard, setIDCard] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        let item = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            gender: gender,
            idCard: idCard,
            address: address,
            email: email,
            phone: phone,
            avatar: avatar,
        }
        props.onSubmit(item);
    }

    return (
        <div className="create-post-right">
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>First name:</td>
                            <td>
                                <input type="text" placeholder="First name..." value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Last name:</td>
                            <td>
                                <input type="text" placeholder="Last name..." multiple value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Date of birth:</td>
                            <td>
                                <input type="date" placeholder="Date of birth..." value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <select className="sl-gender-shipper-form" value={gender} onChange={e => setGender(e.target.value)} required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ID card:</td>
                            <td>
                                <input type="text" placeholder="ID card..." value={idCard} onChange={e => setIDCard(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>
                                <input type="text" placeholder="Address..." value={address} onChange={e => setAddress(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type="email" placeholder="Email..." value={email} onChange={e => setEmail(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input type="text" placeholder="Phone..." value={phone} onChange={e => setPhone(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Avatar:</td>
                            <td>
                                <input type="file" value={avatar} onChange={e => setAvatar(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                        </tr><tr>
                            <td colSpan={2}>
                                <button className="btn-add-shipper" type="submit">ADD</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}