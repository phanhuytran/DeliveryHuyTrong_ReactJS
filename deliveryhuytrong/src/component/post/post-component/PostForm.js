import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { AuthAPI, endpoints } from '../../API';
import StockForm from './StockForm';
// import axios from 'axios';

export default function PostForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');
    const [isDisplayPostForm, setIsDisplayPostForm] = useState(false);
    const [isDisplayStockForm, setIsDisplayStockForm] = useState(false);
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
            return <img className="upload-image-file" src={image} alt="img" key={image} />;
        })
    }

    function onSubmit(event) {
        event.preventDefault();
        var files = event.target[1].files;
        console.log(files)
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file[]', files[i])
            console.log(formData.append('file[]', files[i]))
        }
        // axios({
        //     url: 'http://127.0.0.1:8000/posts/',
        //     method: 'POST',
        //     data: formData
        // })

        console.log(formData)

        let item = {
            customer: user.id,
            description: description,
            weight: weight,
            // image_items: {
            //     image: formData,
            //     // post:
            // },
            receive_stock: receivingAddress,
            send_stock: sendingAddress,
        }
        setIsDisplayPostForm(false);
        props.onSubmit(item);
    }

    async function createStock(data) {
        let stock = stockList;
        await AuthAPI.post(endpoints['stocks'], data);
        setStockList(stock);
        setIsDisplayStockForm(false);
    }

    return (
        <div className="post-form">
            <button onClick={onTogglePostForm}>
                {!isDisplayPostForm ? <span>Create a new post</span> : <span>Close</span>}
            </button>
            <span className="add-stock">
                {
                    !isDisplayStockForm ? <AddCircleOutlineIcon onClick={onToggleStockForm} style={{ fontSize: 20 }} className="add-stock-icon" />
                    : <RemoveCircleOutlineSharpIcon onClick={onToggleStockForm} style={{ fontSize: 20 }} className="add-stock-icon" />
                }
                <span>Add stock</span>
            </span>
            {isDisplayPostForm ? <form onSubmit={onSubmit} encType="multipart/form-data">
                <table>
                    <tbody>
                        <tr>
                            <td>Order description:</td>
                            <td><input type="text" placeholder="Order description..." value={description} onChange={e => setDescription(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td><input type="file" id="file" name="file[]" multiple onChange={handleImageChange} /></td>
                        </tr>
                        <tr><td colSpan={2}>{renderImages(selectedFiles)}</td></tr>
                        <tr>
                            <td>Weight:</td>
                            <td><input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td>Sending address:</td>
                            <td>
                                <select value={sendingAddress} onChange={e => setSendingAddress(e.target.value)} required>
                                    <option value="" disabled hidden></option>
                                    {
                                        stockList.map((option_send, index) => {
                                            return <option key={index} value={option_send.id}>{option_send.address}</option>
                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Receiving address:</td>
                            <td>
                                <select value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required>
                                    <option value="" disabled hidden></option>
                                    {
                                        stockList.map((option_receive, index) => {
                                            return <option key={index} value={option_receive.id}>{option_receive.address}</option>
                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr><td colSpan={2}><button type="submit">Post</button></td></tr>
                    </tbody>
                </table>
            </form> : ''
            }
            {isDisplayStockForm ? <StockForm onSubmit={createStock} /> : ''}
        </div>
    );

    function onTogglePostForm() {
        setIsDisplayPostForm(toggle => !toggle);
        setIsDisplayStockForm(false);
    }

    function onToggleStockForm() {
        setIsDisplayStockForm(toggle => !toggle);
        setIsDisplayPostForm(false);
    }
}