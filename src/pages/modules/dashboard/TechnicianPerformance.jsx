import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TechnicianPerformanceChart = () => {
    // Technician performance data for each month
    const performanceData = [
        { month: 'January', percentage: 80 },
        { month: 'February', percentage: 85 },
        { month: 'March', percentage: 78 },
        { month: 'April', percentage: 90 },
        { month: 'May', percentage: 88 },
        { month: 'June', percentage: 50 },
    ];

    // Create x-axis labels with both month name and percentage
    const labels = performanceData.map(
        (item) => `${item.month} (${item.percentage}%)`
    );

    // Chart.js data configuration
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Performance Percentage',
                data: performanceData.map((item) => item.percentage),
                backgroundColor: 'rgba(59, 130, 246, 0.5)', // Tailwind blue-500 with opacity
                borderColor: 'rgb(26, 103, 226)',
                borderWidth: 0.2,
                // Decrease the bar width relative to the category width
                barPercentage: 0.3,
                // Round only the top corners of each bar
                borderRadius: {
                    topLeft: 20,
                    topRight: 20,
                    bottomLeft: 0,
                    bottomRight: 0,
                },
            },
        ],
    };

    // Chart.js options configuration
    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 90,
                ticks: {
                    stepSize: 10,
                },
                title: {
                    display: true,
                },
                // Hide the y-axis line by making the border transparent
                border: {
                    display: false, // Remove the y-axis line
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend if not needed
            },
        },
    };

    return (
        <div className="w-[40%] bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold m-3">Technician Performance</h2>
            <div className='w-full h-full' >
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default TechnicianPerformanceChart;
