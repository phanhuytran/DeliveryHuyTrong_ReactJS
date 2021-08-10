import React from 'react';
import { Link } from 'react-router-dom';

class AboutTitle extends React.Component {
    render() {
        return (
            <div>
                <div className="row about-page-title">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                        <div className="about_us_content_title">
                            <h2>about us</h2>
                            <h5>No about us more</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                        <div className="about_us_content_title">
                            <ul className="breadcrumbs">
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/list-orders">order</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTitle;