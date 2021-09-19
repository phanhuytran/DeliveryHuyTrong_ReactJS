import React, { useState } from 'react';
import "../order-auction.css";
import axios from 'axios';
import cookies from 'react-cookies';
import GavelIcon from '@mui/icons-material/Gavel';

export default function AuctionForm(props) {
    const [cost, setCost] = useState(0);
    const [messageCreate, setMessageCreate] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/posts/" + props.props.post.id + "/auctions/",
            data: {
                post: props.props.post.id,
                shipper: cookies.load('user').id,
                cost: cost
            },
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.non_field_errors) {
                setMessageCreate('You can only auction once')
            }
            if (err.response.data.cost) {
                setMessageCreate('Ensure this cost has no more than 10 digits in total')
            }
        })
    }

    return (
        <>
            <p className="cmt-message">{messageCreate}</p>
            <form onSubmit={onSubmit}>
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
            </form>
        </>
    );
}