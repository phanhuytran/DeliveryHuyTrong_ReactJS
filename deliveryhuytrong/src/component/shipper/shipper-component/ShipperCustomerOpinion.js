import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

class ShipperCustomerOpinion extends React.Component {
    render() {
        return (
            <div>
                <section className="owl-customer-comment">
                    <h3>CUSTOMER'S OPINION ABOUT SHIPPERS</h3><br /><br />
                    <ReactOwlCarousel
                        className="owl-theme"
                        items={4}
                        loop={true}
                        autoplay={true}
                        autoplayHoverPaus={true}
                        autoPlayTime={3000}
                        dotsSpeed={500}
                        smartSpeed={1000}
                        slideBy={2}
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