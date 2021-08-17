import React from 'react';
import '../shipper.css';
import { Link } from 'react-router-dom';
import Shipper from './Shipper';
import ShipperTitle from './ShipperTitle';
import shipperListData from './ShipperListData';

class ShipperList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shiperData: shipperListData,
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

        let { isDisplayClearFilter } = this.state;

        let itemsOrigin = this.state.shiperData;
        let shiperData = [];

        const fullNameFilter = this.state.fullNameFilter;
        const phoneFilter = this.state.phoneFilter;

        if (fullNameFilter.length > 0 || phoneFilter.length > 0) {
            isDisplayClearFilter = true;
            itemsOrigin.forEach((item) => {
                if (((item.firstName.toLowerCase() + " " + item.lastName.toLowerCase()).indexOf(fullNameFilter) !== -1
                    && item.phone.indexOf(phoneFilter) !== -1)) {
                    shiperData.push(item);
                }
            });
        } else {
            shiperData = itemsOrigin;
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
                        <div className="row scroll-shipper-list">
                            {
                                shiperData.map((shipper, index) => {
                                    return <Shipper key={index}
                                        id={shipper.id}
                                        firstName={shipper.firstName}
                                        lastName={shipper.lastName}
                                        dateOfBirth={shipper.dateOfBirth}
                                        gender={shipper.gender}
                                        idCard={shipper.idCard}
                                        address={shipper.address}
                                        email={shipper.email}
                                        phone={shipper.phone}
                                        image={shipper.image}
                                        isActive={shipper.status}
                                    />
                                })
                            }
                        </div>
                        <Link to="/list-orders" className="see-another-page">SEE LIST OF ORDERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperList;