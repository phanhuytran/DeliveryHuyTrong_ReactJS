import React, { Component } from 'react';

class BodyShipperDetail extends Component {
    render() {

        function cofirm_rating() {
            var checkbox = document.getElementsByName("rating");
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked === true) {
                    document.getElementById("result-confirm-rating").innerHTML = "Your rating: " + checkbox[i].value;
                    document.getElementById("btn-confirm-rating").style.color = "#1cb33c";
                }
            }
        }

        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <div className="row page-title">
                            <div className="col-md-5 col-sm-6">
                                <div className="pricing-desc section-padding-two">
                                    <div className="pricing-desc-title">
                                        <div className="title">
                                            <h2>personal information</h2>
                                            <p>Prestigious delivery partner, high quality at an affordable price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                                <div className="shipper_content_title">
                                    <ul className="breadcrumbs">
                                        <li><a href="/">home</a></li>
                                        <li><a href="/shipper-detail">shipper detail</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="shipper-info">
                            <div className="shipper-info-left wow bounceIn">
                                <img src="img/visa.png" alt="img" />
                            </div>

                            <div className="shipper-info-right">
                                <form>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Full name:</td>
                                                <td colSpan={2} className="text-right shipper-highlight-info">Do Trong Nguyen</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td colSpan={2} className="text-right">Gay</td>
                                            </tr>
                                            <tr>
                                                <td>ID card:</td>
                                                <td colSpan={2} className="text-right">025832688</td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td colSpan={2} className="text-right">Binh Thuan Province</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td colSpan={2} className="text-right">1851050159trong@ou.edu.vn</td>
                                            </tr>
                                            <tr>
                                                <td>Phone:</td>
                                                <td colSpan={2} className="text-right shipper-highlight-info">(+84) 77 5398 511</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan={2}>
                                                    <h3>RATING:</h3>
                                                    <p className="community-rating">Community's rating: ?</p>
                                                </th>
                                                <td className="text-right">
                                                    <div id="rating">
                                                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                                                        <label className="full" htmlFor="star5" title="5 stars" />
                                                        <input type="radio" id="star4half" name="rating" defaultValue="4.5" />
                                                        <label className="half" htmlFor="star4half" title="4.5 stars" />
                                                        <input type="radio" id="star4" name="rating" defaultValue={4} />
                                                        <label className="full" htmlFor="star4" title="4 stars" />
                                                        <input type="radio" id="star3half" name="rating" defaultValue="3.5" />
                                                        <label className="half" htmlFor="star3half" title="3.5 stars" />
                                                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                                                        <label className="full" htmlFor="star3" title="3 stars" />
                                                        <input type="radio" id="star2half" name="rating" defaultValue="2.5" />
                                                        <label className="half" htmlFor="star2half" title="2.5 stars" />
                                                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                                                        <label className="full" htmlFor="star2" title="2 stars" />
                                                        <input type="radio" id="star1half" name="rating" defaultValue="1.5" />
                                                        <label className="half" htmlFor="star1half" title="1.5 stars" />
                                                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                                                        <label className="full" htmlFor="star1" title="1 star" />
                                                        <input type="radio" id="starhalf" name="rating" defaultValue="0.5" />
                                                        <label className="half" htmlFor="starhalf" title="0.5 stars" />
                                                    </div>
                                                </td>
                                                <td className="text-right col-confirm-rating">
                                                    <a onClick={cofirm_rating} id="btn-confirm-rating" className="fas fa-check-circle" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <p id="result-confirm-rating">Please rate the shipper!</p>
                                                    <textarea rows={3} cols={28} placeholder="Your message..." defaultValue={""} /><br />
                                                    <button>SEND</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <a className="new-page-tab" href="/shipper">SEE LIST OF SHIPPERS</a>
                    </div>
                </section>
                <section className="owl-customer-comment">
                    <h3>CUSTOMER'S OPINION ABOUT SHIPPERS</h3><br /><br />
                    <div className="owl-carousel owl-theme">
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                        <div className="owl-customer-comment-detail">
                            <img src="img/item_icon.png" alt="img" />
                            <h4>Customer's Name</h4>
                            <p>Great job. Thank you so much, Mr. Shipper is very handsome &lt;3!!!</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BodyShipperDetail;