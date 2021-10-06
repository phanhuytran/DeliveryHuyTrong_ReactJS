import React, { useContext, useState, useEffect } from 'react';
import * as _ from 'lodash';
import moment from 'moment';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import { DisplayPostOptionContext } from './PostInformation';
import '../post-detail.css';
import cashIMG from '../image/cash.png';
import momoIMG from '../image/momo.png';
import zaloPayIMG from '../image/zalo-pay.png';

export default function PostDetailComment(props) {
    const option = useContext(DisplayPostOptionContext);
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [auction, setAuction] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [chooseShipper, setChooseShipper] = useState(0);
    const [choosePayMethod, setChoosePayMethod] = useState(0);
    const [isDisplayPayMethod, setIsDisplayPayMethod] = useState(false);

    useEffect(() => {
        const getAuction = async () => {
            let res = await AuthAPI.get(endpoints['auctions']);
            setTimeout(() => {
                setLoadingProgress(false);
                setAuction(res.data);
            }, 2000);
        }

        const getOrderList = async () => {
            let res = await AuthAPI.get(endpoints['orders']);
            setOrderList(res.data);
        }

        getAuction();
        getOrderList();
    }, [auction]);

    const changeAuctionWin = (e) => {
        setChooseShipper(e.target.value);
        setIsDisplayPayMethod(true);
    }

    async function confirmShipper(e) {
        e.preventDefault();
        let order = orderList;
        let formData = new FormData();
        formData.append('auction_win', chooseShipper);
        formData.append('pay_method', choosePayMethod);
        AuthAPI.post(endpoints['orders'], formData).then((res) => {
            console.log(res);
            option.setIsDisplayPostOption(false);
        }).catch((err) => {
            console.log(err.response);
        })
        setOrderList(order);
    }

    return (
        <form onSubmit={confirmShipper}>
            <div className="auction-area-comment">
                <hr />
                {
                    loadingProgress ? <LoadingProgress /> : <>
                        {
                            _.sortBy(auction).reverse().map((auction, index) => {
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
                                                <p>{moment(new Date(auction.created_date), "YYYYMMDD").fromNow()}</p>
                                            </div>
                                        </div>
                                        <div className="auction-area-comment-flex-right">
                                            <input className="radio-select-shipper"
                                                type="radio"
                                                name="radio-select-shipper"
                                                value={auction.id}
                                                onChange={changeAuctionWin}
                                                required
                                            />
                                        </div>
                                    </div>
                                }
                                return <React.Fragment key={index}></React.Fragment>
                            })
                        }
                        {
                            isDisplayPayMethod ? <>
                                {
                                    <>
                                        <hr />
                                        <h2>Pay method</h2>
                                        <div className="pay-method">
                                            <input style={{ marginLeft: 0 }} type="radio" name="pay-method" value={2} onChange={e => setChoosePayMethod(e.target.value)} />
                                            <img src={cashIMG} alt="cash-img" />
                                            <input type="radio" name="pay-method" value={1} onChange={e => setChoosePayMethod(e.target.value)} />
                                            <img src={momoIMG} alt="momo-img" />
                                            <input type="radio" name="pay-method" value={0} onChange={e => setChoosePayMethod(e.target.value)} />
                                            <img src={zaloPayIMG} alt="zalo-pay-img" />
                                            <p><span>Cash</span><span>Momo</span><span>Zalo pay</span></p>
                                        </div>
                                    </>
                                }
                            </> : <></>
                        }
                    </>
                }
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