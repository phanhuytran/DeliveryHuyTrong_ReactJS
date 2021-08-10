import React from 'react';
import IndexAbout from './index-component/IndexAbout';
import IndexIntro from './index-component/IndexIntro';
import IndexStatistic from './index-component/IndexStatisticl';
import VideoIntro from './index-component/VideoIntro';

class BodyIndex extends React.Component {
    render() {
        return (
            <div>
                <VideoIntro />
                <IndexIntro />
                <IndexAbout />
                <IndexStatistic />
            </div>
        );
    }
}

export default BodyIndex;