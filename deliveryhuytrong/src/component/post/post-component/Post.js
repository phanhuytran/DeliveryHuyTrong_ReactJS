import React, { useEffect, useState } from 'react';
import '../post.css';
import * as _ from "lodash";
import swal from 'sweetalert';
import Slider from "react-slick";
import PersonalInformation from './PersonalInformation';
import API, { endpoints } from '../../API';
import axios from 'axios';
import PostForm from './PostForm';

export default function Post() {
    const [postList, setPostList] = useState([]);
    const [hiddenContent, setHiddenContent] = useState({});
    const [hiddenPostOption, setHiddenPostOption] = useState({});

    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    const onToggleHideContent = index => {
        setHiddenContent({ ...hiddenContent, [index]: !hiddenContent[index] });
    };
    const onTogglePostOption = index => {
        setHiddenPostOption({ ...hiddenPostOption, [index]: !hiddenPostOption[index] });
    };

    useEffect(() => {
        API.get(endpoints['posts']).then(res => (
            setPostList(res.data.results)
        ));
    }, []);

    function createPost(data) {
        let post = postList;
        post.push({
            description: data.description,
            weight: data.weight,
            receive_stock: {
                address: data.receive_stock
            },
            send_stock: {
                address: data.send_stock
            }
        });
        window.location.href = "/post";
        axios.post('http://127.0.0.1:8000/posts/', data)
        setPostList(post);
    }

    function removePost(id) {
        let post = postList;
        swal({
            title: "Do you want to remove this order?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willRemove) => {
            if (willRemove) {
                axios.delete('http://127.0.0.1:8000/posts/' + id)
                setPostList(post);
                swal("This order was removed successfully!", { icon: "success" });
                setTimeout(() => {
                    window.location.href = "/post";
                }, 500);
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

    return (
        <div className="post">
            <div className="post-body">
                <PersonalInformation />
                <div className="post-body-right">
                    <PostForm onSubmit={createPost} />
                    {
                        _.sortBy(postList,"created_date").reverse().map((post, index) => {
                            return <React.Fragment key={index}>
                                <div className="post-content-header">
                                    <div className="post-content-header-left">
                                        <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/61218055_2366961493538973_7396865786104512512_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=RqtnDJ_gfCUAX_ZE0Ip&_nc_ht=scontent.fsgn8-1.fna&oh=8953a69d3ccfb42f5cdb52e98079a2c5&oe=6132BD23" alt="img" />
                                    </div>
                                    <div className="post-content-header-center">
                                        <p><strong>{post.customer}</strong><br /><span>{post.created_date}</span></p>
                                    </div>
                                    <div className="post-content-header-right">
                                        <p onClick={() => onTogglePostOption(index)}>
                                            <span><i className="fas fa-ellipsis-h"></i></span>
                                        </p>
                                        {!hiddenPostOption[index] && <></>} {
                                            !!hiddenPostOption[index] && <div className="post-option">
                                                <p>Edit</p>
                                                <p onClick={() => removePost(post.id)}>Remove</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="post-content">
                                    {
                                        !hiddenContent[index] && <div>
                                            <p>Customer:<span>{post.customer}</span></p>
                                        </div>
                                    } {
                                        !!hiddenContent[index] && <div className="show-post-content">
                                            <p>Customer:<span>{post.customer}</span></p>
                                            <p>Description:<span>{post.description}</span></p>
                                            <p>Weight:<span>{post.weight}</span></p>
                                            <p>Sending address:<span>{post.send_stock.address}</span></p>
                                            <p>Receiving address:<span>{post.receive_stock.address}</span></p>
                                        </div>
                                    }
                                    <p className="show-hide-content" onClick={() => onToggleHideContent(index)}><i className="fas fa-ellipsis-h"></i></p>

                                    <div className="order-image">
                                        <Slider className="auction-info-carousel" {...settingSlider}>
                                            <img src="https://file3.qdnd.vn/data/images/0/2021/08/09/lamanh/0108-vaccine-us.jpg" alt="img" />
                                            <img src="http://baochinhphu.vn/Uploaded/tranducmanh/2021_07_04/5K.jpg" alt="img" />
                                            <img src="https://lh3.googleusercontent.com/proxy/ZLZr_fo1id0s2L_5Mz1WOhEQIKPk-50fqdEK_b9Lo60O9RjQyAoqv4Sx98EhuGrIkvZWnkYbwPCowzeQX92WA5gmfew3yq-azypLFhR82Joo_EpeDy0heDoJU13attJCYDAH7DoNPL_vECH3" alt="img" />
                                        </Slider>
                                        {/* <OrderAuctionComment /> */}
                                    </div>
                                </div>
                            </React.Fragment>
                        })
                    }
                </div>
            </div>
        </div>
    );
}