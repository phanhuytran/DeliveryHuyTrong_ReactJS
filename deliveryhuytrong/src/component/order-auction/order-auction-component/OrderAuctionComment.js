import React, { useState, useEffect } from 'react';
import "../order-auction.css";
import axios from 'axios';
import cookies from 'react-cookies';
import GavelIcon from '@mui/icons-material/Gavel';
import { AuthAPI, endpoints } from '../../API';

export default function OrderAuctionComment(props) {
    const [auction, setAuction] = useState([]);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        async function getAuction() {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();
    });

    let result;
    if (auction.length === 0) {
        result = <div className="no-comment-found"><p>Auction information not found</p></div>
    }

    const onTogglePostOption = () => {

    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/posts/" + props.post.id + "/auctions/",
            data: {
                post: props.post.id,
                shipper: cookies.load('user').id,
                cost: cost
            },
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    const test = () => {
        console.log(props.post.id)
        console.log(auction[0].post)
    }

    return (
        <form onSubmit={onSubmit}>
            <p onClick={test}>TEST</p>
            <div className="auction-area-comment">
                <hr />
                <div className="auction-area-comment-flex auction-space">
                    {
                        // auction[0].post === props.post.id ? <>
                        //     {
                                auction.map((auction, index) => {
                                    return <React.Fragment key={index}>
                                        <div className="auction-area-comment-flex-left">
                                            <img src={auction.shipper.avatar} alt="img" />
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <div className="auction-area-comment-info">
                                                <strong>{auction.shipper.username}</strong><br />
                                                <span>{auction.cost} VND</span>
                                            </div>
                                            <div className="auction-area-comment-date">
                                                <p>{(auction.created_date).slice(0, 10)}</p>
                                            </div>
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                            <p onClick={onTogglePostOption}>
                                                <span><i className="fas fa-ellipsis-h"></i></span>
                                            </p>
                                        </div>
                                    </React.Fragment>
                                })
                        //     }
                        // </> : <div className="no-comment-found"><p>Auction information not found</p></div>
                    }
                    {result}
                </div>
                <hr />
                {
                    auction.length === 0 ? <>
                        <div className="auction-area-comment-flex">
                            <div className="auction-area-comment-flex-left">
                                <img src={cookies.load('user').avatar} alt="img" />
                            </div>
                            <div className="auction-area-comment-flex-center">
                                <input type="number" step="0.01" min="0" placeholder="Write a auction information..." value={cost} onChange={e => setCost(e.target.value)} />
                            </div>
                            <div className="auction-area-comment-flex-right">
                                <button><GavelIcon style={{ fontSize: 25 }} /></button>
                            </div>
                        </div>
                    </> : <></>
                }
            </div>
        </form>
    );
}