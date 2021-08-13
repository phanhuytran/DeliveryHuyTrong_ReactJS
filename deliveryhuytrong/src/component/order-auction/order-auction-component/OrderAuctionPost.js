import React from 'react';
import { Link } from 'react-router-dom';
import orderNotYetAuctionedListData from '../../list-orders/list-orders-component/OrderNotYetAuctionedListData';
import clientIMG from '../image/client.jpg';

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

        var orderID = parseInt(this.props.props.match.params.id, 10);

        return (
            <div>
                <section className="order-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="auction-area">
                                {
                                    orderNotYetAuctionedListData.map((value, index) => {
                                        if (value.id === orderID) {
                                            return <React.Fragment key={index}>
                                                <div className="auction-customer-info">
                                                    <div className="auction-customer-info-left">
                                                        <img src={clientIMG} alt="img" />
                                                    </div>
                                                    <div className="auction-customer-info-right">
                                                        <p>
                                                            <span>Customer's Name</span><br />
                                                            <span>{value.createdDate}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="auction-order-info">
                                                    <p>Order description: <strong>{value.description}</strong>
                                                        <span id="see-more-auction-order-info-1" onClick={see_more_auction_info}> See more <span className="fas fa-arrow-down" /></span>
                                                    </p>
                                                    <div id="see-more-auction-order-info-2">
                                                        <p>Weight: <strong>{value.weight} kilograms</strong></p>
                                                        <p>Receiving address: <strong>{value.receivingAddress}</strong></p>
                                                        <p>Sending address: <strong>{value.sendingAddress}</strong></p>
                                                        <p id="see-less-auction-order-info" onClick={see_less_auction_info}>See less <span className="fas fa-arrow-up" /></p>
                                                    </div>
                                                </div>
                                                <div className="order-image">
                                                    <img src={value.image} alt="img" />
                                                </div>
                                            </React.Fragment>
                                        }
                                        return '';
                                    })
                                }
                                <form>
                                    <div className="auction-area-comment">
                                        <hr />
                                        <div className="auction-area-comment-flex auction-space">
                                            <div className="auction-area-comment-flex-left">
                                                <img src={clientIMG} alt="img" />
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
                                                <img src={clientIMG} alt="img" />
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
                                                <img src={clientIMG} alt="img" />
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
                                                <img src={clientIMG} alt="img" />
                                            </div>
                                            <div className="auction-area-comment-flex-center">
                                                <input type="text" name="" defaultValue="" placeholder="Write a auction information..." />
                                            </div>
                                            <div className="auction-area-comment-flex-right">
                                                <button><i className="fas fa-location-arrow" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div><br />
                        <Link to="/list-orders">SEE LIST OF ORDERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default OrderAuctionPost;