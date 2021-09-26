import React from 'react';
import "../order-auction.css";
import Slider from "react-slick";

export default function OrderInformation(props) {
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    return (
        <>
            <div className="auction-order-info">
                <p>Customer: <span className="info-comment">{props.post.customer.first_name} {props.post.customer.last_name}</span></p>
                <p><span id="see-more-auction-order-info-1" onClick={seeMoreAuctionInfo}> See More <span className="fas fa-arrow-down" /></span></p>
                <div id="see-more-auction-order-info-2">
                    <p>Description:<span className="info-comment">{props.post.description}</span></p>
                    <p>Weight:<span className="info-comment">{props.post.weight} kilograms</span></p>
                    <p>Sending address:<span className="info-comment">{props.post.send_stock.address}</span></p>
                    <p>Sending address information:<span className="info-comment">{props.post.send_stock.name_represent_man} - {props.post.send_stock.phone}</span></p>
                    <p>Receiving address:<span className="info-comment">{props.post.receive_stock.address}</span></p>
                    <p>Receiving address information:<span className="info-comment">{props.post.receive_stock.name_represent_man} - {props.post.receive_stock.phone}</span></p>
                    <p id="see-less-auction-order-info" onClick={seeLessAuctionInfo}>See Less <span className="fas fa-arrow-up" /></p>
                </div>
            </div>
            <div className="order-image">
                <Slider className="auction-info-carousel" {...settingSlider}>
                    {
                        props.post.image_items.map((i, ix) => {
                            return <img key={ix} src={i.image} alt="img" />
                        })
                    }
                </Slider>
            </div>
        </>
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