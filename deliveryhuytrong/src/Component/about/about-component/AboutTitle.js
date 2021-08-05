import React, { Component } from 'react';

class AboutTitle extends Component {
    render() {
        return (
            <div>
                <div className="row about-page-title">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                        <div className="about_us_content_title">
                            <h2>about us</h2>
                            <h5>no about us more</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                        <div className="about_us_content_title">
                            <ul className="breadcrumbs">
                                <li><a href="/">home</a></li>
                                <li><a href="/about">about</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTitle;