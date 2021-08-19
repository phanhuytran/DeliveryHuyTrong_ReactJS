import React from 'react';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

class ShipperDetailPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipperList: shipperListData
        }
    }
    render() {
        let shipperID = parseInt(this.props.props.match.params.id, 10);
        let { shipperList } = this.state;

        return (
            <>
                {
                    shipperList.map((value, index) => {
                        if (value.id === shipperID) {
                            return <React.Fragment key={index}>
                                <tr>
                                    <td>Full name:</td>
                                    <td colSpan={2} className="text-right shipper-highlight-info">{value.firstName} {value.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth:</td>
                                    <td colSpan={2} className="text-right">{value.dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>Gender:</td>
                                    <td colSpan={2} className="text-right">{value.gender}</td>
                                </tr>
                                <tr>
                                    <td>ID card:</td>
                                    <td colSpan={2} className="text-right">{value.idCard}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td colSpan={2} className="text-right">{value.address}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td colSpan={2} className="text-right">{value.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td colSpan={2} className="text-right shipper-highlight-info">{value.phone}</td>
                                </tr>
                            </React.Fragment>
                        }
                        return <React.Fragment key={index}></React.Fragment>;
                    })
                }
            </>
        );
    }
}

export default ShipperDetailPersonalInfo;