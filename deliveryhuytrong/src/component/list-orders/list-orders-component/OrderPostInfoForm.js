import React from 'react';

class OrderPostInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image: '',
            weight: 0,
            receivingAddress: '',
            sendingAddress: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     let item = {
    //         description: this.state.description,
    //         image: this.state.image,
    //         weight: this.state.weight,
    //         receivingAddress: this.state.receivingAddress,
    //         sendingAddress: this.state.sendingAddress,
    //     }
    //     this.props.onSubmit(item);
    // }

    render() {
        return (
            <div className="create-post-right">
                {/* <form onSubmit={this.onSubmit.bind(this)}> */}
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Order description:</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Order description..."
                                        required
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Image:</td>
                                <td>
                                    <input
                                        type="file"
                                        placeholder="Other information..."
                                        multiple
                                        name="image"
                                        onChange={this.onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <td>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Weight..."
                                        required
                                        name="weight"
                                        value={this.state.weight}
                                        onChange={this.onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Receiving address:</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Receiving address..."
                                        required
                                        name="receivingAddress"
                                        value={this.state.receivingAddress}
                                        onChange={this.onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Sending address:</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Sending address..."
                                        required
                                        name="sendingAddress"
                                        value={this.state.sendingAddress}
                                        onChange={this.onChange}
                                    />
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
}

export default OrderPostInfoForm;