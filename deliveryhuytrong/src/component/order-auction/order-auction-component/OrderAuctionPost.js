import React, { useEffect, useState } from 'react';
import "../order-auction.css";
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import OrderAuctionComment from './OrderAuctionComment';
import { AuthAPI, endpoints } from '../../API';
import clientIMG from '../image/client.jpg';

export default function OrderAuctionPost(props) {
    const [orderPostList, setOrderPostList] = useState([]);
    const orderID = parseInt(props.props.match.params.id, 10);
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    useEffect(() => {
        async function getOrderDetailList() {
            let res = await AuthAPI.get(endpoints['posts']);
            setOrderPostList(res.data.results);
        }
        getOrderDetailList();
    });

    return (
        <section className="order-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="auction-area">
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
                                                    <span>{value.customer.username}</span><br />
                                                    <span>{(value.created_date).slice(0, 10)}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="auction-order-info">
                                            <p>Customer: <span className="info-comment">{value.customer.first_name} {value.customer.last_name}</span></p>
                                            <p><span id="see-more-auction-order-info-1" onClick={seeMoreAuctionInfo}> See More <span className="fas fa-arrow-down" /></span></p>
                                            <div id="see-more-auction-order-info-2">
                                                <p>Order description:<span className="info-comment">{value.description}</span></p>
                                                <p>Weight:<span className="info-comment">{value.weight} kilograms</span></p>
                                                <p>Sending address:<span className="info-comment">{value.send_stock.address}</span></p>
                                                <p>Sending address information:<span className="info-comment">{value.send_stock.name_represent_man} - {value.send_stock.phone}</span></p>
                                                <p>Receiving address:<span className="info-comment">{value.receive_stock.address}</span></p>
                                                <p>Receiving address information:<span className="info-comment">{value.receive_stock.name_represent_man} - {value.receive_stock.phone}</span></p>
                                                <p id="see-less-auction-order-info" onClick={seeLessAuctionInfo}>See Less <span className="fas fa-arrow-up" /></p>
                                            </div>
                                        </div>
                                        <div className="order-image">
                                            <Slider className="auction-info-carousel" {...settingSlider}>
                                                {
                                                    value.image_items.map((i, ix) => {
                                                        return <img key={ix} src={i.image} alt="img" />
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

    function seeMoreAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "none";
        document.getElementById("see-more-auction-order-info-2").style.display = "block";
    }

    function seeLessAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "inline-block";
        document.getElementById("see-more-auction-order-info-2").style.display = "none";
    }
}