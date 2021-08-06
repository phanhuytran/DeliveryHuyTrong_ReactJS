import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailTitle from './ShipperDetailTitle';

class ShipperDetailRating extends Component {
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
                        <ShipperDetailTitle />
                        <div className="shipper-info">
                            <div className="shipper-info-left wow bounceIn">
                                <img src="img/visa.png" alt="img" />
                            </div>
                            <div className="shipper-info-right">
                                <form>
                                    <table>
                                        <tbody>
                                            <ShipperDetailPersonalInfo />
                                            <tr>
                                                <th rowSpan={2}>
                                                    <h3>RATING:</h3>
                                                    <p className="community-rating">Community's rating: ?</p>
                                                </th>
                                                <td className="text-right">
                                                    <div id="rating">
                                                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                                                        <label className="full" htmlFor="star5" title="5 stars" />
                                                        <input type="radio" id="star4" name="rating" defaultValue={4} />
                                                        <label className="full" htmlFor="star4" title="4 stars" />
                                                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                                                        <label className="full" htmlFor="star3" title="3 stars" />
                                                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                                                        <label className="full" htmlFor="star2" title="2 stars" />
                                                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                                                        <label className="full" htmlFor="star1" title="1 star" />
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
                        <a className="new-page-tab"><Link to="/shipper">SEE LIST OF SHIPPERS</Link></a>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperDetailRating;