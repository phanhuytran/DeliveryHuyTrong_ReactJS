import React from 'react';
import OrderPostInfoForm from './OrderPostInfoForm';
import orderListNotYetAuctionedData from './OrderListNotYetAuctionedData';
const { v4: uuidv4 } = require('uuid');

class OrderPostInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisplayPostInfoForm: false,
            orderNotYetAuctioned: orderListNotYetAuctionedData
        }
        localStorage.setItem('orderNotYetAuctioned', JSON.stringify(this.state.orderNotYetAuctioned))
    }

    // componentWillMount() {
    //     if (localStorage && localStorage.getItem('orderNotYetAuctioned')) {
    //         var od = JSON.parse(localStorage.getItem('orderNotYetAuctioned'));
    //         this.setState({
    //             orderNotYetAuctioned: od
    //         });
    //     }
    // }

    onTogglePostInfoForm = () => {
        this.setState({
            isDisplayPostInfoForm: !this.state.isDisplayPostInfoForm
        });
    }

    onSubmit = (data) => {
        let {orderNotYetAuctioned} = this.state;
        orderNotYetAuctioned.push({
            id: uuidv4(),
            description: data.description,
            image: data.image,
            weight: data.weight,
            receivingAddress: data.receivingAddress,
            sendingAddress: data.sendingAddress,
            customer: "",
            createdDate: "",
            updatedDate: "",
            isActive: true,
        });

        this.setState({
            isDisplayPostInfoForm: false,
            orderNotYetAuctioned: orderListNotYetAuctionedData
        });
        console.log(this.state.orderNotYetAuctioned);
        localStorage.setItem('orderNotYetAuctioned', JSON.stringify(orderNotYetAuctioned));

    }

    render() {

        var { isDisplayPostInfoForm } = this.state;
        var elementPostInfoForm = isDisplayPostInfoForm
            ? <OrderPostInfoForm onSubmit={this.onSubmit} />
            : '';

        return (
            <div>
                <h2>List of orders waiting to be auctioned</h2>
                <div className="create-post">
                    <div className="create-post-left">
                        <div className="new-page-tab" onClick={this.onTogglePostInfoForm}>
                            {
                                !isDisplayPostInfoForm ? <span>CREATE A NEW POST</span> : <span>CLOSE</span>
                            }
                        </div>
                    </div>
                    {elementPostInfoForm}
                </div>
            </div>
        );
    }
}

export default OrderPostInfo;