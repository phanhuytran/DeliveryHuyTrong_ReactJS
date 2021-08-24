import React, { useState } from 'react';
import '../shipper.css';
import { Link, useHistory } from 'react-router-dom';
import { remove } from 'lodash';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import ShipperTitle from './ShipperTitle';
import shipperListData from './ShipperListData';
import ShipperInfoForm from './ShipperInfoForm';

export default function ShipperList() {
    const [shipperList, setShipperList] = useState(shipperListData);
    const [fullNameFilter, setFullNameFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);
    const [isDisplayShipperInfoForm, setIsDisplayShipperInfoForm] = useState(false);
    // const [itemSelected, setItemSelected] = useState(null);

    const history = useHistory();
    const fullName = fullNameFilter;
    const phone = phoneFilter;
    const displayShipperInfoForm = isDisplayShipperInfoForm;
    const itemsOrigin = shipperList;

    let shipper = [], result, i = 0;
    let isDisplayClear = isDisplayClearFilter;

    const elementShipperInfoForm = displayShipperInfoForm
        // ? <ShipperInfoForm itemSelected={itemSelected} onSubmit={addShipper} />
        ? <ShipperInfoForm onSubmit={addShipper} />
        : '';

    function addShipper(data) {
        let shipper = shipperList;
        shipper.push({
            id: uuidv4(),
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            idCard: data.idCard,
            address: data.address,
            email: data.email,
            phone: data.phone,
            avatar: data.avatar,
            isActive: true,
        });

        setIsDisplayShipperInfoForm(false);
        setShipperList(shipper);
    }

    function removeShipper(id) {
        let shipper = shipperList;
        swal({
            title: "Do you want to remove this shipper?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willRemove) => {
            if (willRemove) {
                remove(shipper, item => {
                    return item.id === id;
                });
                setShipperList(shipper);
                swal("This shipper was removed successfully!", { icon: "success" });
                history.push("/shipper");
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

    function editShipper(item) {
        setIsDisplayShipperInfoForm(true);
        // setItemSelected(item);
    }

    function onToggleShipperInfoForm() { setIsDisplayShipperInfoForm(toggle => !toggle); }
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
        result = <td colSpan={12} className="no-data-found">
            <h1>No shipper found</h1>
        </td>
    }

    return (
        <div>
            <section className="about_top">
                <div className="container">
                    <ShipperTitle />
                    <div className="create-post">
                        <div className="create-post-left">
                            <div className="new-shipper-tab" onClick={onToggleShipperInfoForm}>
                                {
                                    !displayShipperInfoForm ? <span>ADD A NEW SHIPPER</span> : <span>CLOSE</span>
                                }
                            </div>
                        </div>
                        {elementShipperInfoForm}
                    </div>
                    <div className="shipper-list-filter">
                        <input type="text" placeholder="Search by full name..." value={fullName} onChange={e => setFullNameFilter(e.target.value)} />
                        <input className="ml-spf" type="text" placeholder="Search by phone number..." value={phone} onChange={e => setPhoneFilter(e.target.value)} />
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
                                    <th>Action</th>
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
                                            <td>
                                                <span className="see-another-page-1" onClick={() => editShipper(shipper)}>Edit</span>
                                                {/* <RemoveShipper props={shipper.id} /> */}
                                                <span className="see-another-page-2" onClick={() => removeShipper(shipper.id)}>Remove</span>
                                            </td>
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