import React, { useContext, useState } from 'react';
import '../post.css';
import Slider from "react-slick";
import { PostInformationContext } from './Post';

export default function PostInformation() {
    const context = useContext(PostInformationContext);
    const [hiddenContent, setHiddenContent] = useState({});
    const onToggleHideContent = index => {
        setHiddenContent({ ...hiddenContent, [index]: !hiddenContent[index] });
    };
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

    return (
        <>
            {
                !hiddenContent[context.index] && <div>
                    <p>Customer:<span>{context.post.customer.first_name} {context.post.customer.last_name}</span></p>
                </div>
            } {
                hiddenContent[context.index] && <div className="show-post-content">
                    <p>Customer:<span>{context.post.customer.first_name} {context.post.customer.last_name}</span></p>
                    <p>Description:<span>{context.post.description}</span></p>
                    <p>Weight:<span>{context.post.weight} kilograms</span></p>
                    <p>Sending address:<span>{context.post.send_stock.address}</span></p>
                    <p>Sending address information:<span>{context.post.send_stock.name_represent_man} - {context.post.send_stock.phone}</span></p>
                    <p>Receiving address:<span>{context.post.receive_stock.address}</span></p>
                    <p>Receiving address information:<span>{context.post.receive_stock.name_represent_man} - {context.post.receive_stock.phone}</span></p>
                </div>
            }
            <p className="show-hide-content"><i className="fas fa-ellipsis-h" onClick={() => onToggleHideContent(context.index)}></i></p>
            <div className="order-image">
                <Slider className="auction-info-carousel" {...settingSlider}>
                    {
                        context.post.image_items.map((i, ix) => {
                            return <img key={ix} src={i.image} alt="img" />
                        })
                    }
                </Slider>
            </div>
        </>
    );
}