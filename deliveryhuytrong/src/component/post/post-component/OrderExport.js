import React from 'react';
import ReactToPrint from "react-to-print";
import '../post.css';
import cashIMG from '../../post-detail/image/cash.png';
import momoIMG from '../../post-detail/image/momo.png';
import zaloPayIMG from '../../post-detail/image/zalo-pay.png';

class OrderPrint extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="order-export">
                <h1>ORDER DETAILS</h1>
                <p>Customer:<span style={{ fontSize: 20 }}>{this.props.props.props.auction_win.post.customer.first_name} {this.props.props.props.auction_win.post.customer.last_name}</span></p>
                <p>Description:<span>{this.props.props.props.auction_win.post.description}</span></p>
                <p>Weight:<span>{this.props.props.props.auction_win.post.weight} kg</span></p>
                <p>Sending address:<span>{this.props.props.props.auction_win.post.send_stock.address}</span></p>
                <p>Sending address information:<span>{this.props.props.props.auction_win.post.send_stock.name_represent_man} - {this.props.props.props.auction_win.post.send_stock.phone}</span></p>
                <p>Receiving address:<span>{this.props.props.props.auction_win.post.receive_stock.address}</span></p>
                <p>Receiving address information:<span>{this.props.props.props.auction_win.post.receive_stock.name_represent_man} - {this.props.props.props.auction_win.post.receive_stock.phone}</span></p>
                <hr />
                <p>Cost:<span style={{ fontSize: 20 }}>{currencyFormat((this.props.props.props.auction_win.cost).slice(0, -3))} VND</span></p>
                <p>Pay method:
                    {
                        this.props.props.props.pay_method === 'Zalo pay' ? <span style={{ fontSize: 18 }}>Zalo pay<img src={zaloPayIMG} alt="pay-method" /></span> : '' ||
                            this.props.props.props.pay_method === 'Momo' ? <span style={{ fontSize: 18 }}>Momo<img src={momoIMG} alt="pay-method" /></span> : '' ||
                                this.props.props.props.pay_method === 'Cash' ? <span style={{ fontSize: 18 }}>Cash<img src={cashIMG} alt="pay-method" /></span> : ''
                    }
                </p>
            </div>
        );

        function currencyFormat(num) {
            return num.split('').reverse().reduce((prev, next, index) => {
                return ((index % 3) ? next : (next + ',')) + prev;
            })
        }
    }
}

export default class OrderExport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <button className="btn-order-export"><i className="fas fa-print"></i></button>}
                    content={() => this.componentRef}
                />
                <OrderPrint ref={(el) => (this.componentRef = el)} props={this.props} />
            </div >
        );
    }
}