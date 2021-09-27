import React from 'react';
import { Line } from "react-chartjs-2";
import moment from "moment";
import '../statistic.css';

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
                label: "Frequency",
                data: [1.2, 1.4, 1.75, 2.02, 2, 2.34, 2.55, 2.41, 2.46, 2.6],
                borderWidth: 2,
                fill: true,
                borderColor: "green"
            }
        ]
    };
};

export default function DeliveryFrequencyChart() {
    return (
        <div className="statistic-chart">
            <h2>Delivery Frequency Chart</h2>
            <Line data={data} />
        </div>
    );
}