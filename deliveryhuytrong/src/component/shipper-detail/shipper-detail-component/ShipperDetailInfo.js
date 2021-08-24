import React, { useState } from 'react';
import '../shipper-detail.css';
import { Link } from 'react-router-dom';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailRating from './ShipperDetailRating';
import ShipperDetailTitle from './ShipperDetailTitle';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

export default function ShipperDetailInfo(props) {
    const [shipperList] = useState(shipperListData);
    const shipperID = props.props.match.params.id;

    return (
        <div>
            <section className="about_top">
                <div className="container">
                    <ShipperDetailTitle />
                    <div className="shipper-info">
                        {
                            shipperList.map((value, index) => {
                                if (value.id === shipperID) {
                                    return <React.Fragment key={index}>
                                        <div className="shipper-info-left wow bounceIn">
                                            <img src={value.avatar} alt="img" /><br />
                                        </div><br />
                                        <div className="shipper-info-right">
                                            <form>
                                                <table>
                                                    <tbody>
                                                        <ShipperDetailPersonalInfo props={props.props} />
                                                        <ShipperDetailRating />
                                                    </tbody>
                                                </table>
                                            </form>
                                        </div>
                                    </React.Fragment>
                                }
                                return '';
                            })
                        }
                    </div>
                    <Link to="/shipper" className="see-another-page">SEE LIST OF SHIPPERS</Link>
                </div>
            </section>
        </div>
    );
}