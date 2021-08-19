import React from 'react';
import '../shipper.css';
import { Link } from 'react-router-dom';
import ShipperTitle from './ShipperTitle';
import shipperListData from './ShipperListData';

class ShipperList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shiperList: shipperListData,
            fullNameFilter: '',
            phoneFilter: '',
            isDisplayClearFilter: false
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
            fullNameFilter: '',
            phoneFilter: ''
        })
    }

    render() {

        const fullNameFilter = this.state.fullNameFilter;
        const phoneFilter = this.state.phoneFilter;

        let { isDisplayClearFilter } = this.state;
        let itemsOrigin = this.state.shiperList;
        let shiperList = [], result, i = 0;

        if (fullNameFilter.length > 0 || phoneFilter.length > 0) {
            isDisplayClearFilter = true;
            itemsOrigin.forEach((item) => {
                if (((item.firstName.toLowerCase() + " " + item.lastName.toLowerCase()).indexOf(fullNameFilter) !== -1
                    && item.phone.indexOf(phoneFilter) !== -1)) {
                    shiperList.push(item);
                }
            });
        } else {
            shiperList = itemsOrigin;
        }

        if (shiperList.length === 0) {
            result = <td colSpan={9} className="no-shipper-found">
                <h1>No order shipper</h1>
            </td>
        }

        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <ShipperTitle />
                        <div className="shipper-list-filter">
                            <input type="text" placeholder="Search by full name..." name="fullNameFilter" value={this.state.fullNameFilter} onChange={this.onSearch} />
                            <input className="ml-spf" type="text" placeholder="Search by phone number..." name="phoneFilter" value={this.state.phoneFilter} onChange={this.onSearch} />
                            {isDisplayClearFilter ? <button onClick={this.onClear}>Clear</button> : <></>}
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
                                        shiperList.map((shipper, index) => {
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
}

export default ShipperList;