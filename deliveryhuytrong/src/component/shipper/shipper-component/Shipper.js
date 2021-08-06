import React from 'react';
import { Link } from 'react-router-dom';

class Shipper extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12">
                <Link to="/shipper-detail">
                    <div className="about_single_item">
                        <div className="item_icon">
                            <img className="avatar-shipper" src={this.props.image} alt="item" />
                        </div>
                        <div className="about_single_item_content">
                            <h4>{this.props.firstName} {this.props.lastName}</h4>
                            <p>Address: <span>{this.props.address}</span></p>
                            <p>Phone: <span>{this.props.phone}</span></p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Shipper;