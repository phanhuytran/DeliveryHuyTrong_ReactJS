import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import { AuthAPI, endpoints } from '../../API';

export default function EditPostForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

    let user = cookies.load("user");

    useEffect(() => {
        AuthAPI.get(endpoints['stocks']).then(res => (
            setStockList(res.data.results)
        ));
    }, []);

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

    function onSubmit(event) {
        event.preventDefault();
        let item = {
            customer: user.id,
            description: description,
            weight: weight,
            receive_stock: receivingAddress,
            send_stock: sendingAddress,
        }
        props.onSubmit(item);
    }

    return (
        <form className="edit-form" onSubmit={onSubmit} encType="multipart/form-data">
            <h1>EDIT POST</h1>
            <p>Order description:</p>
            <input type="text" placeholder="Order description..." value={description} onChange={e => setDescription(e.target.value)} required />
            <p>Image:</p>
            <input type="file" id="file" name="file[]" multiple onChange={handleImageChange} />
            <div>{renderImages(selectedFiles)}</div>
            <p>Weight:</p>
            <input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
            <p>Sending address:</p>
            <select value={sendingAddress} onChange={e => setSendingAddress(e.target.value)} required>
                <option value="" disabled hidden></option>
                {
                    stockList.map((option_send, index) => {
                        return <option key={index} value={option_send.id}>{option_send.address}</option>
                    })
                }
            </select>
            <p>Receiving address:</p>
            <select value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required>
                <option value="" disabled hidden></option>
                {
                    stockList.map((option_receive, index) => {
                        return <option key={index} value={option_receive.id}>{option_receive.address}</option>
                    })
                }
            </select><br/>
            <button type="submit">Post</button><div className="eidt-button-side"></div>
        </form>
    );
}