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

const TrendChart = () => {
    const [selectedPartner, setSelectedPartner] = useState("All Partners");
    const [selectedMonth, setSelectedMonth] = useState(0);

    const handlePartnerChange = (e) => {
        setSelectedPartner(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(Number(e.target.value));
    };

    // Trend data for each month (this can be customized with your actual data)
    const trendData = [
        [60, 20, 30, 40, 20, 60, 30, 80], // Trend data for Jan
        [20, 22, 20, 42, 52, 62, 32, 20], // Trend data for Feb
        [14, 24, 34, 44, 54, 64, 74, 84], // Trend data for Mar
        [16, 26, 36, 46, 56, 66, 76, 86], // Trend data for Apr
        [18, 28, 38, 48, 58, 68, 78, 88], // Trend data for May
        [20, 30, 40, 50, 60, 70, 80, 90], // Trend data for Jun
        [22, 32, 42, 52, 62, 72, 82, 92], // Trend data for Jul
        [24, 34, 44, 54, 64, 74, 84, 94], // Trend data for Aug
        [26, 36, 46, 56, 66, 76, 86, 96], // Trend data for Sep
        [28, 38, 48, 58, 68, 78, 88, 98], // Trend data for Oct
        [30, 40, 50, 60, 70, 80, 90, 100], // Trend data for Nov
        [32, 42, 52, 62, 72, 82, 92, 102], // Trend data for Dec
    ];

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get current and next month data for the selected month
    const currentMonthData = trendData[selectedMonth];
    const nextMonthData = trendData[selectedMonth + 1] || trendData[0]; // Loop back to Jan if December is selected

    // Merge current month's trend with next month's trend (display next month's value at the end)
    const combinedData = [...currentMonthData, nextMonthData[0]];

    const chartData = {
        labels: Array.from({ length: combinedData.length }, (_, index) => index + 1), // Labels for trend values (Days or any other representation)
        datasets: [
            {
                label: 'Trend',
                borderColor: '#3962d1', // Dark blue for the trend line
                backgroundColor: '#3962d1', // Light blue for filling under the line
                data: combinedData, // Combined trend data for the selected and next month
                fill: true, // Fill under the trend line
                tension: 0.4,
                pointRadius: 0, // Make points more visible
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category',
                grid: { display: false },
                ticks: {
                    callback: function (value, index) {
                        // Show only the first and last value on the X-axis
                        if (index === 0) {
                            return `${monthNames[selectedMonth]}`; // Current month
                        }
                        if (index === combinedData.length - 1) {
                            return `${monthNames[selectedMonth + 1] || monthNames[0]}`; // Next month
                        }
                        return ''; // Hide other values on the X-axis
                    },
                },
            },
            y: {
                min: 20,
                max: 100,
                ticks: { stepSize: 20 },
                border: { display: false },
                grid: { display: true },
            },
        },
        plugins: { legend: { display: false } },
    };

    return (
        <div className="w-[60%] bg-white p-4 rounded-lg shadow-md pb-25">
            <div className="flex justify-between items-center pl-5 pr-10 pb-4">
                <h2 className="text-2xl font-semibold">Sales and Revenue Trend</h2>

                {/* Partner selection dropdown */}
                <div className="flex gap-x-4">
                    <select
                        value={selectedPartner}
                        onChange={handlePartnerChange}
                        className="p-2 border border-gray-300 rounded-md"
                    >
                        <option value="All Partners">All Partners</option>
                        <option value="Partner A">Partner A</option>
                        <option value="Partner B">Partner B</option>
                    </select>

                    {/* Month selection dropdown */}
                    <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        className="p-2 border border-gray-300 rounded-md"
                    >
                        {monthNames.map((month, index) => (
                            <option key={index} value={index}>{month}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="p-4 h-full">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default TrendChart;
