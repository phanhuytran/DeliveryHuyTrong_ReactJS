import React, { useEffect, useState } from 'react';
import "../order-auction.css";
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import OrderAuctionComment from './OrderAuctionComment';
import clientIMG from '../image/client.jpg';
import API, { endpoints } from '../../API';
import axios from 'axios';

export default function OrderAuctionPost(props) {
    const [orderPostList, setOrderPostList] = useState([]);
    const [isDisplayPostOption, setIsDisplayPostOption] = useState(false);

    const orderID = parseInt(props.props.match.params.id, 10);
    const history = useHistory();
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    const displayPostOption = isDisplayPostOption;
    const elementPostOption = displayPostOption
        ? <div className="auction-option">
            <p>Edit</p>
            <p onClick={() => removeAuctionPost(orderID)}>Remove</p>
        </div> : '';

    useEffect(() => {
        API.get(endpoints['posts']).then(res => (
            setOrderPostList(res.data.results)
        ));
    }, [])

    function onTogglePostOption() {
        setIsDisplayPostOption(toggle => !toggle);
    }

    function seeMoreAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "none";
        document.getElementById("see-more-auction-order-info-2").style.display = "block";
    }

    function seeLessAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "inline-block";
        document.getElementById("see-more-auction-order-info-2").style.display = "none";
    }

    function removeAuctionPost(id) {
        let orderPost = orderPostList;
        swal({
            title: "Do you want to remove this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willRemove) => {
            if (willRemove) {
                axios.delete('http://127.0.0.1:8000/posts/' + id)
                setOrderPostList(orderPost);
                swal("This order was removed successfully!", { icon: "success" });
                setTimeout(() => {
                    history.push("/list-orders");
                }, 500);
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

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
                                                    <span onClick={onTogglePostOption}><i className="fas fa-ellipsis-h"></i></span><br />
                                                    <span>{value.created_date}</span>
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
                                                <p>Receiving address: <span className="info-comment">{value.receive_stock.address}</span></p>
                                                <p>Sending address: <span className="info-comment">{value.send_stock.address}</span></p>
                                                <p id="see-less-auction-order-info" onClick={seeLessAuctionInfo}>See Less <span className="fas fa-arrow-up" /></p>
                                            </div>
                                        </div>
                                        <div className="order-image">
                                            <Slider className="auction-info-carousel" {...settingSlider}>
                                                {
                                                    value.image_items.map((i, ix) => {
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