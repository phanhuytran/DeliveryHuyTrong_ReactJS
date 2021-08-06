import React, { Component } from 'react';

class Header1 extends Component {
    render() {
        return (
            <div>
                <div id="preloader"></div>
                <section class="header_area player version2-hero" id="youtube_background" data-property="{videoURL:'https://www.youtube.com/watch?v=PhPKAvFfLEE',containment:'#youtube_background',autoPlay:true, mute:true, startAt:0, showControls:false, loop:true, opacity:1}">
                    <div class="logo_menu" id="sticker">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-2 col-lg-2 col-sm-2 col-xs-6">
                                    <div class="logo wow bounceIn">
                                        <a href="/"><img src="img/logo.png" alt="logo" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-6 col-md-offset-1 col-sm-7 col-lg-offset-1 col-lg-6 mobMenuCol">
                                    <nav class="navbar">
                                        <ul class="nav navbar-nav navbar-right menu">
                                            <li class="current-menu-item"><a href="/">home</a></li>
                                            <li><a href="/about">about</a></li>
                                            <li><a href="/list-orders">order</a></li>
                                            <li><a href="/shipper">shipper</a></li>
                                            <li><a href="/pricing">pricing</a></li>
                                            <li><a href="/contact">contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-4 col-lg-3 signup">
                                    <ul class="nav navbar-nav">
                                        <li><a href="signin-signup">login</a></li>
                                        <li><a href="signin-signup">sign up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="table">
                        <div class="cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 text-center">
                                        <div class="welcome_text version-2">
                                            <div class="hero-slider">
                                                <div class="single-hero-slider">
                                                    <h1>Get the fastest shipper </h1>
                                                    <h1>for your product</h1>
                                                    <div class="welcome_p">
                                                        <p>Shipper delivers immediate or same day</p>
                                                        <p>depending on your needs.</p>
                                                    </div>
                                                </div>
                                                <div class="single-hero-slider">
                                                    <h1>Get the fastest shipper </h1>
                                                    <h1>for your product</h1>
                                                    <div class="welcome_p">
                                                        <p>Shipper delivers immediate or same day</p>
                                                        <p>depending on your needs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header1;