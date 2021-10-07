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
        <>
            <Slider {...settingSlider}>
                {
                    rateList.map((rate, index) => {
                        return <div key={index}><p>{rate.customer.username}</p></div>
                    })
                }
            </Slider>
        </>
    );
}