import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import StatisticOrderList from './statistic-component/StatisticOrderList';
import StatisticDeliveryFrequencyChart from './statistic-component/StatisticDeliveryFrequencyChart';
import StatisticRevenueChart from './statistic-component/StatisticRevenueChart';
import StatisticTitle from './statistic-component/StatisticTitle';

export default function BodyStatistic() {
    return (
        <div>
            <NotificationBell />
            <StatisticTitle />
            <StatisticOrderList />
            <StatisticDeliveryFrequencyChart />
            <StatisticRevenueChart />
        </div>
    );
}