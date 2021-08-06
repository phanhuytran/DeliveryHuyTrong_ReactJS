import React, { Component } from 'react';

class ShipperDetailPersonalInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>Full name:</td>
                    <td colSpan={2} className="text-right shipper-highlight-info">Do Trong Nguyen</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td colSpan={2} className="text-right">Gay</td>
                </tr>
                <tr>
                    <td>ID card:</td>
                    <td colSpan={2} className="text-right">025832688</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td colSpan={2} className="text-right">Binh Thuan Province</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td colSpan={2} className="text-right">1851050159trong@ou.edu.vn</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td colSpan={2} className="text-right shipper-highlight-info">(+84) 77 5398 511</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default ShipperDetailPersonalInfo;