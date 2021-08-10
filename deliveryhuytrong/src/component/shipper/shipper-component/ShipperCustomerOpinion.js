import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

class ShipperCustomerOpinion extends React.Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    }
    render() {
        return (
            <div>
                <section className="owl-customer-comment">
                    <h3>CUSTOMER'S OPINION ABOUT SHIPPERS</h3><br /><br />
                    <ReactOwlCarousel
                        className="owl-theme"
                        items="4"
                        loop="true"
                        autoplay="true"
                        autoplayhoverpaus="true"
                        autoplaytime="3000"
                        dotsSpeed="500"
                        smartSpeed="1000"
                        slideBy="2"
                        responsive={this.state.responsive}
                    >
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                    </ReactOwlCarousel>
                </section>
            </div>
        );
    }
}

export default ShipperCustomerOpinion;