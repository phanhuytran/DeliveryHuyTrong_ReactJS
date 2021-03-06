import React from 'react';
import { Link } from 'react-router-dom';

export default function PostTitle() {
    return (
        <section className="order_us_area" id="about">
            <div className="container">
                <div className="row page-title">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                        <div className="order_us_content_title">
                            <h2>your post</h2>
                            <h5>List of your posts. You can post the order you want to be shipped</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                        <div className="order_us_content_title">
                            <ul className="breadcrumbs">
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/post">post</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}