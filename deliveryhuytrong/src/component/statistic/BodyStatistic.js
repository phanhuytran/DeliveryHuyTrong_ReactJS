import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import StatisticChart from './statistic-component/StatisticChart';
import StatisticTitle from './statistic-component/StatisticTitle';

export default function BodyStatistic() {
    return (
        <div>
            <NotificationBell />
            <StatisticTitle />
            <StatisticChart />
        </div>
    );
}