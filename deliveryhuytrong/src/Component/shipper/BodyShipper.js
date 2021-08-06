import React from 'react';
import ShipperCustomerOpinion from './shipper-component/ShipperCustomerOpinion';
import ShipperList from './shipper-component/ShipperList';

class BodyShipper extends React.Component {
    render() {
        return (
            <div>
                <ShipperList />
                <ShipperCustomerOpinion />
            </div>
        );
    }
}

export default BodyShipper;