import React, { Component } from 'react';

class OrderAuctionTitle extends Component {
    render() {
        return (
            <div>
                <section className="order_us_area" id="about">
                    <div className="container">
                        <div className="row page-title">
                            <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                                <div className="order_us_content_title">
                                    <h2>order auction</h2>
                                    <h5>Auction compete for orders</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                                <div className="order_us_content_title">
                                    <ul className="breadcrumbs">
                                        <li><a href="/">home</a></li>
                                        <li><a href="/order-auction">auction</a></li>
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

export default OrderAuctionTitle;