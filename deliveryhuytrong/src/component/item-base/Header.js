import React from 'react';
import Menu from './Menu';
import logoIMG from './image/logo.png'

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
                                        <a className="res-header-menu-img" href="/"><img src={logoIMG} alt="logo" /></a>
                                    </div>
                                </div>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;