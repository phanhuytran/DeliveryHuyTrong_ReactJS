import React from 'react';
import { Link } from 'react-router-dom';

class ContactTitle extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                        <div className="contact_us_content_title">
                            <h2>contact us</h2>
                            <h5>No about us more</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                        <div className="contact_us_content_title">
                            <ul className="breadcrumbs">
                                <li><Link to="/pricing">pricing</Link></li>
                                <li><Link to="/">home</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactTitle;