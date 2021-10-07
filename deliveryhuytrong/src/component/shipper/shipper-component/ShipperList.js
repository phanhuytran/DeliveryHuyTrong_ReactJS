import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import ShipperTitle from './ShipperTitle';
// import ShipperInfoForm from './ShipperInfoForm';
import '../shipper.css';

export default function ShipperList() {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [shipperList, setShipperList] = useState([]);
    const [fullNameFilter, setFullNameFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [isDisplayClearFilter] = useState(false);
    // const [isDisplayShipperInfoForm, setIsDisplayShipperInfoForm] = useState(false);

    const fullName = fullNameFilter;
    const phone = phoneFilter;
    // const displayShipperInfoForm = isDisplayShipperInfoForm;
    const itemsOrigin = shipperList;

    useEffect(() => {
        async function getShipperList() {
            let res = await AuthAPI.get(endpoints['shippers']);
            setLoadingProgress(false);
            setShipperList(res.data.results);
        }
        getShipperList();
    }, [shipperList]);

    let shipper = [], result, i = 0;
    let isDisplayClear = isDisplayClearFilter;

    // const elementShipperInfoForm = displayShipperInfoForm
    //     ? <ShipperInfoForm onSubmit={createShipper} />
    //     : '';

    // function createShipper(data) {}
    // function removeShipper(id) {}
    // function editShipper(item) {}
    // function onToggleShipperInfoForm() { setIsDisplayShipperInfoForm(toggle => !toggle); }

    function onClear() { setFullNameFilter(''); setPhoneFilter(''); }

    if (fullName.length > 0 || phone.length > 0) {
        isDisplayClear = true;
        itemsOrigin.forEach((item) => {
            if (((item.first_name.toLowerCase() + " " + item.last_name.toLowerCase()).indexOf(fullName) !== -1
                && item.phone.indexOf(phone) !== -1)) {
                shipper.push(item);
            }
        });
    } else {
        shipper = itemsOrigin;
    }

    if (shipper.length === 0) {
        result = <td colSpan={12} className="no-data-found">
            <h1>Shipper not found</h1>
        </td>
    }

    return (
        <section className="about_top">
            <div className="container">
                <ShipperTitle />
                {/* <div className="create-post">
                    <div className="create-post-left">
                        <div className="new-shipper-tab" onClick={onToggleShipperInfoForm}>
                            {
                                !displayShipperInfoForm ? <span>ADD A NEW SHIPPER</span> : <span>CLOSE</span>
                            }
                        </div>
                    </div>
                    {elementShipperInfoForm}
                </div> */}
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
                                {
                                    cookies.load("user").groups[0] === 1
                                        ? <th>Detailed information</th>
                                        : <></>
                                }
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>{result}</tr>
                            {
                                loadingProgress ? <tr>
                                    <td colSpan={12} style={{ padding: '1% 0 2% 0' }}>
                                        <LoadingProgress />
                                    </td>
                                </tr> : <>
                                    {
                                        shipper.map((shipper, index) => {
                                            i++;
                                            return <tr key={index}>
                                                <td>{i}</td>
                                                <td>{shipper.first_name} {shipper.last_name}</td>
                                                <td><img src={shipper.avatar} alt="avatar" /></td>
                                                <td>{shipper.date_of_birth}</td>
                                                <td>{shipper.gender}</td>
                                                <td>{shipper.address}</td>
                                                <td>{shipper.email}</td>
                                                <td>{shipper.phone}</td>
                                                {
                                                    cookies.load("user").groups[0] === 1
                                                        ? <td><Link to={"shipper-detail/" + shipper.id} className="see-another-page-2">See profile <i className="fas fa-user-circle"></i></Link></td>
                                                        : <></>
                                                }
                                                {/* <td>
                                                    <span className="see-another-page-1" onClick={() => editShipper(shipper)}>Edit</span>
                                                    <RemoveShipper props={shipper.id} />
                                                    <span className="see-another-page-2" onClick={() => removeShipper(shipper.id)}>Remove</span>
                                                </td> */}
                                            </tr>
                                        })
                                    }
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                <Link to="/list-orders" className="see-another-page">SEE LIST OF ORDERS</Link>
            </div>
        </section>
    );
}