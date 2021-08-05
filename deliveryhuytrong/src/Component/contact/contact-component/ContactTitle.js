import React, { Component } from 'react';

class ContactTitle extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                        <div className="contact_us_content_title">
                            <h2>contact us</h2>
                            <h5>no about us more</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                        <div className="contact_us_content_title">
                            <ul className="breadcrumbs">
                                <li><a href="/">home</a></li>
                                <li><a href="/contact">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactTitle;