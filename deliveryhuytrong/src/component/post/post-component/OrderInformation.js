import React, { useContext, useState } from 'react';
import Slider from "react-slick";
import { OrderInformationContext } from './OrderAuctionedList';
import '../post.css';

export default function OrderInformation() {
    const context = useContext(OrderInformationContext);
    const [hiddenContent, setHiddenContent] = useState({});
    const onToggleHideContent = index => {
        setHiddenContent({ ...hiddenContent, [index]: !hiddenContent[index] });
    };
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    return (
        <>
            {
                !hiddenContent[context.index] && <div>
                    <p>Customer:<span>{context.order.auction_win.post.customer.first_name} {context.order.auction_win.post.customer.last_name}</span></p>
                </div>
            } {
                hiddenContent[context.index] && <div className="show-post-content">
                    <p>Customer:<span>{context.order.auction_win.post.customer.first_name} {context.order.auction_win.post.customer.last_name}</span></p>
                    <p>Description:<span>{context.order.auction_win.post.description}</span></p>
                    <p>Weight:<span>{context.order.auction_win.post.weight} kilograms</span></p>
                    <p>Sending address:<span>{context.order.auction_win.post.send_stock.address}</span></p>
                    <p>Sending address information:<span>{context.order.auction_win.post.send_stock.name_represent_man} - {context.order.auction_win.post.send_stock.phone}</span></p>
                    <p>Receiving address:<span>{context.order.auction_win.post.receive_stock.address}</span></p>
                    <p>Receiving address information:<span>{context.order.auction_win.post.receive_stock.name_represent_man} - {context.order.auction_win.post.receive_stock.phone}</span></p>
                    <hr style={{ width: '50%', margin: '15px auto 10px auto' }} />
                    <p style={{ margin: '8px 0' }}>Cost:<span style={{ fontSize: 18 }}>{currencyFormat((context.order.auction_win.cost).slice(0, -3))} VND</span></p>
                    <p style={{ margin: '8px 0' }}>Status:
                        <span className={
                            context.order.status === 'shipped' ? 'order-auction-status-shipped' : '' ||
                                context.order.status === 'shipping' ? 'order-auction-status-shipping' : '' ||
                                    context.order.status === 'not yet shipped' ? 'order-auction-status-not-yet-shipped' : ''
                        }>
                            {
                                context.order.status === 'shipped' ? <span><i className="fas fa-check-circle"></i>Shipped</span> : '' ||
                                    context.order.status === 'shipping' ? <span><i className="fas fa-exclamation-triangle"></i>Shipping</span> : '' ||
                                        context.order.status === 'not yet shipped' ? <span><i className="fas fa-times-circle"></i>Not yet shipped</span> : ''
                            }
                        </span>
                    </p>
                </div>
            }
            <p className="show-hide-content"><i className="fas fa-ellipsis-h" onClick={() => onToggleHideContent(context.index)}></i></p>
            <div className="order-image">
                <Slider className="auction-info-carousel" {...settingSlider}>
                    {
                        context.order.auction_win.post.image_items.map((i, ix) => {
                            return <img key={ix} src={i.image} alt="img" />
                        })
                    }
                </Slider>
            </div>
        </>
    );

    function currencyFormat(num) {
        return num.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev;
        })
    }
}