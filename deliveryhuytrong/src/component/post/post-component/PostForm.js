import React, { useContext, useEffect, useState } from 'react';
import cookies from 'react-cookies';
import { UserContext } from '../../../App';
import { AuthAPI, endpoints } from '../../API';
import '../post.css';

export default function PostForm(props) {
    const [stockList, setStockList] = useState([]);
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');
    const [isDisplayPostForm, setIsDisplayPostForm] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

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

    useEffect(() => {
        AuthAPI.get(endpoints['stocks']).then(res => (
            setStockList(res.data.results)
        ));
    }, []);

    function onTogglePostForm() { setIsDisplayPostForm(toggle => !toggle); }

    function onSubmit(event) {
        event.preventDefault();
        var files = event.target[1].files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file[]', files[i])
        }
        let item = {
            description: description,
            weight: weight,
            image: [
                selectedFiles
            ],
            receive_stock: receivingAddress,
            send_stock: sendingAddress,
        }
        setIsDisplayPostForm(false);
        props.onSubmit(item);
    }

    const auth = useContext(UserContext);
    let user = auth.user;
    let r = <select value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required>
        <option value="" disabled hidden></option>
    </select>
    if (cookies.load("user") != null) {
        user = cookies.load("user");
    }
    if (user != null) {
        r = <select value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required>
            <option value="" disabled hidden></option>
            {
                stockList.map((option_rec, index) => {
                    return <option key={index} value={option_rec.id}>{option_rec.address}</option>
                })
            }
        </select>
    }

    return (
        <div className="post-form">
            <button onClick={onTogglePostForm}>
                {!isDisplayPostForm ? <span>CREATE A NEW POST</span> : <span>CLOSE</span>}
            </button>
            {isDisplayPostForm ?
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <table>
                        <tbody>
                            <tr>
                                <td>Order description:</td>
                                <td>
                                    <input type="text" placeholder="Order description..." value={description} onChange={e => setDescription(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Image:</td>
                                <td>
                                    <input type="file" id="file" name="file[]" multiple onChange={handleImageChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>{renderImages(selectedFiles)}</td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>
                                    <input type="number" min="0" step="0.01" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
                                </td>
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
                                    {r}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="submit">POST</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> : ''
            }
        </div>
    );
}