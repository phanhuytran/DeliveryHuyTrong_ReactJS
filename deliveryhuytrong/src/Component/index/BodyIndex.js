import React, { Component } from 'react';
import Footer from '../item-base/Footer';

class BodyIndex extends Component {
    render() {
        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="about_single_item">
                            <div className="item_icon">
                                <img src="img/speed.png" alt="item" />
                            </div>
                            <div className="about_single_item_content">
                                <h4>Fastest Delivery</h4>
                                <p>Shipper delivers immediate or same day depending on your needs.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="about_single_item">
                            <div className="item_icon">
                                <img src="img/safe.png" alt="item" />
                            </div>
                            <div className="about_single_item_content">
                                <h4>Safe</h4>
                                <p>Guaranteed 100% safety for the shipper because the shipper has been paid before receiving the goods for delivery.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="about_single_item">
                            <div className="item_icon">
                                <img src="img/moto.png" alt="item" />
                            </div>
                            <div className="about_single_item_content">
                                <h4>Convenient Way</h4>
                                <p>Automatically detect the location and suggest all the nearest orders on the way you ship.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="index_area" id="about">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="about_us_content">
                            <h2>about us</h2>
                            <p>The system is integrated with software on mobile devices, using the service via Wifi/3G connection, with support and customer care staff to provide the most effective service, helping you to call the shipper quickly, manage orders, track order status, minimize the situation that the shipper does not work seriously. For shippers, this is an effective support tool in receiving shipping needs, managing orders to ship.</p>
                            <a href="/about" target="_blank">see more <span className="fas fa-expand-alt" /></a>
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
                    <section className="couter_up_area" id="shipper">
                    <div className="table">
                        <div className="cell">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-2 col-sm-3 text-center">
                                <div className="single_count">
                                <h1 className="counter">126</h1>
                                <h5>Satisfied customers</h5>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                <div className="single_count">
                                <h1 className="counter">34</h1>
                                <h5>Branches</h5>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3 col-md-offset-1 text-center">
                                <div className="single_count">
                                <h1 className="counter">120</h1>
                                <h5>Active workers</h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-md-offset-1 text-center">
                                <div className="single_count">
                                <h1 className="counter">3546</h1>
                                <h5>Product delivered</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BodyIndex;