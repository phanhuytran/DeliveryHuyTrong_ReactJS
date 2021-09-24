import React, { useState, useEffect } from 'react';
import '../post-detail.css';
import { AuthAPI, endpoints } from '../../API';

export default function ShipperInfoChosen(props) {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const getOrderList = async () => {
            let res = await AuthAPI.get(endpoints['orders']);
            setOrderList(res.data);
        }
        getOrderList();
    }, [orderList]);

    return (
        <div className="shipper-info-chosen">
            <h3>The shipper information you have chosen</h3>
            {
                orderList.map((order, index) => {
                    if (order.auction_win.post.id === props.post.id) {
                        return <div key={index} className="shipper-info-chosen-body">
                            <div className="shipper-info-chosen-left">
                                <img src={order.auction_win.shipper.avatar} alt="avatar" />
                                <p style={{ fontSize: 18, textTransform: 'uppercase' }}>{order.auction_win.shipper.first_name} {order.auction_win.shipper.last_name}</p>
                                <p style={{ fontSize: 25 }}>{order.auction_win.shipper.phone}</p>
                            </div>
                            <div className="shipper-info-chosen-right">
                                <p>Cost:<span style={{ fontSize: 20 }}>{currencyFormat((order.auction_win.cost).slice(0, -3))} VND</span></p>
                                <p>Status:
                                    <span className={
                                        order.status === 'shipped' ? 'order-auction-status-shipped' : '' ||
                                            order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                                order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                                    }>
                                        {
                                            order.status === 'shipped' ? <span><i class="fas fa-exclamation-triangle"></i>Not yet shipped</span> : <></> ||
                                                order.status === 'shipping' ? <span><i class="fas fa-times-circle"></i>Shipping</span> : <></> ||
                                                    order.status === 'shipped' ? <span><i class="fas fa-check-circle"></i>Shipped</span> : <></>
                                        }
                                    </span>
                                </p>
                            </div>
                        </div>
                    }
                    return <React.Fragment key={index}></React.Fragment>
                })
            }
        </div>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}