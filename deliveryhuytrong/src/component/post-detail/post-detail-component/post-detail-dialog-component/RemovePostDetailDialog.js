import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { AuthAPI, endpoints } from '../../../API';
import { RemovePostDetailContext } from '../PostDetail';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RemovePostDetailDialog() {
    const history = useHistory();
    const option = useContext(RemovePostDetailContext);

    function removePost(id) {
        let post = option.postList;
        AuthAPI.delete(endpoints['posts'] + id).then((res) => {
            console.log(res);
            option.setPostList(post);
            option.setIsDisplayPostOption(false);
            history.push('/post');
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    return (
        <Dialog
            open={option.isDisplayOpenRemovePostDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={option.closeRemovePostDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle style={{ color: '#5D5D5D' }}>{"Do you want to remove this post?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                    You will no longer see this post if you press REMOVE.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button style={{ fontSize: 14 }} onClick={option.closeRemovePostDialog}>Cancel</Button>
                <Button style={{ fontSize: 14 }} onClick={() => removePost(option.post.id)}>Remove</Button>
            </DialogActions>
        </Dialog>
    );
}