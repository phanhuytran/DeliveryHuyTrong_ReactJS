import React, { useEffect, useState } from 'react';
import { AuthAPI, endpoints } from '../../API';
import ShipperProfile from './ShipperProfile';

export default function ShipperRating(props) {
    const [shipperAverageRating, setShipperAverageRating] = useState([]);
    const [rateList, setRateList] = useState([]);
    const [rate, setRate] = useState(0);
    const [content, setContent] = useState('');
    const rateID = props.props.auction_win.shipper.id;

    useEffect(() => {
        async function getRateList() {
            let res = await AuthAPI.get(endpoints['rates']);
            setRateList(res.data);
        }
        async function getShipperAverageRating() {
            let res = await AuthAPI.get(endpoints['shipper-average-rate'](rateID));
            setShipperAverageRating(res.data);
        }

        getRateList();
        getShipperAverageRating();
    }, [rateList], [shipperAverageRating]);

    const confirmRating = () => {
        var checkbox = document.getElementsByName("rating");
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
                document.getElementById("result-confirm-rating").innerHTML = "Your rating: " + checkbox[i].value;
                document.getElementById("btn-confirm-rating").style.color = "#1cb33c";
            }
        }
    }

    async function ratingShipper(e) {
        e.preventDefault();
        let ra = rateList;
        let formData = new FormData();
        formData.append("content", content);
        formData.append("rate", rate);
        formData.append("order_id", props.props.auction_win.post.id);
        AuthAPI.post(await endpoints['rates'], formData).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.response.data);
        });
        setRateList(ra);
    }

    return (
        <>
            <br /><h1 style={{ fontSize: 30, textAlign: 'center', margin: '20px auto 40px auto' }}>Shipper Rating</h1>
            <div className="shipper-info">
                <div className="shipper-info-left wow bounceIn">
                    <img src={props.props.auction_win.shipper.avatar} alt="avatar" /><br />
                </div><br />
                <div className="shipper-info-right shipper-info-rating">
                    <form onSubmit={ratingShipper}>
                        <table>
                            <tbody>
                                <ShipperProfile props={props} />
                                <tr>
                                    <th rowSpan={2}>
                                        <h3>RATING:</h3>
                                        <p className="community-rating">Community's rating:
                                            <span className="communty-rating">
                                                <i style={{ fontSize: 30, color: '#f9bf3b' }} className="fas fa-star"></i>{shipperAverageRating.ave}
                                            </span>
                                        </p>
                                    </th>
                                    <td className="text-right txt-right-rating">
                                        <div id="rating">
                                            <input type="radio" id="star5" name="rating" value={5} onChange={e => setRate(e.target.value)} />
                                            <label className="full" htmlFor="star5" title="5 stars" />
                                            <input type="radio" id="star4" name="rating" value={4} onChange={e => setRate(e.target.value)} />
                                            <label className="full" htmlFor="star4" title="4 stars" />
                                            <input type="radio" id="star3" name="rating" value={3} onChange={e => setRate(e.target.value)} />
                                            <label className="full" htmlFor="star3" title="3 stars" />
                                            <input type="radio" id="star2" name="rating" value={2} onChange={e => setRate(e.target.value)} />
                                            <label className="full" htmlFor="star2" title="2 stars" />
                                            <input type="radio" id="star1" name="rating" value={1} onChange={e => setRate(e.target.value)} />
                                            <label className="full" htmlFor="star1" title="1 star" />
                                        </div>
                                    </td>
                                    <td className="text-right col-confirm-rating">
                                        <span onClick={confirmRating} id="btn-confirm-rating" className="fas fa-check-circle" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <p id="result-confirm-rating">Please rate the shipper!</p>
                                        <textarea rows={3} cols={28} placeholder="Your message..." value={content} onChange={e => setContent(e.target.value)} /><br />
                                        <button type="submit">SEND</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </>
    );
}