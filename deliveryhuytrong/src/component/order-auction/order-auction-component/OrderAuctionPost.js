import React from 'react';
import "../order-auction.css";
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { remove } from 'lodash';
import orderPostListData from '../../list-orders/list-orders-component/OrderPostListData';
import OrderAuctionComment from './OrderAuctionComment';
// import Modal from 'react-modal';
import clientIMG from '../image/client.jpg';

class OrderAuctionPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderPostList: orderPostListData,
            isDisplayPostOption: false
        }
    }

    removeAuctionPost = (id) => {
        let orderPostList = this.state.orderPostList;
        remove(orderPostList, (item) => {
            if (item.isWin === false) {
                return item.id === id;
            }
        });
        this.setState({
            orderPostList: orderPostList,
            isDisplayPostOption: false
        });
    }

    onTogglePostOption = () => {
        this.setState({
            isDisplayPostOption: !this.state.isDisplayPostOption
        });
    }

    render() {
        const settingSlider = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        function seeMoreAuctionInfo() {
            document.getElementById("see-more-auction-order-info-1").style.display = "none";
            document.getElementById("see-more-auction-order-info-2").style.display = "block";
        }

        function seeLessAuctionInfo() {
            document.getElementById("see-more-auction-order-info-1").style.display = "inline-block";
            document.getElementById("see-more-auction-order-info-2").style.display = "none";
        }

        let { orderPostList, isDisplayPostOption } = this.state;
        let orderID = parseInt(this.props.props.match.params.id, 10);
        let elementPostOption = isDisplayPostOption
            ? <div className="auction-option">
                <p>Edit</p>
                {/* <Link to="/list-orders"><p onClick={() => this.removeAuctionPost(orderID)}>Remove</p></Link> */}
                <p onClick={() => this.removeAuctionPost(orderID)}>Remove</p>
            </div> : '';

        return (
            <section className="order-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="auction-area">
                            {elementPostOption}
                            {
                                orderPostList.map((value, index) => {
                                    if (value.id === orderID) {
                                        return <React.Fragment key={index}>
                                            <div className="auction-customer-info">
                                                <div className="auction-customer-info-left">
                                                    <img src={clientIMG} alt="img" />
                                                </div>
                                                <div className="auction-customer-info-right">
                                                    <p>
                                                        <span>{value.customer}</span>
                                                        <span onClick={this.onTogglePostOption}><i className="fas fa-ellipsis-h"></i></span><br />
                                                        <span>{value.createdDate}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="auction-order-info">
                                                <p>Customer: <span className="info-comment">{value.customer}</span></p>
                                                <p><span id="see-more-auction-order-info-1" onClick={seeMoreAuctionInfo}> See More <span className="fas fa-arrow-down" /></span></p>
                                                <div id="see-more-auction-order-info-2">
                                                    <p>Order description:</p>
                                                    <p className="info-comment-2">{value.description}</p>
                                                    <p>Weight: <span className="info-comment">{value.weight} kilograms</span></p>
                                                    <p>Receiving address: <span className="info-comment">{value.receivingAddress}</span></p>
                                                    <p>Sending address: <span className="info-comment">{value.sendingAddress}</span></p>
                                                    <p id="see-less-auction-order-info" onClick={seeLessAuctionInfo}>See Less <span className="fas fa-arrow-up" /></p>
                                                </div>
                                            </div>
                                            <div className="order-image">
                                                <Slider className="auction-info-carousel" {...settingSlider}>
                                                    {
                                                        value.image.map((i, ix) => {
                                                            return <img key={ix} src={i} alt="img" />
                                                        })
                                                    }
                                                </Slider>
                                                <OrderAuctionComment />
                                            </div>
                                        </React.Fragment>
                                    }
                                    return '';
                                })
                            }
                        </div>
                    </div><br />
                    <Link to="/list-orders" className="see-another-page">SEE LIST OF ORDERS</Link>
                </div>
            </section>
        );
    }
}

export default OrderAuctionPost;