import React, { useEffect, useState } from 'react';
import '../post.css';
import cookies from 'react-cookies';
import swal from 'sweetalert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { AuthAPI, endpoints } from '../../API';
import StockForm from './StockForm';

export default function PostForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');
    const [isDisplayPostForm, setIsDisplayPostForm] = useState(false);
    const [isDisplayStockForm, setIsDisplayStockForm] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isImage, setIsImage] = useState(false);
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
        setIsImage(true);
    }

    const renderImages = source => {
        return source.map((image) => {
            return <img className="upload-image-file" src={image} alt="img" key={image} />;
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        let files = image.current.files;
        for (let i = 0; i < files.length; i++) {
            formData.append("image_items", files[i])
        }
        formData.append("customer", cookies.load("user").id);
        formData.append("description", description);
        formData.append("weight", weight);
        formData.append("receive_stock", receivingAddress);
        formData.append("send_stock", sendingAddress);
        setIsDisplayPostForm(false);
        props.onSubmit(formData);
    }

    const changeSendingAddress = (e) => {
        if (e.target.value !== receivingAddress) {
            setSendingAddress(e.target.value)
        } else {
            swal('', 'The sending and receiving addresses are not allowed to be the same. Please select again!', 'error')
        }
    }

    const changeReceivingAddress = (e) => {
        if (e.target.value !== sendingAddress) {
            setReceivingAddress(e.target.value)
        } else {
            swal('', 'The sending and receiving addresses are not allowed to be the same. Please select again!', 'error')
        }
    }

    const selectOptionAddress = () => {
        return stockList && stockList.map((option, index) => {
            return <option key={index} value={option.id}>{option.address}</option>
        })
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
            <span className="create-stock">
                {
                    !isDisplayStockForm ? <AddCircleOutlineIcon onClick={onToggleStockForm} className="create-stock-icon" />
                        : <RemoveCircleOutlineSharpIcon onClick={onToggleStockForm} className="create-stock-icon" />
                }
                <span>Create stock</span>
            </span>
            {isDisplayPostForm ? <form onSubmit={onSubmit} encType="multipart/form-data">
                <table>
                    <tbody>
                        <tr><td colSpan={2} style={{ paddingBottom: '0' }}>Order description:</td></tr>
                        <tr>
                            <td colSpan={2} style={{ paddingRight: '0' }}><textarea cols={53} rows={5} placeholder="Please describe your order..." value={description} onChange={e => setDescription(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td><input type="file" ref={image} multiple onChange={handleImageChange} required /></td>
                        </tr>
                        {
                            isImage === true ? <tr><td colSpan={2} style={{ padding: '0 0 15px 15px' }}>{renderImages(selectedFiles)}</td></tr> : <></>
                        }
                        <tr>
                            <td>Weight:</td>
                            <td><input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td>Sending address:</td>
                            <td>
                                <select value={sendingAddress} onChange={changeSendingAddress} required>
                                    <option value="" disabled hidden></option>
                                    {selectOptionAddress()}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Receiving address:</td>
                            <td>
                                <select value={receivingAddress} onChange={changeReceivingAddress} required>
                                    <option value="" disabled hidden></option>
                                    {selectOptionAddress()}
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