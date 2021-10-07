import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthAPI, endpoints } from '../../API';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailTitle from './ShipperDetailTitle';
import '../shipper-detail.css';

export default function ShipperDetailInfo(props) {
    const [shipperList, setShipperList] = useState([]);
    const shipperID = parseInt(props.props.match.params.id, 10);

    useEffect(() => {
        async function getShipperList() {
            let res = await AuthAPI.get(endpoints['shippers']);
            setShipperList(res.data.results);
        }
        getShipperList();
    }, [shipperList]);

    return (
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
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                </React.Fragment>
                            }
                            return <React.Fragment key={index}></React.Fragment>;
                        })
                    }
                </div>
                <br /><br />
                <Link to="/shipper" className="see-another-page">SEE LIST OF SHIPPERS</Link>
            </div>
        </section>
    );
}