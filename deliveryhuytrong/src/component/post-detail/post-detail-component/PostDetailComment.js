import React, { useContext, useState, useEffect } from 'react';
import "../post-detail.css";
import cookies from 'react-cookies';
import axios from 'axios';
import moment from 'moment';
import { AuthAPI, endpoints } from '../../API';
import { DisplayPostOptionContext } from './PostDetail';

export default function PostDetailComment(props) {
    const [auction, setAuction] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [chooseShipper, setChooseShipper] = useState(0);
    const option = useContext(DisplayPostOptionContext);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();

        const getOrderList = async () => {
            let res = await AuthAPI.get(endpoints['orders']);
            setOrderList(res.data);
        }
        getOrderList();
    }, [auction]);

    async function confirmShipper(e) {
        e.preventDefault();
        let order = orderList;
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/orders/",
            data: {
                auction_win: chooseShipper
            },
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res);
            option.setIsDisplayPostOption(false);
        }).catch((err) => {
            console.log(err.response.data)
        })
        setOrderList(order);
    }

    return (
        <form onSubmit={confirmShipper}>
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
                                    <input className="radio-select-shipper"
                                        type="radio"
                                        name="radio-select-shipper"
                                        value={auction.id}
                                        onChange={e => setChooseShipper(e.target.value)}
                                        required
                                    />
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