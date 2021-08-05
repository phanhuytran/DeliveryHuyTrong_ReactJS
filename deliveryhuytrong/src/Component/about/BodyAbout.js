import React, { Component } from 'react';
import AboutDetail from './about-component/AboutDetail';
import AboutIntro from './about-component/AboutIntro';

class BodyAbout extends Component {
    render() {
        return (
            <div>
                <AboutDetail/>
                <AboutIntro/>
            </div>
        );
    }
}

export default BodyAbout;