import React from 'react';
import NotificationBell from '../item-base/NotificationBell';
import StatisticOrderList from './statistic-component/StatisticOrderList';
import DeliveryFrequencyChart from './statistic-component/DeliveryFrequencyChart';
import RevenueChart from './statistic-component/RevenueChart';
import StatisticTitle from './statistic-component/StatisticTitle';

export default function BodyStatistic() {
    return (
        <div>
            <NotificationBell />
            <StatisticTitle />
            <StatisticOrderList />
            <DeliveryFrequencyChart />
            <RevenueChart />
        </div>
    );
}