import React from 'react';
import { Link } from 'react-router-dom';

class OrderAuctionPost extends React.Component {
    render() {

        function see_more_auction_info() {
            document.getElementById("see-more-auction-order-info-2").style.display = "block";
            document.getElementById("see-more-auction-order-info-1").style.display = "none";
        }

        function see_less_auction_info() {
            document.getElementById("see-more-auction-order-info-2").style.display = "none";
            document.getElementById("see-more-auction-order-info-1").style.display = "inline-block";
        }

        return (
            <div>
                <section className="order-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="auction-area">
                                <div className="auction-customer-info">
                                    <div className="auction-customer-info-left">
                                        <img src="img/client.jpg" alt="img" />
                                    </div>
                                    <div className="auction-customer-info-right">
                                        <p>
                                            <span>Customer's Name</span><br />
                                            <span>July 31 at 9:41 PM</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="auction-order-info">
                                    <p>Order description:...<span id="see-more-auction-order-info-1" onClick={see_more_auction_info}> See more <span className="fas fa-arrow-down" /></span></p>
                                    <div id="see-more-auction-order-info-2">
                                        <p>Weight:...</p>
                                        <p>Receiving address:...</p>
                                        <p>Sending address:...</p>
                                        <p id="see-less-auction-order-info" onClick={see_less_auction_info}>See less <span className="fas fa-arrow-up" /></p>
                                    </div>
                                </div>
                                <div className="order-image">
                                    <img src="img/visa.png" alt="img" />
                                </div>
                                <div className="auction-area-comment">
                                    <hr />
                                    <div className="auction-area-comment-flex auction-space">
                                        <div className="auction-area-comment-flex-left">
                                            <img src="img/client.jpg" alt="img" />
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <div className="auction-area-comment-info">
                                                <strong>Shipper's Name</strong><br />
                                                <span>20.000 VNĐ - 0775398511</span>
                                            </div>
                                            <div className="auction-area-comment-date">
                                                <p>July 31 at 9:41 PM</p>
                                            </div>
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                        </div>
                                    </div>
                                    <div className="auction-area-comment-flex auction-space">
                                        <div className="auction-area-comment-flex-left">
                                            <img src="img/client.jpg" alt="img" />
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <div className="auction-area-comment-info">
                                                <strong>Shipper's Name</strong><br />
                                                <span>20.000 VNĐ - 0775398511</span>
                                            </div>
                                            <div className="auction-area-comment-date">
                                                <p>July 31 at 9:41 PM</p>
                                            </div>
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                        </div>
                                    </div>
                                    <div className="auction-area-comment-flex auction-space">
                                        <div className="auction-area-comment-flex-left">
                                            <img src="img/client.jpg" alt="img" />
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <div className="auction-area-comment-info">
                                                <strong>Shipper's Name</strong><br />
                                                <span>20.000 VNĐ - 0775398511</span>
                                            </div>
                                            <div className="auction-area-comment-date">
                                                <p>July 31 at 9:41 PM</p>
                                            </div>
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="auction-area-comment-flex">
                                        <div className="auction-area-comment-flex-left">
                                            <img src="img/client.jpg" alt="img" />
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <input type="text" name="" defaultValue="" placeholder="Write a auction information..." />
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                            <button><i className="fas fa-location-arrow" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br />
                        <a className="new-page-tab"><Link to="/list-orders">SEE LIST OF ORDERS</Link></a>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrderAuctionPost;