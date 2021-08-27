import React from 'react';
import logoIMG from './image/logo.png';
import goToTopIMG from './image/go-to-top.png';

export default function Footer() {
    return (
        <>
            <section className="footer-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-3 col-xs-12 col-lg-4">
                            <div className="single-footer">
                                <h2>contact us</h2>
                                <p>Email 1: 1851050056huy@ou.edu.vn</p>
                                <p>Email 2: 1851050159trong@ou.edu.vn</p>
                                <p>Address: 371 Nguyen Kiem, Ward 3, Go Vap District, Ho Chi Minh City</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12 col-lg-2">
                            <div className="single-footer">
                                <h2>more links</h2>
                                <ul className="list">
                                    <li><a href="/about">about us</a></li>
                                    <li>we accepts</li>
                                    <li>news latters</li>
                                    <li><a href="/pricing">pricing &amp; plans</a></li>
                                    <li>calculate</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3">
                            <div className="single-footer">
                                <h2>we accepts</h2>
                                <a href="/"><img src={logoIMG} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3">
                            <div className="single-footer clearfix">
                                <h2>news latters</h2>
                                <input type="text" className="form-control" />
                                <button className="submt-button">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright-area">
                <div className="container">
                    <div className="col-xs-12 col-sm-6 col-md-6 text-left">
                        <div className="footer-text">
                            <p>© Delivery Huy Trong</p>
                        </div>
                    </div>
                    <div className="col-xs-12  col-sm-6 col-md-6 text-right">
                        <div className="footer-text">
                            <a href="https://www.facebook.com/thephanhuytran/"><li className="fab fa-facebook" /></a>
                            <a href="https://www.facebook.com/thephanhuytran/"><li className="fab fa-twitter" /></a>
                            <a href="https://www.facebook.com/thephanhuytran/"><li className="fab fa-linkedin-in" /></a>
                            <a href="https://www.facebook.com/thephanhuytran/"><li className="fab fa-google-plus-g" /></a>
                            <a href="https://www.facebook.com/thephanhuytran/"><li className="fab fa-dribbble" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="goToTop">
                <a href="#top"><img src={goToTopIMG} alt="top" /></a>
            </div>
        </>
    );
}