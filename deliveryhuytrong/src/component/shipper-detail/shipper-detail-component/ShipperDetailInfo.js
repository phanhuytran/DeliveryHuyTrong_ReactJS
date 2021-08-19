import React from 'react';
import '../shipper-detail.css';
import { Link } from 'react-router-dom';
import { remove } from 'lodash';
import swal from 'sweetalert';
import ShipperDetailPersonalInfo from './ShipperDetailPersonalInfo';
import ShipperDetailRating from './ShipperDetailRating';
import ShipperDetailTitle from './ShipperDetailTitle';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

class ShipperDetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipperList: shipperListData,
        }
    }

    removeShipper = (id) => {
        let shipperList = this.state.shipperList;
        swal({
            title: "Do you want to remove this shipper?",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willRemove) => {
            if (willRemove) {
                remove(shipperList, (item) => {
                    return item.id === id;
                });
                this.setState({
                    shipperList: shipperList
                });
                swal("This shipper was removed successfully!", { icon: "success" });
            } else {
                swal("You pressed cancel!", { icon: "warning" });
            }
        });
    }

    render() {
        let shipperID = parseInt(this.props.props.match.params.id, 10);
        let { shipperList } = this.state;

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
                                                <button onClick={() => this.removeShipper(shipperID)}>remove</button>
                                            </div><br />
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
}

export default ShipperDetailInfo;