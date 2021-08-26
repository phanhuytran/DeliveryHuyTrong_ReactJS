import React, { useState } from 'react';
// import API, { endpoints } from '../../API';
import '../post.css';

export default function PostForm(props) {
    // const [postList, setPostList] = useState([]);
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');
    const [isDisplayPostForm, setIsDisplayPostForm] = useState(false);

    // useEffect(() => {
    //     API.get(endpoints['posts']).then(res => (
    //         setPostList(res.data.results)
    //     ));
    // }, []);

    function onTogglePostForm() { setIsDisplayPostForm(toggle => !toggle); }
    function onSubmit(event) {
        event.preventDefault();
        let item = {
            description: description,
            // image: image,
            weight: weight,
            receive_stock: receivingAddress,
            send_stock: sendingAddress,
        }
        props.onSubmit(item);
    }

    return (
        <div className="post-form">
            <button onClick={onTogglePostForm}>
                {!isDisplayPostForm ? <span>CREATE A NEW POST</span> : <span>CLOSE</span>}
            </button>
            {isDisplayPostForm ?
                <form onSubmit={onSubmit}>
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
                                    <input type="file" placeholder="Other information..." multiple />
                                    {/* <input type="file" placeholder="Other information..." multiple value={image} onChange={e => setImage(e.target.value)} required /> */}
                                </td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>
                                    <input type="number" min="0" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Sending address:</td>
                                <td>
                                    <input type="text" placeholder="Sending address..." value={sendingAddress} onChange={e => setSendingAddress(e.target.value)} required />
                                    {/* <select value={sendingAddress} onChange={e => setSendingAddress(e.target.value)} required>
                                        <option value="" disabled hidden></option>
                                        {
                                            postList.map((option_send, index) => {
                                                return <option key={index} value={option_send.index}>{option_send.send_stock.address}</option>
                                            })
                                        }
                                    </select> */}
                                </td>
                            </tr>
                            <tr>
                                <td>Receiving address:</td>
                                <td>
                                    <input type="text" placeholder="Receiving address..." value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required />
                                    {/* <select value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required>
                                        <option value="" disabled hidden></option>
                                        {
                                            postList.map((option_rec, index) => {
                                                return <option key={index} value={option_rec.index}>{option_rec.receive_stock.address}</option>
                                            })
                                        }
                                    </select> */}
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