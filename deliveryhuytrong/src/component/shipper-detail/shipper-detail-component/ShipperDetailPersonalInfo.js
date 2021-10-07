import React, { useState, useEffect } from 'react';
import { AuthAPI, endpoints } from '../../API';

export default function ShipperDetailPersonalInfo(props) {
    const [shipperList, setShipperList] = useState([]);
    const [shipperAverageRating, setShipperAverageRating] = useState([]);
    const shipperID = parseInt(props.props.match.params.id, 10);

    useEffect(() => {
        async function getShipperList() {
            let res = await AuthAPI.get(endpoints['shippers']);
            setShipperList(res.data.results);
        }
        async function getShipperAverageRating() {
            let res = await AuthAPI.get(endpoints['shipper-average-rate'](shipperID));
            setShipperAverageRating(res.data);
        }

        getShipperList();
        getShipperAverageRating();
    }, [shipperList], [shipperAverageRating]);

    return (
        <>
            {
                shipperList.map((value, index) => {
                    if (value.id === shipperID) {
                        return <React.Fragment key={index}>
                            <tr>
                                <td>Full name:</td>
                                <td colSpan={2} className="text-right shipper-highlight-info">{value.first_name} {value.last_name}</td>
                            </tr>
                            <tr>
                                <td>Date of birth:</td>
                                <td colSpan={2} className="text-right">{value.date_of_birth}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td colSpan={2} className="text-right">{value.gender}</td>
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
                            </tr><br />
                            <tr>
                                <span style={{ marginTop: '5%' }} />
                                <td style={{ float: 'left', fontSize: 19, width: '208px' }}>Community's Rating:</td>
                                <td colSpan={2} className="text-right shipper-highlight-info">
                                    <i style={{ fontSize: 30, color: '#f9bf3b' }} className="fas fa-star"></i>
                                    <span style={{ marginLeft: '5px' }} className="communty-rating">{shipperAverageRating.ave}</span>
                                </td>
                            </tr>
                        </React.Fragment>
                    }
                    return <React.Fragment key={index}></React.Fragment>;
                })
            }
        </>
    );
}