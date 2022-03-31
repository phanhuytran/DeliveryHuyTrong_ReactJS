import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
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
    const [isDisplayMomoQRCode, setIsDisplayMomoQRCode] = useState(false);

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
        AuthAPI.post(await endpoints['orders'], formData).then((res) => {
            console.log(res);
            option.setIsDisplayPostOption(false);
        }).catch((err) => {
            console.log(err.response);
        })
        setOrderList(order);
    }

    const showMomoQRCode = async () => {
        console.log("Show Momo QR Code");
        setIsDisplayMomoQRCode(true);
        await axios({
            method: 'POST',
            url: 'https://api.qr-code-generator.com/v1/create?access-token=TWGSoPzdoKG5kUkmzhnEUIeqPLhwA3peqtWh-jwuq1BM7nTMfUWMV4RaDGXOxQK8',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            }, data: qs.stringify({
                'frame_name': 'no-frame',
                'qr_code_text0': 'https://test-payment.momo.vn/pay/store/MOMOIDXP20220219-QWdaiai149274y44?a=11112.00&b=Kanj-auctionId_8-commentId_29&s=c4a15b54abb616e72b0266302da529de0d8f698f64fa55e8ec3733814d9d3058',
                'image_format': 'SVG',
                'qr_code_logo': 'scan-me-square'
            })
        }).then((res) => {
            console.log("Successfully!")
            console.log(res);
        }).catch((err) => {
            console.log("Failed!")
            console.log(err.response);
        })
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
                                            <Link to={"/shipper-detail/" + auction.shipper.id}>
                                                <img src={auction.shipper.avatar} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="auction-area-comment-flex-center">
                                            <div className="auction-area-comment-info">
                                                <Link to={"/shipper-detail/" + auction.shipper.id}>
                                                    <strong style={{ fontSize: 16 }}>{auction.shipper.username}</strong>
                                                </Link><br />
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
                                            <input style={{ marginLeft: 0 }} type="radio" name="pay-method" value={2} onChange={e => setChoosePayMethod(e.target.value)} required />
                                            <img src={cashIMG} alt="cash-img" />
                                            <input type="radio" name="pay-method" value={1} onChange={e => setChoosePayMethod(e.target.value) & showMomoQRCode(e.target.value)} required />
                                            <img src={momoIMG} alt="momo-img" />
                                            {/* <input type="radio" name="pay-method" value={0} onChange={e => setChoosePayMethod(e.target.value)} required />
                                            <img src={zaloPayIMG} alt="zalo-pay-img" /> */}
                                            <p><span>Cash</span><span>Momo</span></p>
                                            {
                                                isDisplayMomoQRCode ? <div className="momo-qr-code">
                                                    <h1>Momo QR Code</h1>
                                                </div> : <></>
                                            }
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