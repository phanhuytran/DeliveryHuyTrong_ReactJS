import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { MessageShipperRatingErrorContext } from '../ShipperRating';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MessageShipperRatingErrorDialog() {
    const message = useContext(MessageShipperRatingErrorContext);
    return (
        <Dialog
            open={message.isDisplayMessageShipperRatingError}
            TransitionComponent={Transition}
            keepMounted
            onClose={message.closeMessageShipperRatingErrorDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle style={{ textAlign: 'center' }}><HighlightOffIcon style={{ fontSize: 50, color: '#dc3545' }} /></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                    Ensure this value is between 1 and 5
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button style={{ fontSize: 14 }} onClick={message.closeMessageShipperRatingErrorDialog}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}