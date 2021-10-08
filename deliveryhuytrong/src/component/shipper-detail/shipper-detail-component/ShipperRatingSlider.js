import React, { useEffect, useState } from 'react';
import { AuthAPI, endpoints } from '../../API';
import Slider from "react-slick";
import '../shipper-detail.css';

export default function ShipperRatingSlider() {
    const [rateList, setRateList] = useState([]);
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1 };

    useEffect(() => {
        async function getRateList() {
            let res = await AuthAPI.get(endpoints['rates']);
            setRateList(res.data);
        }
        getRateList();
    }, [rateList]);

    return (
        <Slider {...settingSlider} className="shipper-rating-slider">
            {
                rateList.map((rate, index) => {
                    return <div key={index} className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                        <div className="single-about-us-bottom shipper-rating-slider-height">
                            <div className="shipper-rating-info-1">
                                <div>
                                    <img src={rate.shipper.avatar} alt="avatar" />
                                </div>
                                <div>
                                    <p>{rate.shipper.first_name}</p>
                                    <p>{rate.shipper.last_name}</p>
                                </div>
                            </div>
                            <div className="shipper-rating-info-2">
                                <p>
                                    <img src={rate.customer.avatar} alt="avatar" />
                                    <span className="customer-rating-info-1">{rate.customer.username}:</span>
                                    <span className="customer-rating-info-2">
                                        <i style={{ fontSize: 20, color: '#f9bf3b' }} className="fas fa-star"></i>
                                        <span>{rate.rate}</span><br />
                                        <span style={{ fontSize: 15, marginLeft: '45px', color: '#5d5d5d' }}>{rate.content}</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                })
            }
        </Slider>
    );
}