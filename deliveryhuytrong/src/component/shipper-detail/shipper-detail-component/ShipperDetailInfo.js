import React from 'react';
import '../shipper-detail.css';
import { Link } from 'react-router-dom';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailRating from './ShipperDetailRating';
import ShipperDetailTitle from './ShipperDetailTitle';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

class ShipperDetailInfo extends React.Component {
    render() {

        var shipperID = parseInt(this.props.props.match.params.id, 10);

        return (
            <div>
                <section className="about_top">
                    <div className="container">
                        <ShipperDetailTitle />
                        <div className="shipper-info">
                            <div className="shipper-info-left wow bounceIn">
                                {
                                    shipperListData.map((value, index) => {
                                        if (value.id === shipperID) {
                                            return <img key={index} src={value.image} alt="img" />
                                        }
                                        return '';
                                    })
                                }
                            </div>
                            <div className="shipper-info-right">
                                <form>
                                    <table>
                                        <tbody>
                                            <ShipperDetailPersonalInfo props={this.props.props} />
                                            <ShipperDetailRating />
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                        <Link to="/shipper" className="see-another-page">SEE LIST OF SHIPPERS</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default ShipperDetailInfo;