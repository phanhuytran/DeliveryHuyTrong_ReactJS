import React, { useState, useEffect } from 'react';
import "../post-detail.css";
import moment from 'moment';
import { AuthAPI, endpoints } from '../../API';

export default function PostDetailComment(props) {
    const [auction, setAuction] = useState([]);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();
    }, [auction]);

    return (
        <form>
            <div className="auction-area-comment">
                <hr />
                {
                    auction.map((auction, index) => {
                        if (auction.post === props.post.id) {
                            return <div className="auction-area-comment-flex auction-space" key={index}>
                                <div className="auction-area-comment-flex-left">
                                    <img src={auction.shipper.avatar} alt="img" />
                                </div>
                                <div className="auction-area-comment-flex-center">
                                    <div className="auction-area-comment-info">
                                        <strong style={{ fontSize: 16 }}>{auction.shipper.username}</strong><br />
                                        <span>{currencyFormat((auction.cost).slice(0, -3))} VND</span>
                                    </div>
                                    <div className="auction-area-comment-date">
                                        <p>{moment(auction.created_date, "YYYYMMDD").fromNow()}</p>
                                    </div>
                                </div>
                                <div className="auction-area-comment-flex-right">
                                    <input className="radio-select-shipper" name="radio-select-shipper" type="radio" required />
                                </div>
                            </div>
                        }
                        return <React.Fragment key={index}></React.Fragment>
                    })
                }
                <hr />
                <div className="auction-confirmation">
                    <button type="submit">Auction confirmation</button>
                </div>
            </div>
        </form>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}