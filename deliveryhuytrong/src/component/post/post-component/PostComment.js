import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { AuthAPI, endpoints } from '../../API';
import '../post.css';

export default function PostComment(props) {
    const [auction, setAuction] = useState([]);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();
    }, [auction]);

    return (
        <div className="post-comment">
            <hr />
            {
                auction.map((auction, index) => {
                    if (auction.post === props.post.id) {
                        return <div className="post-comment-flex" key={index}>
                            <div className="post-comment-flex-left">
                                <img src={auction.shipper.avatar} alt="img" />
                            </div>
                            <div className="post-comment-flex-right">
                                <div className="post-comment-content">
                                    <p><strong>{auction.shipper.username}</strong></p>
                                    <p>{currencyFormat((auction.cost).slice(0, -3))} VND</p>
                                </div>
                                <p className="created-date-comment">{moment(new Date(auction.created_date), "YYYYMMDD").fromNow()}</p>
                            </div>
                        </div>
                    }
                    return <React.Fragment key={index}></React.Fragment>
                })
            }
            <hr />
        </div>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}