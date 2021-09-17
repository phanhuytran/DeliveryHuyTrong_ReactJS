import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import * as _ from "lodash";
import swal from 'sweetalert';
import Slider from "react-slick";
import axios from 'axios';
import Modal from 'react-modal';
import PostForm from './PostForm';
import PostComment from './PostComment';
import PersonalInformation from './PersonalInformation';
import { AuthAPI, endpoints } from '../../API';
import EditPostForm from './EditPostForm';

export default function Post() {
    const [postList, setPostList] = useState([]);
    const [hiddenContent, setHiddenContent] = useState({});
    const [hiddenPostOption, setHiddenPostOption] = useState({});
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    const onToggleHideContent = index => {
        setHiddenContent({ ...hiddenContent, [index]: !hiddenContent[index] });
    };
    const onTogglePostOption = index => {
        setHiddenPostOption({ ...hiddenPostOption, [index]: !hiddenPostOption[index] });
    };

    useEffect(() => {
        async function getPostList() {
            let res = await AuthAPI.get(endpoints['posts']);
            setPostList(res.data.results);
        }
        getPostList();
    }, []);

    async function createPost(data) {
        let post = postList;
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/posts/",
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        })
        console.log(data);
        setPostList(post);
        window.location.reload();
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
                AuthAPI.delete(endpoints['posts'] + id)
                setPostList(post);
                swal("This order was removed successfully!", { icon: "success" });
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

    async function editPost(data) {
        let post = postList;
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/posts/",
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).catch((err) => {
            console.log(err.response.data)
        })
        console.log(data);
        setPostList(post);
        setHiddenPostOption(false);
        // window.location.reload();
    }

    let result;
    if (postList.length === 0) {
        result = <div className="post-list-null"><p>No post found</p></div>
    }

    return (
        <div className="post">
            <div className="post-body">
                <PersonalInformation />
                <div className="post-body-right">
                    <PostForm onSubmit={createPost} />
                    {
                        _.sortBy(postList).reverse().map((post, index) => {
                            return <React.Fragment key={index}>
                                <div className="post-item">
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
                                                    <p onClick={() => setModalEditIsOpen(true)}>Edit</p>
                                                    <Modal className="modal-edit-post-form" isOpen={modalEditIsOpen} ariaHideApp={false}>
                                                        <EditPostForm
                                                            onSubmit={() => editPost(post.id)}
                                                            props={post}
                                                            description={post.description}
                                                            weight={post.weight}
                                                            receivingAddress={post.receive_stock}
                                                            sendingAddress={post.send_stock}
                                                            image={post.image_items.map((i, ix) => {
                                                                return <img key={ix} src={i.image} alt="img" />
                                                            })}
                                                        />
                                                        <div className="close-modal-edit-post-form" onClick={() => setModalEditIsOpen(false)}>
                                                            <i className="fas fa-times-circle"></i>
                                                        </div>
                                                    </Modal>
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
                                                <p>Weight:<span>{post.weight} kilograms</span></p>
                                                <p>Sending address:<span>{post.send_stock.address}</span></p>
                                                <p>Sending address information:<span>{post.send_stock.name_represent_man} - {post.send_stock.phone}</span></p>
                                                <p>Receiving address:<span>{post.receive_stock.address}</span></p>
                                                <p>Receiving address information:<span>{post.receive_stock.name_represent_man} - {post.receive_stock.phone}</span></p>
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
                                </div>
                            </React.Fragment>
                        })
                    }
                    {result}
                </div>
            </div>
        </div>
    );
}