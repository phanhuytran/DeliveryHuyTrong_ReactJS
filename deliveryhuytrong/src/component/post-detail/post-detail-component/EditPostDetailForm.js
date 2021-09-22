import React, { useEffect, useState } from 'react';
import '../../post/post.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AuthAPI, endpoints } from '../../API';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditPostDetailForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState(props.description);
    const [weight, setWeight] = useState(props.weight);
    const [receivingAddress, setReceivingAddress] = useState(props.receivingAddress.id + '');
    const [sendingAddress, setSendingAddress] = useState(props.sendingAddress.id + '');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDisPlayMessageStockError, setIsDisPlayMessageStockError] = useState(false);
    const [currentImage, setCurrentImage] = useState(false);
    const image = React.createRef();

    useEffect(() => {
        async function getStockList() {
            let res = await AuthAPI.get(endpoints['stocks']);
            setStockList(res.data);
        }
        if (stockList.length === 0) {
            getStockList();
        }
    }, [stockList]);

    const handleImageChange = e => {
        setCurrentImage(true)
        setSelectedFiles([]);
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
        }
    }

    const renderImages = source => {
        return source.map((image) => {
            return <img className="edit-upload-image-file" src={image} alt="img" key={image} />;
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        let files = image.current.files;
        for (let i = 0; i < files.length; i++) {
            if (currentImage === true) {
                formData.append("image_items", files[i])
            }
        }
        formData.append("description", description);
        formData.append("weight", weight);
        formData.append("receive_stock", receivingAddress);
        formData.append("send_stock", sendingAddress);
        props.onSubmit(formData);
    }

    const closeMessageStockErrorDialog = () => {
        setIsDisPlayMessageStockError(false);
    }

    const changeSendingAddress = (e) => {
        if (e.target.value !== receivingAddress) {
            setSendingAddress(e.target.value)
        } else {
            setIsDisPlayMessageStockError(true);
        }
    }

    const changeReceivingAddress = (e) => {
        if (e.target.value !== sendingAddress) {
            setReceivingAddress(e.target.value)
        } else {
            setIsDisPlayMessageStockError(true);
        }
    }

    const selectOptionAddress = () => {
        return stockList && stockList.map((option, index) => {
            return <option key={index} value={option.id}>{option.address}</option>
        })
    }

    return (
        <form className="edit-form" onSubmit={onSubmit} encType="multipart/form-data">
            <h1 style={{ marginBottom: '11%' }}>EDIT POST</h1>
            <p>Order description:</p>
            <textarea cols={46} rows={5} placeholder="Please describe your order..." value={description} onChange={e => setDescription(e.target.value)} required />
            <p>Image:</p>
            <input type="file" ref={image} multiple onChange={handleImageChange} />
            <div>{renderImages(selectedFiles)}</div>
            {
                currentImage === false ? <div>
                    {
                        props.image.map((img, index) => {
                            return <img className="edit-upload-image-file" src={img.image} alt="img" key={index} />
                        })
                    }
                </div> : <></>
            }
            <p>Weight:</p>
            <input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
            <p>Sending address:</p>
            <select value={sendingAddress} onChange={changeSendingAddress} required>{selectOptionAddress()}</select>
            <p>Receiving address:</p>
            <select value={receivingAddress} onChange={changeReceivingAddress} required>{selectOptionAddress()}</select><br />
            <button type="submit">Edit</button><div style={{ marginBottom: '100px' }}></div>
            {
                isDisPlayMessageStockError ? <Dialog
                    open={isDisPlayMessageStockError}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={closeMessageStockErrorDialog}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle style={{ textAlign: 'center' }}><HighlightOffIcon style={{ fontSize: 50, color: '#dc3545' }} /></DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: 14 }}>
                            The sending and receiving addresses are not allowed to be the same.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ fontSize: 14 }} onClick={closeMessageStockErrorDialog}>Ok</Button>
                    </DialogActions>
                </Dialog> : <></>
            }
        </form>
    );
}