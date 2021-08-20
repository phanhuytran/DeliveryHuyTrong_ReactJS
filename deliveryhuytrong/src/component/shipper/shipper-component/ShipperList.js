import React, { useState } from 'react';
import '../shipper.css';
import { Link } from 'react-router-dom';
import ShipperTitle from './ShipperTitle';
import shipperListData from './ShipperListData';

export default function ShipperList() {
    const [shiperList] = useState(shipperListData);
    const [fullNameFilter, setFullNameFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);

    const fullName = fullNameFilter;
    const phone = phoneFilter;
    const itemsOrigin = shiperList;

    let shipper = [], result, i = 0;
    let isDisplayClear = isDisplayClearFilter;

    function onClear() { setFullNameFilter(''); setPhoneFilter(''); }

    if (fullName.length > 0 || phone.length > 0) {
        isDisplayClear = true;
        itemsOrigin.forEach((item) => {
            if (((item.firstName.toLowerCase() + " " + item.lastName.toLowerCase()).indexOf(fullName) !== -1
                && item.phone.indexOf(phone) !== -1)) {
                shipper.push(item);
            }
        });
    } else {
        shipper = itemsOrigin;
    }

    if (shipper.length === 0) {
        result = <td colSpan={9} className="no-shipper-found">
            <h1>No shipper found</h1>
        </td>
    }

    return (
        <div>
            <section className="about_top">
                <div className="container">
                    <ShipperTitle />
                    <div className="shipper-list-filter">
                        <input type="text" placeholder="Search by full name..." name="fullNameFilter" value={fullNameFilter} onChange={e => setFullNameFilter(e.target.value)} />
                        <input className="ml-spf" type="text" placeholder="Search by phone number..." name="phoneFilter" value={phoneFilter} onChange={e => setPhoneFilter(e.target.value)} />
                        {isDisplayClear ? <button onClick={onClear}>Clear</button> : <></>}
                    </div>
                    <div className="table-list-area shipper">
                        <table className="table-list">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full name</th>
                                    <th>Avatar</th>
                                    <th>Date of Birth</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Detailed information</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    shipper.map((shipper, index) => {
                                        i++;
                                        return <tr key={index}>
                                            <td>{i}</td>
                                            <td>{shipper.firstName} {shipper.lastName}</td>
                                            <td><img src={shipper.avatar} alt="avatar" /></td>
                                            <td>{shipper.dateOfBirth}</td>
                                            <td>{shipper.gender}</td>
                                            <td>{shipper.address}</td>
                                            <td>{shipper.email}</td>
                                            <td>{shipper.phone}</td>
                                            <td><Link to={"shipper-detail/" + shipper.id} className="see-another-page-2">Click to rate <span className="fas fa-info-circle" /></Link></td>
                                        </tr>
                                    })
                                }
                                <tr>{result}</tr>
                            </tbody>
                        </table>
                    </div>
                    <Link to="/list-orders" className="see-another-page">SEE LIST OF ORDERS</Link>
                </div>
            </section>
        </div>
    );
}