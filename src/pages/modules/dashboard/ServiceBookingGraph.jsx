import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

const chartData = {
    January: { customers: [2, 4, 6, 20, 30, 40, 50], bookings: [40, 90, 50, 95, 20, 70, 10] },
    February: { customers: [15, 25, 35, 45, 55], bookings: [25, 40, 55, 70, 75] },
    March: { customers: [12, 22, 32, 42, 52], bookings: [30, 45, 60, 72, 80] },
    // Add similar data for other months...
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            type: 'linear', // x-axis for customers (numeric)
            title: { display: true, text: 'Customers' },
            min: 2, // Start from 0 customers
            max: 24, // Adjust this based on the maximum number of customers
            ticks: {
                stepSize: 2, // Set step size to 2 (representing customers in increments of 2)
                callback: (val) => `${val}k`, // Display customers in 'k' (e.g., 10k, 20k, etc.)
            },
            grid: { display: false },
        },
        y: {
            min: 0,
            max: 100,
            ticks: { stepSize: 20, callback: (value) => `${value}%` }, // Percentage on y-axis
            title: { display: true, text: '%Booking' },
            // Hide the y-axis line by making the border transparent
            border: {
                display: false, // Remove the y-axis line
            },
        },
    },
    plugins: { legend: { display: false } },
};

const ServiceBookingGraph = () => {
    const [selectedMonth, setSelectedMonth] = useState('January');

    // Prepare data for selected month
    const dataForSelectedMonth = chartData[selectedMonth];
    const chartDataPerMonth = {
        labels: dataForSelectedMonth.customers, // x-axis as customers
        datasets: [
            {
                label: "%Booking",
                data: dataForSelectedMonth.bookings, // y-axis as bookings percentage
                fill: true,
                backgroundColor: "rgba(5, 51, 88, 0.2)",
                borderColor: "rgb(7, 76, 131)",
            },
        ],
    };

    return (
        <div className="chart-section w-[70%] bg-white pb-15 rounded-lg p-2">
            <div className="flex justify-between items-center pl-5 pr-10 pb-4">
                <h2 className="text-xl font-semibold">Service Bookings for Graph</h2>
                <select
                    className="chart-range-selector text-gray-500 border border-gray-300 rounded-md"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    {Object.keys(chartData).map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>
            <div className="chart-container h-full px-3">
                <Line data={chartDataPerMonth} options={chartOptions} />
            </div>
        </div>
    );
};

export default ServiceBookingGraph;
