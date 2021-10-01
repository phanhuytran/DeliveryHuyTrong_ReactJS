import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Slide from '@mui/material/Slide';
import { EditPostErrorDialogContext } from '../Post';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditPostErrorDialog() {
    const message = useContext(EditPostErrorDialogContext);
    return (
        <Dialog
            open={message.isDisplayMessageEditError}
            TransitionComponent={Transition}
            keepMounted
            onClose={message.closeMessageEditErrorDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle style={{ textAlign: 'center' }}>
                <HighlightOffIcon style={{ fontSize: 50, color: '#dc3545' }} />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                    Your order has been auctioned by the shipper. You cannot edit this order
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button style={{ fontSize: 14 }} onClick={message.closeMessageEditErrorDialog}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}