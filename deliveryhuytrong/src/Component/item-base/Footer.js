import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
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
                                <li><a>about us</a></li>
                                <li><a>we accepts</a></li>
                                <li><a>news latters</a></li>
                                <li><a>pricing &amp; plans</a></li>
                                <li><a>calculate</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3">
                            <div className="single-footer">
                            <h2>we accepts</h2>
                            <a href="/"><img src="img/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3">
                            <div className="single-footer clearfix">
                            <h2>news latters</h2>
                            <input type="text" className="form-control" />
                            <input type="submit" className="submt-button" defaultValue="submit" />
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
                            <a href="https://www.facebook.com/thephanhuytran/" className="fab fa-facebook" target="_blank" />
                            <a className="fab fa-twitter" />
                            <a className="fab fa-linkedin-in" />
                            <a className="fab fa-google-plus-g" />
                            <a className="fab fa-dribbble" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="goToTop">
                    <a href="#top"><img src="img/gototop.png" alt="top" /></a>
                    </div>
            </div>
        );
    }
}

export default Footer;