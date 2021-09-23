import React, { useEffect, useState } from 'react';
import "../post-detail.css";
import cookies from 'react-cookies';
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import moment from 'moment';
import axios from 'axios';
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { AuthAPI, endpoints } from '../../API';
import PostDetailComment from './PostDetailComment';
import EditPostDetailForm from './EditPostDetailForm';
import ShipperInfoChosen from './ShipperInfoChosen';

export let DisplayPostOptionContext = React.createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostDetail(props) {
    const [postList, setPostList] = useState([]);
    const [isDisplayPostOption, setIsDisplayPostOption] = useState(false);
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [isDisplayOpenRemovePostDialog, setIsDisplayOpenRemovePostDialog] = useState(false);
    const orderID = parseInt(props.props.match.params.id, 10);
    const settingSlider = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    const history = useHistory();

    useEffect(() => {
        const getOrderPostList = async () => {
            let res = await AuthAPI.get(endpoints['posts']);
            setPostList(res.data.results);
        }
        getOrderPostList();
    }, [postList]);

    function onTogglePostOption() {
        setIsDisplayPostOption(toggle => !toggle);
    }

    const openRemovePostDialog = () => {
        setIsDisplayOpenRemovePostDialog(true);
    }

    const closeRemovePostDialog = () => {
        setIsDisplayOpenRemovePostDialog(false);
        setIsDisplayPostOption(false);
    }

    function removePost(id) {
        let post = postList;
        AuthAPI.delete(endpoints['posts'] + id).then((res) => {
            console.log(res);
            setPostList(post);
            setIsDisplayPostOption(false);
            history.push('/post');
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
            setModalEditIsOpen(false);
            setIsDisplayPostOption(false);
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    const closeEditPostModal = () => {
        setModalEditIsOpen(false);
        setIsDisplayPostOption(false);
    }

    return (
        <section className="order-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="auction-area">
                        {
                            postList.map((post, index) => {
                                if (post.id === orderID) {
                                    return <React.Fragment key={index}>
                                        <div className="auction-customer-info">
                                            <div className="auction-customer-info-left">
                                                <img src={post.customer.avatar} alt="avatar" />
                                            </div>
                                            <div className="auction-customer-info-right">
                                                <p>
                                                    <span style={{ fontSize: 16 }}>{post.customer.username}
                                                        {
                                                            post.is_finish === true
                                                                ? <>
                                                                    <i className="fas fa-check-circle credited-order">
                                                                        <span className="tool-tip-text">This order has been have the shipper</span>
                                                                    </i>
                                                                </> : <></>
                                                        }
                                                    </span>
                                                    {
                                                        post.is_finish === false ? <>
                                                            <span onClick={onTogglePostOption}><i className="fas fa-ellipsis-h"></i></span>
                                                        </> : <></>
                                                    }
                                                    <br />
                                                    <span>{moment(post.created_date, "YYYYMMDD").fromNow()}</span>
                                                </p>
                                            </div>
                                            {
                                                isDisplayPostOption ? <div className="auction-option">
                                                    <p onClick={() => setModalEditIsOpen(true)}>Edit</p>
                                                    <Modal className="modal-edit-post-form" isOpen={modalEditIsOpen} ariaHideApp={false}>
                                                        <EditPostDetailForm
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
                                                        open={isDisplayOpenRemovePostDialog}
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
                                                </div> : <></>
                                            }
                                        </div>
                                        <div className="auction-order-info">
                                            <p>Customer: <span className="info-comment">{post.customer.first_name} {post.customer.last_name}</span></p>
                                            <p><span id="see-more-auction-order-info-1" onClick={seeMoreAuctionInfo}> See More <span className="fas fa-arrow-down" /></span></p>
                                            <div id="see-more-auction-order-info-2">
                                                <p>Order description:<span className="info-comment">{post.description}</span></p>
                                                <p>Weight:<span className="info-comment">{post.weight} kilograms</span></p>
                                                <p>Sending address:<span className="info-comment">{post.send_stock.address}</span></p>
                                                <p>Sending address information:<span className="info-comment">{post.send_stock.name_represent_man} - {post.send_stock.phone}</span></p>
                                                <p>Receiving address:<span className="info-comment">{post.receive_stock.address}</span></p>
                                                <p>Receiving address information:<span className="info-comment">{post.receive_stock.name_represent_man} - {post.receive_stock.phone}</span></p>
                                                <p id="see-less-auction-order-info" onClick={seeLessAuctionInfo}>See Less <span className="fas fa-arrow-up" /></p>
                                            </div>
                                        </div>
                                        <div className="order-image">
                                            <Slider className="auction-info-carousel" {...settingSlider}>
                                                {
                                                    post.image_items.map((i, ix) => {
                                                        return <img key={ix} src={i.image} alt="img" />
                                                    })
                                                }
                                            </Slider>
                                            {
                                                post.is_finish === false
                                                    ? <DisplayPostOptionContext.Provider value={{ setIsDisplayPostOption }}>
                                                        <PostDetailComment post={post} />
                                                    </DisplayPostOptionContext.Provider> : <ShipperInfoChosen post={post} />
                                            }
                                        </div>
                                    </React.Fragment>
                                }
                                return '';
                            })
                        }
                    </div>
                </div><br />
                <Link to="/post" className="see-another-page">SEE MY POST</Link>
            </div>
        </section>
    );

    function seeMoreAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "none";
        document.getElementById("see-more-auction-order-info-2").style.display = "block";
    }

    function seeLessAuctionInfo() {
        document.getElementById("see-more-auction-order-info-1").style.display = "inline-block";
        document.getElementById("see-more-auction-order-info-2").style.display = "none";
    }
}