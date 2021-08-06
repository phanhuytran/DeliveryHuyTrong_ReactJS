import React from 'react';
import AboutDetail from './about-component/AboutDetail';
import AboutIntro from './about-component/AboutIntro';

class BodyAbout extends React.Component {
    render() {
        return (
            <div>
                <AboutDetail />
                <AboutIntro />
            </div>
        );
    }
}

export default BodyAbout;