import React from 'react';
import '../home.css';
import { Link } from 'react-router-dom';

export default function HomeAbout() {
    return (
        <section className="index_area" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="about_us_content">
                            <h2>about us</h2>
                            <p>The system is integrated with software on mobile devices, using the service via Wifi/3G connection, with support and customer care staff to provide the most effective service, helping you to call the shipper quickly, manage orders, track order status, minimize the situation that the shipper does not work seriously. For shippers, this is an effective support tool in receiving shipping needs, managing orders to ship.</p><br />
                            <Link to="/about" className="index-show-item">see more <span className="fas fa-expand-alt" /></Link>
                        </div>
                    </div>
                    <div className="col-md-offset-1 col-sm-6 col-md-5">
                        <div className="about_car wow bounceIn">
                            <img src="img/shipper.jpg" alt="shipper" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}