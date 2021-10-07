import React from 'react';

export default function ShipperProfile(props) {
    return (
        <>
            <tr>
                <td>Full name:</td>
                <td colSpan={2} className="text-right shipper-highlight-info">{props.props.props.auction_win.shipper.first_name} {props.props.props.auction_win.shipper.last_name}</td>
            </tr>
            <tr>
                <td>Date of birth:</td>
                <td colSpan={2} className="text-right">{props.props.props.auction_win.shipper.date_of_birth}</td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td colSpan={2} className="text-right">{props.props.props.auction_win.shipper.gender}</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td colSpan={2} className="text-right">{props.props.props.auction_win.shipper.address}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td colSpan={2} className="text-right">{props.props.props.auction_win.shipper.email}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td colSpan={2} className="text-right shipper-highlight-info">{props.props.props.auction_win.shipper.phone}</td>
            </tr>
        </>
    );
}