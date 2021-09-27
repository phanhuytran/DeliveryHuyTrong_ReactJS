import React, { useState } from 'react';
import cookies from 'react-cookies';
import GavelIcon from '@mui/icons-material/Gavel';
import { AuthAPI, endpoints } from '../../API';
import "../order-auction.css";

export default function AuctionForm(props) {
    const [cost, setCost] = useState(0);
    const [message, setMessage] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('post', props.props.post.id);
        formData.append('shipper', cookies.load('user').id);
        formData.append('cost', cost);

        AuthAPI.post(endpoints['post-auctions'](props.props.post.id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
            setMessage('');
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.non_field_errors) {
                setMessage('You can only auction once')
            }
            if (err.response.data.cost) {
                setMessage('Ensure this cost has no more than 10 digits in total')
            }
        })
    }

    return (
        <>
            <p className="cmt-message">{message}</p>
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