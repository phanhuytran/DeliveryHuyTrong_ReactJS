import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthAPI, endpoints } from '../../API';
import LoadingProgress from '../../item-base/LoadingProgress';
import '../post-detail.css';
import cashIMG from '../image/cash.png';
import momoIMG from '../image/momo.png';
import zaloPayIMG from '../image/zalo-pay.png';

export default function ShipperInfoChosen(props) {
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const getOrderList = async () => {
            let res = await AuthAPI.get(endpoints['orders']);
            setTimeout(() => {
                setLoadingProgress(false);
                setOrderList(res.data.results);
            }, 2000);
        }
        getOrderList();
    }, [orderList]);

    return (
        <div className="shipper-info-chosen">
            <h3>The shipper information you have chosen</h3>
            {
                loadingProgress ? <>
                    <div style={{ marginTop: '10%' }} />
                    <LoadingProgress />
                </> : <>
                    {
                        orderList.map((order, index) => {
                            if (order.auction_win.post.id === props.post.id) {
                                return <div key={index} className="shipper-info-chosen-body">
                                    <div className="shipper-info-chosen-left">
                                        <Link to={"/shipper-detail/" + order.auction_win.shipper.id}>
                                            <img src={order.auction_win.shipper.avatar} alt="avatar" />
                                        </Link>
                                        <p style={{ fontSize: 18, textTransform: 'uppercase' }}>{order.auction_win.shipper.first_name} {order.auction_win.shipper.last_name}</p>
                                        <p style={{ fontSize: 25 }}>{order.auction_win.shipper.phone}</p>
                                    </div>
                                    <div className="shipper-info-chosen-right">
                                        <p>Cost:<span style={{ fontSize: 20 }}>{currencyFormat((order.auction_win.cost).slice(0, -3))} VND</span></p>
                                        <p>Pay method:
                                            {
                                                order.pay_method === 'Zalo pay' ? <span style={{ fontSize: 18, marginTop: '-20px' }}>Zalo pay<img src={zaloPayIMG} alt="pay-method" /></span> : '' ||
                                                    order.pay_method === 'Momo' ? <span style={{ fontSize: 18, marginTop: '-20px' }}>Momo<img src={momoIMG} alt="pay-method" /></span> : '' ||
                                                        order.pay_method === 'Cash' ? <span style={{ fontSize: 18, marginTop: '-20px' }}>Cash<img src={cashIMG} alt="pay-method" /></span> : ''
                                            }
                                        </p>
                                        <p>Status:
                                            <span className={
                                                order.status === 'shipped' ? 'order-auction-status-shipped' : '' ||
                                                    order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                                        order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                                            }>
                                                {
                                                    order.status === 'shipped' ? <span><i className="fas fa-check-circle"></i>Shipped</span> : '' ||
                                                        order.status === 'shipping' ? <span><i className="fas fa-exclamation-triangle"></i>Shipping</span> : '' ||
                                                            order.status === 'not yet shipped' ? <span><i className="fas fa-times-circle"></i>Not yet shipped</span> : ''
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            }
                            return <React.Fragment key={index}></React.Fragment>
                        })
                    }
                </>
            }
        </div>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}