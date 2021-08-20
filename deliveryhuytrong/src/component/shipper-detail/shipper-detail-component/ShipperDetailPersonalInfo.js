import React, { useState } from 'react';
import shipperListData from '../../shipper/shipper-component/ShipperListData';

export default function ShipperDetailPersonalInfo(props) {
    const [shipperList] = useState(shipperListData);
    const shipperID = parseInt(props.props.match.params.id, 10);
    const shipper = shipperList;

    return (
        <>
            {
                shipper.map((value, index) => {
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