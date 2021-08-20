import React from 'react';
import '../statistic.css'
import { Line } from "react-chartjs-2";
import moment from "moment";

const startDate = new Date(2021, 7, 1);
const labels = [];

for (let i = 0; i < 10; i++) {
    const date = moment(startDate).add(i, "days").format("YYYY-MM-DD");
    labels.push(date.toString());
}

const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
        backgroundColor: gradient,
        labels,
        datasets: [
            {
                label: "Revenue",
                data: [14030000, 16250000, 21342000, 21005000, 20591000, 26024000, 25240000, 30166000, 32675000, 35743000],
                borderWidth: 2,
                fill: true,
                borderColor: "green"
            }
        ]
    };
};

export default function StatisticChart() {
    return (
        <div className="statistic-chart">
            <Line data={data} />
        </div>
    );
}