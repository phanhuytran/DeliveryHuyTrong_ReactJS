import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import AboutDetail from './about-component/AboutDetail';
import AboutIntro from './about-component/AboutIntro';

export default function BodyAbout() {
    return (
        <div>
            <NotificationBell />
            <AboutDetail />
            <AboutIntro />
        </div>
    );
}