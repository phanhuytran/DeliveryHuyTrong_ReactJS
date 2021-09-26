import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import * as _ from "lodash";
import moment from 'moment';
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
import OrderAuctionedList from './OrderAuctionedList';
import EditPostErrorDialog from './EditPostErrorDialog';
import PostInformation from './PostInformation';
// import PostComment from './PostComment';

export let EditPostErrorDialogContext = React.createContext();
export let PostInformationContext = React.createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post() {
    const [postList, setPostList] = useState([]);
    const [hiddenPostOption, setHiddenPostOption] = useState({});
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [isDisplayRemovePostDialog, setIsDisplayOpenRemovePostDialog] = useState(false);
    const [isDisplayMessageEditError, setIsDisplayMessageEditError] = useState(false);

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

    let result;
    if (postList.length === 0) {
        result = <div className="post-list-null"><p>Post not found</p></div>
    }

    async function createPost(data) {
        let post = postList;
        AuthAPI.post(endpoints['posts'], data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.response.data);
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
            setIsDisplayOpenRemovePostDialog(false);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    const closeMessageEditErrorDialog = () => {
        setIsDisplayMessageEditError(false);
    }

    async function editPost(id, data) {
        let post = postList;
        AuthAPI.patch(endpoints['posts'] + id + '/', data, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            }
        }).then((res) => {
            console.log(res);
            setPostList(post);
            setModalEditIsOpen(false);
            setHiddenPostOption({});
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.detail) {
                setIsDisplayMessageEditError(true);
            }
        })
    }

    const closeEditPostModal = () => {
        setModalEditIsOpen(false);
        setHiddenPostOption({});
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
                                                    <p>
                                                        <strong>{post.customer.username}</strong>
                                                        {
                                                            post.is_finish === true
                                                                ? <>
                                                                    <i className="fas fa-check-circle credited-order">
                                                                        <span className="tool-tip-text">This order has been have the shipper</span>
                                                                    </i>
                                                                </> : <></>
                                                        }
                                                        <br />
                                                        <span>{moment(post.created_date, "YYYYMMDD").fromNow()}</span>
                                                    </p>
                                                </div>
                                                <div className="post-content-header-right">
                                                    {
                                                        post.is_finish === false ? <p onClick={() => onTogglePostOption(index)}>
                                                            <span><i className="fas fa-ellipsis-h"></i></span>
                                                        </p> : <></>
                                                    }
                                                    {!hiddenPostOption[index] && <></>} {
                                                        hiddenPostOption[index] && <div className="post-option">
                                                            <p onClick={() => setModalEditIsOpen(true)}><i className="fas fa-edit" style={{ marginRight: '5px' }}></i>Edit</p>
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
                                                            <p onClick={openRemovePostDialog}><i className="fas fa-trash-alt" style={{ margin: ' 0 8px 0 1px' }}></i>Remove</p>
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
                                                <PostInformationContext.Provider value={{ post, index }}>
                                                    <PostInformation />
                                                </PostInformationContext.Provider>
                                                {/* <PostComment post={post} /> */}
                                                <br /><br />
                                                <div style={{ textAlign: 'center', margin: '0 auto' }}>
                                                    <Link className="click-auction-confirm" to={"post-detail/" + post.id}>
                                                        {
                                                            post.is_finish === false ? <>Click to auction confirmation</> : <>Order details</>
                                                        }
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                })
                            }
                            {result}
                        </> : <OrderAuctionedList />
                    }
                </div>
            </div>
            {
                isDisplayMessageEditError
                    ? <EditPostErrorDialogContext.Provider value={{ isDisplayMessageEditError, closeMessageEditErrorDialog }}>
                        <EditPostErrorDialog />
                    </EditPostErrorDialogContext.Provider> : <></>
            }
        </div>
    );
}