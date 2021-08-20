import React from 'react';
import NotificationBell from '../../item-base/NotificationBell';

export default function VideoIntro() {
    return (
        <div>
            <section className="header_area player version2-hero"
                id="youtube_background"
                data-property="{videoURL:'https://www.youtube.com/watch?v=PhPKAvFfLEE',containment:'#youtube_background',autoPlay:true, mute:true, startAt:0, showControls:false, loop:true, opacity:1}">
                <NotificationBell />
            </section>
        </div>
    );
}