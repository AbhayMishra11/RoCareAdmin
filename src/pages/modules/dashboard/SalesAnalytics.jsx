import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registering necessary components of Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Example Data (Sales and Target Sales)
const salesData = [20, 40, 10, 60, 80, 40, 100]; // Sales data for each year
const targetSalesData = [15, 5, 55, 30, 70, 95]; // Target Sales data for each year

const SalesAnalyticsChart = () => {
    const chartData = {
        labels: ['2021', '2022', '2023', '2024', '2025'], // X-axis labels (5 years)
        datasets: [
            {
                label: 'Sales',
                borderColor: '#9BC9BE', // Line color for Sales
                backgroundColor: 'rgba(155, 201, 190, 0.4)', // Fill color for Sales
                data: salesData,
                fill: false, // No fill under the Sales line
                pointBackgroundColor: '#1D4ED8', // Point color for Sales line
                pointBorderColor: '#1D4ED8', // Point border color for Sales
                pointRadius: 6,
                tension: 0.4,
            },
            {
                label: 'Target Sales',
                borderColor: '#DBA5FF', // Line color for Target Sales
                backgroundColor: 'rgba(219, 165, 255, 0.4)', // Fill color for Target Sales
                data: targetSalesData,
                fill: false, // No fill under the Target Sales line
                pointBackgroundColor: '#F59E0B', // Point color for Target Sales line
                pointBorderColor: '#F59E0B', // Point border color for Target Sales
                pointRadius: 6,
                tension: 0.4,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                min: 0,
                max: 100,
                ticks: { stepSize: 25, callback: (value) => `${value}` }, // Percentage on y-axis
                // Hide the y-axis line by making the border transparent
                border: {
                    display: false, // Remove the y-axis line
                },
            },
        },
        plugins: { legend: { display: false } },
    };
    return (
        <div className="w-[30%] h-full bg-white p-4 rounded-lg shadow-md pb-12">
            <h2 className="text-2xl font-semibold mb-4">Sales Analytics</h2>

            <div className="h-full p-4">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default SalesAnalyticsChart;
