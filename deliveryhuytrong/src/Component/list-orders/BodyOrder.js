import React, { Component } from 'react';

class BodyOrder extends Component {
    render() {

        function show_info_post() {
            var x = document.getElementById("show-info-post");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

        return (
            <div>
                <section className="order_us_area" id="about">
                    <div className="container">
                        <div className="row page-title">
                        <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                            <div className="order_us_content_title">
                            <h2>list of orders</h2>
                            <h5>Prestigious delivery partner, high quality at an affordable price</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                            <div className="order_us_content_title">
                            <ul className="breadcrumbs">
                                <li><a href="/">home</a></li>
                                <li><a href="/list-orders">orders</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="order-bottom-area">
                    <div className="container">
                        <div className="row">
                        <h2>List of orders waiting to be auctioned</h2>
                        <div className="create-post">
                            <div className="create-post-left">
                            <div className="new-page-tab" onClick={show_info_post}>CREATE A NEW POST</div>
                            </div>
                            <div className="create-post-right" id="show-info-post">
                            <form>
                                <table>
                                <tbody><tr>
                                    <td>Order description:</td>
                                    <td><input type="text" defaultValue="" placeholder="Order description..." required /></td>
                                    </tr>
                                    <tr>
                                    <td>Image:</td>
                                    <td><input type="file" defaultValue="" placeholder="Other information..." required /></td>
                                    </tr>
                                    <tr>
                                    <td>Weight:</td>
                                    <td><input type="number" defaultValue="" placeholder="Weight..." required /></td>
                                    </tr>
                                    <tr>
                                    <td>Receiving address:</td>
                                    <td><input type="text" defaultValue="" placeholder="Receiving address..." required /></td>
                                    </tr>
                                    <tr>
                                    <td>Sending address:</td>
                                    <td><input type="text" defaultValue="" placeholder="Sending address..." required /></td>
                                    </tr>
                                    <tr>
                                    </tr><tr>
                                    <td colSpan={2}>
                                        <button>POST</button>
                                    </td>
                                    </tr>
                                </tbody></table>
                            </form>
                            </div>
                        </div>
                        <div className="table-order-list-area">
                            <table className="table-order-list">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Order description</th>
                                <th>Image</th>
                                <th>Weight (kg)</th>
                                <th>Receiving address</th>
                                <th>Sending address</th>
                                <th>Detailed information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Dĩa bánh cuốn nóng hổi</td>
                                <td>...</td>
                                <td>0.5</td>
                                <td>TPHCM</td>
                                <td>Long Xuyên</td>
                                <td><a href="/order-auction" target="_blank">Click to auction <span className="fas fa-info-circle" /></a></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Tô bò kho + 1 ổ bánh mì</td>
                                <td>...</td>
                                <td>1.0</td>
                                <td>Thừa Thiên Huế</td>
                                <td>Cà Mau</td>
                                <td><a href="/order-auction" target="_blank">Click to auction <span className="fas fa-info-circle" /></a></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="order-us-bottom-area">
                    <div className="container">
                        <div className="row">
                        <h2>List of orders have been auctioned</h2>
                        <br />
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                            <div className="single-order-us-bottom">
                            <h4>order name</h4>
                            <p>Customer's name</p>
                            <p>Order's information</p>
                            <p>Status: Waiting...</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BodyOrder;