import React, { useState, useEffect } from 'react';
import "../order-auction.css";
import axios from 'axios';
import cookies from 'react-cookies';
import GavelIcon from '@mui/icons-material/Gavel';
import AuctionForm from './AuctionForm'
import { AuthAPI, endpoints } from '../../API';

export default function OrderAuctionComment(props) {
    const [auction, setAuction] = useState([]);
    const [isDisplayPostOption, setIsDisplayPostOption] = useState(false);
    const [messageRemove, setMessageRemove] = useState('');
    const [editCost, setEditCost] = useState(0);
    const [isDisplayAuctionInfo, setIsDisplayAuctionInfo] = useState(true);
    const [isDisplayEditAuction, setIsDisplayEditAuction] = useState(false);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();
    }, []);

    // let result;
    // if (auction.length === 0) {
    //     result = <div className="no-comment-found"><p>Auction information not found</p></div>
    // }

    const onTogglePostOption = () => {
        setIsDisplayPostOption(toggle => !toggle);
    }

    async function removeAuction(id) {
        let auc = auction;
        await axios({
            method: "DELETE",
            url: "http://127.0.0.1:8000/auctions/" + id,
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data);
            setMessageRemove('This auction has ended. You cannot remove this auction');
        })
        setAuction(auc);
    }

    const showEditForm = () => {
        setIsDisplayAuctionInfo(false);
        setIsDisplayEditAuction(true);
        setIsDisplayPostOption(false);
    }

    const cancelEditAuction = () => {
        setIsDisplayAuctionInfo(true);
        setIsDisplayEditAuction(false);
    }

    async function editAuction(id) {
        let auc = auction;
        await axios({
            method: "PATCH",
            url: "http://127.0.0.1:8000/auctions/" + id + "/",
            data: {
                cost: editCost
            },
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res);
            window.location.reload();
        }).catch((err) => {
            console.log(err.response.data);
        })
        setAuction(auc);
    }

    return (
        <div className="auction-area-comment">
            <hr />
            <p className="cmt-message">{messageRemove}</p>
            {
                auction.map((auction, index) => {
                    if (auction.post === props.post.id) {
                        return <div className="auction-area-comment-flex auction-space" key={index}>
                            <div className="auction-area-comment-flex-left">
                                <img src={auction.shipper.avatar} alt="img" />
                            </div>
                            <div className="auction-area-comment-flex-center">
                                {
                                    isDisplayAuctionInfo
                                        ? <div className="auction-area-comment-info">
                                            <strong style={{ fontSize: 16 }}>{auction.shipper.username}</strong><br />
                                            <span>{auction.cost} VND</span>
                                        </div> : <></>
                                }
                                {
                                    isDisplayEditAuction
                                        ? <form onSubmit={() => editAuction(auction.id)}>
                                            <div className="auction-area-comment-info">
                                                <strong style={{ fontSize: 16 }}>{auction.shipper.username}</strong>
                                                <span style={{ marginLeft: '10px' }}></span>
                                                <span className="cancel-edit-auction" onClick={cancelEditAuction}>Cancel</span><br />
                                                <input type="number" step="0.01" min="0" placeholder="Write a auction information..." value={editCost} onChange={e => setEditCost(e.target.value)} />
                                                <button><GavelIcon style={{ fontSize: 25 }} /></button>
                                            </div>
                                        </form> : <></>
                                }
                                <div className="auction-area-comment-date">
                                    <p>{(auction.created_date).slice(0, 10)}</p>
                                </div>
                            </div>
                            <div className="auction-area-comment-flex-right">
                                <p onClick={onTogglePostOption} className="cmt-auction-option">
                                    <span><i className="fas fa-ellipsis-h"></i></span>
                                </p>
                                {
                                    isDisplayPostOption ? <div className="cmt-auction-action">
                                        <p onClick={showEditForm}>Edit</p>
                                        <p onClick={() => removeAuction(auction.id)}>Remove</p>
                                    </div> : <></>
                                }
                            </div>
                        </div>
                    }
                    return <React.Fragment key={index}></React.Fragment>
                })
            }
            {/* {result} */}
            <hr />
            <AuctionForm props={props} />
        </div>
    );
}