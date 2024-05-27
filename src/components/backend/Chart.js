'use client'
import React from 'react'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

export const BarChart = () => {
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 90, 100, 110], // Example data
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90, 95, 100, 130, 150, 160], // Example data
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    };

    return (
        <Bar data={barData} />
    )
}

export const LineChart = () => {
    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const data = {
        labels: ['1 min', '10 min', '20 min', '30 min', '40 min', '50 min', '60 min'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [0, 50, 30, 50, 60, 10, 70],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Dataset 2',
                data: [0, 40, 25, 40, 50, 20, 80],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
            {
                label: 'Dataset 3',
                data: [0, 50, 20, 45, 40, 30, 75],
                borderColor: 'rgb(170 170 170)',
                backgroundColor: 'rgbA(158, 158, 158, 0.5)',
                yAxisID: 'y2',
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut data={data} />;
}

export const PieChart = () => {
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [25, 19, 13, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data} />;
}

export const SingleLineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                data: [25, 19, 13, 15],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />;
};