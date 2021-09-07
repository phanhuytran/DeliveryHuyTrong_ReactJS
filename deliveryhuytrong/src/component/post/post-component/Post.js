import React, { useEffect, useState } from 'react';
import '../post.css';
import { Link } from 'react-router-dom';
import * as _ from "lodash";
import swal from 'sweetalert';
import Slider from "react-slick";
import axios from 'axios';
// import cookies from 'react-cookies';
import PostForm from './PostForm';
import PostComment from './PostComment';
import PersonalInformation from './PersonalInformation';
import { AuthAPI, endpoints } from '../../API';

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

    // let user = cookies.load("user");

    useEffect(() => {
        AuthAPI.get(endpoints['posts']).then(res => (
            setPostList(res.data.results)
        ));
    }, []);

    async function createPost(data) {
        let post = postList;
        await AuthAPI.post(endpoints['posts'], data);
        console.log(data);
        setPostList(post);
        // window.location.reload();
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

    // let result;
    // console.log(postList)
    // // if (user.username === a) {

    // // }
    // if (postList.length === 0) {
    //     result = <div>
    //         <h1>Huy</h1>
    //     </div>
    // }

    return (
        <div className="post">
            <div className="post-body">
                <PersonalInformation />
                <div className="post-body-right">
                    <PostForm onSubmit={createPost} />
                    {
                        _.sortBy(postList).reverse().map((post, index) => {
                            // if (user.username === post.customer.username)
                            return <React.Fragment key={index}>
                                <div className="post-content-header">
                                    <div className="post-content-header-left">
                                        <img src={post.customer.avatar} alt="img" />
                                    </div>
                                    <div className="post-content-header-center">
                                        <p><strong>{post.customer.username}</strong><br /><span>{(post.created_date).slice(0, 10)}</span></p>
                                    </div>
                                    <div className="post-content-header-right">
                                        <p onClick={() => onTogglePostOption(index)}>
                                            <span><i className="fas fa-ellipsis-h"></i></span>
                                        </p>
                                        {!hiddenPostOption[index] && <></>} {
                                            hiddenPostOption[index] && <div className="post-option">
                                                <p>Edit</p>
                                                <p onClick={() => removePost(post.id)}>Remove</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="post-content">
                                    {
                                        !hiddenContent[index] && <div>
                                            <p>Customer:<span>{post.customer.first_name} {post.customer.last_name}</span></p>
                                        </div>
                                    } {
                                        hiddenContent[index] && <div className="show-post-content">
                                            <p>Customer:<span>{post.customer.first_name} {post.customer.last_name}</span></p>
                                            <p>Description:<span>{post.description}</span></p>
                                            <p>Weight:<span>{post.weight}</span></p>
                                            <p>Sending address:<span>{post.send_stock.address}</span></p>
                                            <p>Receiving address:<span>{post.receive_stock.address}</span></p>
                                        </div>
                                    }
                                    <p className="show-hide-content"><i className="fas fa-ellipsis-h" onClick={() => onToggleHideContent(index)}></i></p>
                                    <div className="order-image">
                                        <Slider className="auction-info-carousel" {...settingSlider}>
                                            {
                                                post.image_items.map((i, ix) => {
                                                    return <img key={ix} src={i.image} alt="img" />
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <PostComment /><br />
                                    <Link className="click-auction-confirm" to={"post-detail/" + post.id}>Click to auction confirmation</Link>
                                </div>
                            </React.Fragment>
                            // return <React.Fragment key={index}><h1>Huy</h1></React.Fragment>
                        })
                    }
                    {/* {result} */}
                </div>
            </div>
        </div>
    );
}