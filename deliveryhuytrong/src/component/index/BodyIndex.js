import React from 'react';
import IndexAbout from './index-component/IndexAbout';
import IndexIntro from './index-component/IndexIntro';
import IndexStatistic from './index-component/IndexStatistic';
import VideoIntro from './index-component/VideoIntro';

export default function BodyIndex() {
    return (
        <div>
            <VideoIntro />
            <IndexIntro />
            <IndexAbout />
            <IndexStatistic />
        </div>
    );
}