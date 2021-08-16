import React from 'react';
import "../about.css";
import AboutTitle from './AboutTitle';

class AboutDetail extends React.Component {
    render() {
         
        function show_about_content() {
            document.getElementById("show-about-content").style.display = "block";
            document.getElementById("hide-away").style.display = "block";
            document.getElementById("show-read-more").style.display = "none";
        }

        function hide_about_content() {
            document.getElementById("show-about-content").style.display = "none";
            document.getElementById("hide-away").style.display = "none";
            document.getElementById("show-read-more").style.display = "block";
        }

        return (
            <div>
                <section className="about_us_area" id="about">
                    <div className="container">
                        <AboutTitle/>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="about_us_content">
                                    <p>The system is integrated with software on mobile devices, using the service via Wifi/3G connection, with support and customer care staff to provide the most effective service, helping you to call the shipper quickly, manage orders, track order status, minimize the situation that the shipper does not work seriously. For shippers, this is an effective support tool in receiving shipping needs, managing orders to ship.</p>
                                    <p>When the shop uses Delivery Huy Trong to post a shipper search, the information will be notified and displayed to thousands of shippers nearby, in addition, the shop's shipper information will also be automatically posted on many facebook groups where millions of shippers are following. After tracking, the shop finds a suitable shipper in just a few minutes.</p>
                                    <p>This is a fast, easy to use and completely free shipper find and call application for everyone.</p>
                                    <div id="show-about-content">
                                        <br />
                                        <h4>For Shipper:</h4><p>+ Solve the need to find a part-time job, increase income.<br />+ No intermediary fees for companies.<br />+ Find orders quickly, nearest, most convenient route.<br />+ Limit the situation of scamming shop owners.<br />+ Help shipper hunt ship and find the fastest orders.<br />+ Application to collect orders, collect ships to help shippers save time.</p>
                                        <h4>The Application Supports Finding Shippers At:</h4><p>+ Find a shipper in Hanoi.<br />+ Find a shipper in HCMC.<br />+ Find a shipper in Da Nang.<br />+ Find a shipper in Hai Phong.<br />+ Hunting ships in all major cities across the country.</p>
                                        <h4>New Features Update:</h4><p>+ Add the feature to send reviews, feedback to the shop or shipper. Let's recognize trusted accounts together.<br />+ Fix the error of not being able to make calls for some phones.<br />+ Add the feature to display images in the post, can be set to turn off or turn on the image display in the.</p>
                                        <h4>Application's Settings:</h4><p>+ Add posting function for shipper account.<br />+ Change the display of currency from VND to K.<br />+ Automatically save information when the shipper manipulates the news.<br />+ Determine the location from the shipper to the location of the poster more accurately.<br />+ Add Comment feature.<br />+ Change the interface of the shop account to be easier to use.<br />+ Automatically call the shop by keyword.<br />+ Automatically save news by keyword.<br />+ Improved fast calling on android version 6.0.</p>
                                        <h4>What Are You Waiting For, Install And Use Delivery Huy Trong Today!</h4>
                                    </div>
                                    <p id="show-read-more" onClick={show_about_content}>see more <span className="fas fa-arrow-down" /></p>
                                    <p id="hide-away" onClick={hide_about_content}>see less <span className="fas fa-arrow-up" /></p>
                                </div>
                            </div>
                            <div className="col-md-offset-1 col-sm-6 col-md-5">
                                <div className="about_car wow bounceIn">
                                    <img src="img/shipper.jpg" alt="shipper" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutDetail;