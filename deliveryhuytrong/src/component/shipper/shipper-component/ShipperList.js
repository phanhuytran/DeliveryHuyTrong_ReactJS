import React from 'react';
import { Link } from 'react-router-dom';
import Shipper from './Shipper';
import ShipperTitle from './ShipperTitle';
import shipperListData from './ShipperListData.json';

class ShipperList extends React.Component {
    render() {
        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <ShipperTitle />
                        <br /><br />
                        <div className="row scroll-shipper-list">
                            {
                                shipperListData.map((shipper, index) => {
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
                        <Link to="/list-orders">SEE LIST OF ORDERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperList;