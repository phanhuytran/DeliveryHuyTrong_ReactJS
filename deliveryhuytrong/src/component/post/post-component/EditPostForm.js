import React, { useEffect, useState } from 'react';
import '../post.css';
// import cookies from 'react-cookies';
import { AuthAPI, endpoints } from '../../API';

export default function EditPostForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState(props.description);
    const [weight, setWeight] = useState(props.weight);
    const [receivingAddress, setReceivingAddress] = useState(props.receivingAddress);
    const [sendingAddress, setSendingAddress] = useState(props.sendingAddress);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const image = React.createRef();

    useEffect(() => {
        async function getStockList() {
            let res = await AuthAPI.get(endpoints['stocks']);
            setStockList(res.data);
        }
        getStockList();
    }, [stockList]);

    const handleImageChange = e => {
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
            formData.append("image_items", files[i])
        }
        // formData.append("customer", cookies.load("user").id);
        formData.append("description", description);
        formData.append("weight", weight);
        formData.append("receive_stock", receivingAddress);
        formData.append("send_stock", sendingAddress);
        props.onSubmit(formData);
    }

    return (
        <form className="edit-form" onSubmit={onSubmit} encType="multipart/form-data">
            <h1 style={{ marginBottom: '11%' }}>EDIT POST</h1>
            <p>Order description:</p>
            <textarea cols={46} rows={5} placeholder="Please describe your order..." value={description} onChange={e => setDescription(e.target.value)} required />
            <p>Image:</p>
            <input type="file" ref={image} multiple onChange={handleImageChange} required />
            <div>{renderImages(selectedFiles)}</div>
            <p>Weight:</p>
            <input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
            <p>Sending address:</p>
            <select value={sendingAddress.id} onChange={e => setSendingAddress(e.target.value)} required>
                <option value="" disabled hidden></option>
                {
                    stockList.map((option_send, index) => {
                        return <option key={index} value={option_send.id}>{option_send.address}</option>
                    })
                }
            </select>
            <p>Receiving address:</p>
            <select value={receivingAddress.id} onChange={e => setReceivingAddress(e.target.value)} required>
                <option value="" disabled hidden></option>
                {
                    stockList.map((option_receive, index) => {
                        return <option key={index} value={option_receive.id}>{option_receive.address}</option>
                    })
                }
            </select><br />
            <button type="submit">Post</button><div style={{ marginBottom: '70px' }}></div>
        </form>
    );
}