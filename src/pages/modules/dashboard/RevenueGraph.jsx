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

// Registering the necessary chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Sales and Revenue data for each month (January to December)
const salesData = [
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],  // January
    [5, 10, 15, 25, 30, 35, 40, 45, 50, 55, 60, 60],  // February
    [5, 12, 18, 24, 30, 36, 42, 48, 54, 60, 65, 70],  // March
    [5, 9, 14, 19, 25, 33, 38, 43, 49, 54, 58, 60],   // April
    [5, 11, 17, 22, 28, 34, 41, 46, 51, 55, 60, 60],  // May
    [5, 10, 15, 21, 27, 32, 38, 43, 48, 53, 59, 60],  // June
    [5, 8, 14, 19, 26, 33, 38, 44, 49, 55, 60, 60],   // July
    [5, 11, 16, 22, 28, 35, 40, 45, 51, 57, 62, 60],  // August
    [5, 10, 15, 20, 27, 33, 39, 45, 50, 55, 60, 60],  // September
    [5, 8, 13, 18, 24, 30, 36, 41, 47, 53, 59, 60],   // October
    [5, 10, 15, 20, 26, 32, 37, 42, 47, 52, 58, 60],  // November
    [5, 9, 14, 18, 24, 30, 37, 42, 47, 53, 58, 60],   // December
];

const revenueData = [
    [20, 40, 60, 80, 100, 60, 80, 90, 60, 70, 80, 100],  // January
    [30, 50, 70, 90, 110, 80, 90, 100, 80, 90, 100, 120], // February
    [25, 45, 65, 85, 105, 75, 95, 105, 75, 85, 95, 115], // March
    [20, 40, 60, 80, 100, 60, 80, 90, 70, 80, 90, 110],  // April
    [30, 50, 70, 90, 110, 80, 100, 110, 90, 100, 110, 120], // May
    [25, 45, 65, 85, 105, 75, 95, 105, 80, 90, 100, 120], // June
    [30, 50, 70, 90, 110, 80, 100, 110, 90, 100, 110, 120], // July
    [25, 45, 65, 85, 105, 75, 95, 105, 85, 95, 105, 125], // August
    [30, 50, 70, 90, 110, 80, 100, 110, 90, 100, 110, 130], // September
    [20, 40, 60, 80, 100, 60, 80, 90, 70, 80, 90, 110],  // October
    [30, 50, 70, 90, 110, 80, 100, 110, 90, 100, 110, 120], // November
    [25, 45, 65, 85, 105, 75, 95, 105, 85, 95, 105, 125], // December
];

const SalesRevenueChart = () => {
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

    const handleMonthChange = (e) => {
        setSelectedMonthIndex(Number(e.target.value));
    };

    // Prepare data for the chart based on the selected month
    const chartData = {
        labels: salesData[selectedMonthIndex], // X-axis values (Sales)
        datasets: [
            {
                label: 'Sales',
                borderColor: '#9BC9BE',
                backgroundColor: 'rgba(155, 201, 190, 0.4)', // Fill color for Sales
                data: salesData[selectedMonthIndex], // Sales data for selected month
                fill: true, // Fill under the Sales line
                tension: 0.4,
                pointRadius: 0,
            },
            {
                label: 'Revenue',
                borderColor: '#DBA5FF',
                backgroundColor: 'rgba(219, 165, 255, 0.4)', // Fill color for Revenue
                data: revenueData[selectedMonthIndex], // Revenue data for selected month
                fill: true,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear', // x-axis for customers (numeric)
                min: 0, // Start from 0 customers
                max: 60, // Adjust this based on the maximum number of customers
                ticks: {
                    stepSize: 5,
                    callback: (val) => `${val}k`,
                },
                grid: { display: false },
            },
            y: {
                min: 20,
                max: 100,
                ticks: { stepSize: 20, callback: (value) => `${value}` }, // Percentage on y-axis
                // Hide the y-axis line by making the border transparent
                border: {
                    display: false, // Remove the y-axis line
                },
            },
        },
        plugins: { legend: { display: false } },
    };
    return (
        <div className="w-[70%] bg-white p-4 rounded-lg shadow-md pb-25">

            <div className="flex justify-between items-center pl-5 pr-10 pb-4">
                <h2 className="text-2xl font-semibold">Revenue</h2>
                <select
                    id="month-select"
                    value={selectedMonthIndex}
                    onChange={handleMonthChange}
                    className="p-2 border border-gray-300 rounded-md"
                >
                    <option value={0}>January</option>
                    <option value={1}>February</option>
                    <option value={2}>March</option>
                    <option value={3}>April</option>
                    <option value={4}>May</option>
                    <option value={5}>June</option>
                    <option value={6}>July</option>
                    <option value={7}>August</option>
                    <option value={8}>September</option>
                    <option value={9}>October</option>
                    <option value={10}>November</option>
                    <option value={11}>December</option>
                </select>
            </div>

            <div className="p-4 h-full">
                <Line data={chartData} options={chartOptions} />
            </div>
            <div className='flex justify-center gap-x-2 text-xl text-gray-500 font-bold mt-2'>
                <div className='rounded-full h-5 w-5 bg-[#9BC9BE]'></div>
                <p className='mr-5'>Sales</p>
                <div className='rounded-full h-5 w-5 bg-[#DBA5FF]'></div>
                <p>Profit</p>
            </div>
        </div>
    );
};

export default SalesRevenueChart;
