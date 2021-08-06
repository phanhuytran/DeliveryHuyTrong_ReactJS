import React from 'react';
import { Link } from 'react-router-dom';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailRating from './ShipperDetailRating';
import ShipperDetailTitle from './ShipperDetailTitle';

class ShipperDetailInfo extends React.Component {
    render() {
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
                                            <ShipperDetailRating />
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <Link to="/shipper">SEE LIST OF SHIPPERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperDetailInfo;