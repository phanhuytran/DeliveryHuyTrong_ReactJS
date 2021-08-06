import React from 'react';
import { Link } from 'react-router-dom';

class OrderTitle extends React.Component {
    render() {
        return (
            <div>
                <section className="order_us_area" id="about">
                    <div className="container">
                        <div className="row page-title">
                            <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                                <div className="order_us_content_title">
                                    <h2>list of orders</h2>
                                    <h5>Prestigious delivery partner, high quality at an affordable price</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                                <div className="order_us_content_title">
                                    <ul className="breadcrumbs">
                                        <li><Link to="/about">about</Link></li>
                                        <li><Link to="/shipper">shipper</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrderTitle;