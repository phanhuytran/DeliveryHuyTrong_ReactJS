import React from 'react';
import { Link } from 'react-router-dom';
import ShipperTitle from './ShipperTitle';

class ShipperList extends React.Component {
    render() {
        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <ShipperTitle />
                        <br /><br />
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about_single_item">
                                    <div className="item_icon">
                                        <img src="img/item_icon.png" alt="item" />
                                    </div>
                                    <div className="about_single_item_content">
                                        <h4>Shipper's Name</h4>
                                        <p>Shipper's Information</p>
                                        <Link to="/shipper-detail">Read more <span className="fas fa-expand-alt" /></Link>
                                    </div>
                                </div>
                            </div>
                            <Link to="/list-orders">SEE LIST OF ORDERS</Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperList;