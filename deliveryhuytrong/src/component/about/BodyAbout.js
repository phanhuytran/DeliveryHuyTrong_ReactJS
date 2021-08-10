import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import AboutDetail from './about-component/AboutDetail';
import AboutIntro from './about-component/AboutIntro';

class BodyAbout extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <AboutDetail />
                <AboutIntro />
            </div>
        );
    }
}

export default BodyAbout;