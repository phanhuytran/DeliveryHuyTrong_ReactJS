import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import StatisticTitle from './statistic-component/StatisticTitle';

class BodyStatistic extends React.Component {
    render() {
        return (
            <div>
                <NotificationBell />
                <StatisticTitle />
            </div>
        );
    }
}

export default BodyStatistic;