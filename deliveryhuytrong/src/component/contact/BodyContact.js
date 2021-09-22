import React from 'react';
import ContactTitle from './contact-component/ContactTitle';
import NotificationBell from '../item-base/NotificationBell';

export default function BodyContact() {
    return (
        <div>
            <NotificationBell />
            <section className="contact-page-area">
                <div className="container">
                    <ContactTitle />
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="contact-form">
                                <h2 className="contact_page_headings">Send us a message</h2>
                                <form>
                                    <input type="text" name="username" placeholder="Your name" required />
                                    <input type="email" name="email_address" placeholder="Email address" required />
                                    <input type="text" name="subject" placeholder="Subject" />
                                    <textarea name="messages" placeholder="Your message..." required defaultValue={""} />
                                    <button>SEND</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1 col-sm-6  wow bounceIn" style={{ marginLeft: '5%' }}>
                            <div className="google-map">
                                <div id="googleMap">
                                    <img src="img/map.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}