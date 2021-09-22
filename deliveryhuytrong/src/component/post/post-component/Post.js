import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import * as _ from "lodash";
import moment from 'moment';
import Slider from "react-slick";
import axios from 'axios';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PostForm from './PostForm';
import PersonalInformation from './PersonalInformation';
import { AuthAPI, endpoints } from '../../API';
import EditPostForm from './EditPostForm';
// import PostComment from './PostComment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post() {
    const [postList, setPostList] = useState([]);
    const [hiddenContent, setHiddenContent] = useState({});
    const [hiddenPostOption, setHiddenPostOption] = useState({});
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [isDisplayRemovePostDialog, setIsDisplayOpenRemovePostDialog] = useState(false);

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
    }, [postList]);

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
    }

    const openRemovePostDialog = () => {
        setIsDisplayOpenRemovePostDialog(true);
    }

    const closeRemovePostDialog = () => {
        setIsDisplayOpenRemovePostDialog(false);
        setHiddenPostOption({});
    }

    function removePost(id) {
        let post = postList;
        AuthAPI.delete(endpoints['posts'] + id).then((res) => {
            console.log(res);
            setPostList(post);
            setHiddenPostOption({});
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    async function editPost(id, data) {
        let post = postList;
        await axios({
            method: "PATCH",
            url: "http://127.0.0.1:8000/posts/" + id + "/",
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        }).then((res) => {
            console.log(res);
            setPostList(post);
            setHiddenPostOption(false);
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    const closeEditPostModal = () => {
        setModalEditIsOpen(false);
        setHiddenPostOption({});
    }

    let result;
    if (postList.length === 0) {
        result = <div className="post-list-null"><p>Post not found</p></div>
    }

    return (
        <div className="post">
            <div className="post-body">
                <PersonalInformation />
                <div className="post-body-right">
                    {
                        cookies.load("user").groups[0] === 1 ? <>
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
                                                    <p><strong>{post.customer.username}</strong><br /><span>{moment(post.created_date, "YYYYMMDD").fromNow()}</span></p>
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
                                                                    onSubmit={(data) => editPost(post.id, data)}
                                                                    props={post}
                                                                    description={post.description}
                                                                    weight={post.weight}
                                                                    receivingAddress={post.receive_stock}
                                                                    sendingAddress={post.send_stock}
                                                                    image={post.image_items}
                                                                />
                                                                <div className="close-modal-edit-post-form" onClick={closeEditPostModal}>
                                                                    <i className="fas fa-times-circle"></i>
                                                                </div>
                                                            </Modal>
                                                            <p onClick={openRemovePostDialog}>Remove</p>
                                                            <Dialog
                                                                open={isDisplayRemovePostDialog}
                                                                TransitionComponent={Transition}
                                                                keepMounted
                                                                onClose={closeRemovePostDialog}
                                                                aria-describedby="alert-dialog-slide-description"
                                                            >
                                                                <DialogTitle style={{ color: '#5D5D5D' }}>{"Do you want to remove this post?"}</DialogTitle>
                                                                <DialogContent>
                                                                    <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                                                                        You will no longer see this post if you press REMOVE.
                                                                    </DialogContentText>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button style={{ fontSize: 14 }} onClick={closeRemovePostDialog}>Cancel</Button>
                                                                    <Button style={{ fontSize: 14 }} onClick={() => removePost(post.id)}>Remove</Button>
                                                                </DialogActions>
                                                            </Dialog>
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
                                                {/* <PostComment post={post} /> */}
                                                <br /><br />
                                                <Link className="click-auction-confirm" to={"post-detail/" + post.id}>Click to auction confirmation</Link>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                })
                            }
                            {result}
                        </> : <></>
                    }
                </div>
            </div>
        </div>
    );
}