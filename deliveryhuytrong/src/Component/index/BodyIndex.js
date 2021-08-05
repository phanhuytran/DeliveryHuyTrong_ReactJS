import React, { Component } from 'react';
import IndexAbout from './index-component/IndexAbout';
import IndexIntro from './index-component/IndexIntro';
import IndexStatistic from './index-component/IndexStatisticl';

class BodyIndex extends Component {
    render() {
        return (
            <div>
                <IndexIntro/>
                <IndexAbout/>
                <IndexStatistic/>
            </div>
        );
    }
}

export default BodyIndex;