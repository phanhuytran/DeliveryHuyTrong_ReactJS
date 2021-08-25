import React from 'react';
import IndexAbout from './index-component/IndexAbout';
import IndexIntro from './index-component/IndexIntro';
import IndexStatistic from './index-component/IndexStatistic';
import Introduction from './index-component/Introduction';

export default function BodyIndex() {
    return (
        <div>
            <Introduction />
            <IndexIntro />
            <IndexAbout />
            <IndexStatistic />
        </div>
    );
}