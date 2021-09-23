import React, { useEffect, useState } from 'react';
import '../post.css';
import * as _ from "lodash";
import moment from 'moment';
import Slider from "react-slick";
import { AuthAPI, endpoints } from '../../API';

export default function OrderAuctionedList() {
    const [orderList, setOrderList] = useState([]);
    const [hiddenContent, setHiddenContent] = useState({});
    const [hiddenOrderOption, setHiddenOrderOption] = useState({});

    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    const onToggleHideContent = index => {
        setHiddenContent({ ...hiddenContent, [index]: !hiddenContent[index] });
    };
    const onTogglePostOption = index => {
        setHiddenOrderOption({ ...hiddenOrderOption, [index]: !hiddenOrderOption[index] });
    };

    useEffect(() => {
        async function getOrderList() {
            let res = await AuthAPI.get(endpoints['orders']);
            setOrderList(res.data);
        }
        getOrderList();
    }, [orderList]);

    let result;
    if (orderList.length === 0) {
        result = <div className="post-list-null" style={{ marginTop: "3%", padding: '8% 0' }}><p>Order not found</p></div>
    }

    return (
        <>
            <div style={{ marginTop: "-3%" }} />
            {
                _.sortBy(orderList).reverse().map((order, index) => {
                    return <React.Fragment key={index}>
                        <div className="post-item">
                            <div className="post-content-header">
                                <div className="post-content-header-left">
                                    <img src={order.auction_win.post.customer.avatar} alt="img" />
                                </div>
                                <div className="post-content-header-center">
                                    <p>
                                        <strong>{order.auction_win.post.customer.username}</strong>
                                        <i className="fas fa-check-circle credited-order">
                                            <span className="tool-tip-text">This order has been have the shipper</span>
                                        </i>
                                        <br />
                                        <span>{moment(order.auction_win.post.created_date, "YYYYMMDD").fromNow()}</span>
                                    </p>
                                </div>
                                <div className="post-content-header-right">
                                    <p onClick={() => onTogglePostOption(index)}>
                                        <span><i className="fas fa-ellipsis-h"></i></span>
                                    </p>
                                    {!hiddenOrderOption[index] && <></>} {
                                        hiddenOrderOption[index] && <div className="post-option" style={{ width: '9.4%', margin: '3% 0 0 -3%' }}>
                                            <p>Change status</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="post-content">
                                {
                                    !hiddenContent[index] && <div>
                                        <p>Customer:<span>{order.auction_win.post.customer.first_name} {order.auction_win.post.customer.last_name}</span></p>
                                    </div>
                                } {
                                    hiddenContent[index] && <div className="show-post-content">
                                        <p>Customer:<span>{order.auction_win.post.customer.first_name} {order.auction_win.post.customer.last_name}</span></p>
                                        <p>Description:<span>{order.auction_win.post.description}</span></p>
                                        <p>Weight:<span>{order.auction_win.post.weight} kilograms</span></p>
                                        <p>Sending address:<span>{order.auction_win.post.send_stock.address}</span></p>
                                        <p>Sending address information:<span>{order.auction_win.post.send_stock.name_represent_man} - {order.auction_win.post.send_stock.phone}</span></p>
                                        <p>Receiving address:<span>{order.auction_win.post.receive_stock.address}</span></p>
                                        <p>Receiving address information:<span>{order.auction_win.post.receive_stock.name_represent_man} - {order.auction_win.post.receive_stock.phone}</span></p>
                                        <hr style={{ width: '50%', margin: '15px auto 10px auto' }} />
                                        <p style={{ margin: '8px 0' }}>Cost:<span style={{ fontSize: 18 }}>{currencyFormat((order.auction_win.cost).slice(0, -3))} VND</span></p>
                                        <p style={{ margin: '8px 0' }}>Status:
                                            <span className={
                                                order.status === 'shipped' ? 'order-auction-status-shipped' : '' ||
                                                    order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                                        order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                                            }>
                                                {
                                                    order.status === 'shipped' ? 'Shipped' : '' ||
                                                        order.status === 'shipping' ? 'Shipping' : '' ||
                                                            order.status === 'not yet shipped' ? 'Not yet shipped' : ''
                                                }
                                            </span>
                                        </p>
                                    </div>
                                }
                                <p className="show-hide-content"><i className="fas fa-ellipsis-h" onClick={() => onToggleHideContent(index)}></i></p>
                                <div className="order-image">
                                    <Slider className="auction-info-carousel" {...settingSlider}>
                                        {
                                            order.auction_win.post.image_items.map((i, ix) => {
                                                return <img key={ix} src={i.image} alt="img" />
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                })
            }
            {result}
        </>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}