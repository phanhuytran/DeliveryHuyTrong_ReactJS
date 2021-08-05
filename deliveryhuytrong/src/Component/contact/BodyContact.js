import React, { Component } from 'react';

class BodyContact extends Component {
    render() {
        return (
            <div>
                <section className="contact-page-area">
                    <div className="container">
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
                        <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="contact-form">
                            <h2 className="contact_page_headings">Send us a message</h2>
                            <form>
                                <input type="text" name="username" placeholder="Your name" required />
                                <input type="email" name="email_address" placeholder="Email address" required />
                                <input type="text" name="subject" placeholder="Subject" />
                                <textarea name="messages" placeholder="Your message..." required defaultValue={""} />
                                <input type="submit" name="submit" defaultValue="send" />
                            </form>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1 col-sm-6  wow bounceIn">
                            <div className="google-map">
                                <div id="googleMap"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <script src="http://maps.googleapis.com/maps/api/js"></script>
            </div>
        );
    }
}

export default BodyContact;