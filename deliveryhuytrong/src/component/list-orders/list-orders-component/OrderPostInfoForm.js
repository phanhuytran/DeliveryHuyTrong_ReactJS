import React, { useState } from 'react';

export default function OrderPostInfoForm(props) {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [weight, setWeight] = useState(0);
    const [receivingAddress, setReceivingAddress] = useState('');
    const [sendingAddress, setSendingAddress] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        let item = {
            description: description,
            image: image,
            weight: weight,
            receivingAddress: receivingAddress,
            sendingAddress: sendingAddress,
        }
        props.onSubmit(item);
    }

    return (
        <div className="create-post-right">
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
                                <input type="file" placeholder="Other information..." multiple value={image} onChange={e => setImage(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td>
                                <input type="number" min="0" placeholder="Weight..." value={weight} onChange={e => setWeight(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Receiving address:</td>
                            <td>
                                <input type="text" placeholder="Receiving address..." value={receivingAddress} onChange={e => setReceivingAddress(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Sending address:</td>
                            <td>
                                <input type="text" placeholder="Sending address..." value={sendingAddress} onChange={e => setSendingAddress(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                        </tr><tr>
                            <td colSpan={2}>
                                <button type="submit">POST</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}