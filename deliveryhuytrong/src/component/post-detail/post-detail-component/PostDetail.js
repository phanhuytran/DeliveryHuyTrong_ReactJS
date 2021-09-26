import React, { useEffect, useState } from 'react';
import "../post-detail.css";
import moment from 'moment';
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
import EditPostDetailForm from './EditPostDetailForm';
import EditPostDetailErrorDialog from './EditPostDetailErrorDialog';
import PostInformation from './PostInformation';

export let PostInfoContext = React.createContext();
export let EditPostDetailErrorDialogContext = React.createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostDetail(props) {
    const [postList, setPostList] = useState([]);
    const [isDisplayPostOption, setIsDisplayPostOption] = useState(false);
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [isDisplayOpenRemovePostDialog, setIsDisplayOpenRemovePostDialog] = useState(false);
    const [isDisplayMessageEditError, setIsDisplayMessageEditError] = useState(false);

    const orderID = parseInt(props.props.match.params.id, 10);
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
        }).then((res) => {
            console.log(res);
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
            setIsDisplayPostOption(false);
        }).catch((err) => {
            console.log(err.response.data);
            if (err.response.data.detail) {
                setIsDisplayMessageEditError(true);
            }
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
                                                    <p onClick={() => setModalEditIsOpen(true)}><i className="fas fa-edit" style={{ marginRight: '5px' }}></i>Edit</p>
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
                                                    <p onClick={openRemovePostDialog}><i className="fas fa-trash-alt" style={{ margin: ' 0 8px 0 1px' }}></i>Remove</p>
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
                                        <PostInfoContext.Provider value={{ post, setIsDisplayPostOption }}>
                                            <PostInformation />
                                        </PostInfoContext.Provider>
                                    </React.Fragment>
                                }
                                return '';
                            })
                        }
                    </div>
                </div><br />
                <Link to="/post" className="see-another-page">SEE MY POST</Link>
            </div>
            {
                isDisplayMessageEditError
                    ? <EditPostDetailErrorDialogContext.Provider value={{ isDisplayMessageEditError, closeMessageEditErrorDialog }}>
                        <EditPostDetailErrorDialog />
                    </EditPostDetailErrorDialogContext.Provider> : <></>
            }
        </section>
    );
}