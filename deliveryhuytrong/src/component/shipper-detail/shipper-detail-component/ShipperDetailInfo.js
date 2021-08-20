import React, { useState } from 'react';
import '../shipper-detail.css';
import { Link, useHistory } from 'react-router-dom';
import { remove } from 'lodash';
import swal from 'sweetalert';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailRating from './ShipperDetailRating';
import ShipperDetailTitle from './ShipperDetailTitle';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

export default function ShipperDetailInfo(props) {
    const [shipperList, setShipperList] = useState(shipperListData);
    const shipperID = parseInt(props.props.match.params.id, 10);
    const history = useHistory();

    function removeShipper(id) {
        let shipper = shipperList;
        swal({
            title: "Do you want to remove this shipper?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willRemove) => {
            if (willRemove) {
                remove(shipper, (item) => {
                    return item.id === id;
                });
                setShipperList(shipper);
                swal("This shipper was removed successfully!", { icon: "success" });
                history.goBack();
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

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
                                            <button>edit</button>
                                            <button onClick={() => removeShipper(shipperID)}>remove</button>
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