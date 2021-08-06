import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="preloader" />
                <section className="about-us">
                    <div className="logo_menu" id="sticker">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 col-lg-2 col-sm-2 col-xs-6">
                                    <div className="logo wow bounceIn">
                                        <Link to="/"><img src="img/logo.png" alt="logo" /></Link>
                                    </div>
                                </div>
                                <Menu/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;