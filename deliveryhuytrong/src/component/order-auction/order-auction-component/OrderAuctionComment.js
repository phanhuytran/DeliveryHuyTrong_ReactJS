import React, { useState, useEffect } from 'react';
import "../order-auction.css";
import cookies from 'react-cookies';
import axios from 'axios';
import moment from 'moment';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import GavelIcon from '@mui/icons-material/Gavel';
import AuctionForm from './AuctionForm'
import { AuthAPI, endpoints } from '../../API';

export let MessageContext = React.createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderAuctionComment(props) {
    const [auction, setAuction] = useState([]);
    const [isDisplayPostOption, setIsDisplayPostOption] = useState(false);
    const [message, setMessage] = useState('');
    const [editCost, setEditCost] = useState(0);
    const [isDisplayAuctionInfo, setIsDisplayAuctionInfo] = useState(true);
    const [isDisplayEditAuction, setIsDisplayEditAuction] = useState(false);
    const [openRemoveAuctionDialog, setOpenRemoveAuctionDialog] = useState(false);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setAuction(res.data);
        }
        getAuction();
    }, [auction]);

    const onTogglePostOption = () => {
        setIsDisplayPostOption(toggle => !toggle);
    }

    const openAuctionDialog = () => {
        setOpenRemoveAuctionDialog(true);
    }

    const closeRemoveAuctionDialog = () => {
        setOpenRemoveAuctionDialog(false);
        setIsDisplayPostOption(false);
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
            setMessage('');
            setIsDisplayPostOption(false);
            setOpenRemoveAuctionDialog(false);
        }).catch((err) => {
            console.log(err.response.data);
            setIsDisplayPostOption(false);
            setMessage('This auction has ended. You cannot remove this auction');
        })
        setAuction(auc);
    }

    const showEditForm = () => {
        setMessage('');
        setIsDisplayAuctionInfo(false);
        setIsDisplayEditAuction(true);
        setIsDisplayPostOption(false);
    }

    const cancelEditAuction = () => {
        setMessage('');
        setIsDisplayAuctionInfo(true);
        setIsDisplayEditAuction(false);
    }

    async function editAuction(id, e) {
        e.preventDefault();
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
            setMessage('');
            setIsDisplayAuctionInfo(true);
            setIsDisplayEditAuction(false);
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.cost) {
                setMessage('Ensure this cost has no more than 10 digits in total')
            }
            if (err.response.data.detail) {
                setMessage('This auction has ended. You cannot remove this auction')
            }
        })
        setAuction(auc);
    }

    return (
        <div className="auction-area-comment">
            <hr />
            <p className="cmt-message">{message}</p>
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
                                            <span>{currencyFormat((auction.cost).slice(0, -3))} VND</span>
                                        </div> : <></>
                                }
                                {
                                    isDisplayEditAuction
                                        ? <form onSubmit={(e) => editAuction(auction.id, e)}>
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
                                    <p>{moment(auction.created_date, "YYYYMMDD").fromNow()}</p>
                                </div>
                            </div>
                            <div className="auction-area-comment-flex-right">
                                <p onClick={onTogglePostOption} className="cmt-auction-option">
                                    <span><i className="fas fa-ellipsis-h"></i></span>
                                </p>
                                {
                                    isDisplayPostOption ? <div className="cmt-auction-action">
                                        <p onClick={showEditForm}>Edit</p>
                                        <p onClick={openAuctionDialog}>Remove</p>
                                        <Dialog
                                            open={openRemoveAuctionDialog}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={closeRemoveAuctionDialog}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle style={{ color: '#5D5D5D' }}>{"Do you want to remove this auction?"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                                                    You will no longer see this auction if you press REMOVE.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button style={{ fontSize: 14 }} onClick={closeRemoveAuctionDialog}>Cancel</Button>
                                                <Button style={{ fontSize: 14 }} onClick={() => removeAuction(auction.id)}>Remove</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div> : <></>
                                }
                            </div>
                        </div>
                    }
                    return <React.Fragment key={index}></React.Fragment>
                })
            }
            <hr />
            <AuctionForm props={props} />
        </div>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}