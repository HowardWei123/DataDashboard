import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,  // Import LineElement for line charts
  PointElement, // Needed for points on the line
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components for line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]); // State for chart labels
  const [data, setData] = useState<number[]>([]); // State for chart data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch line chart data from the API
        const response = await axios.get('http://localhost:8000/api/line-chart-data/');
        setLabels(response.data.labels); // Set labels from API response
        setData(response.data.data); // Set data from API response
      } catch (error) {
        setError('Failed to fetch line chart data');
        console.error('Error fetching line chart data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare the chart data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Data',
        data: data,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
        borderColor: 'rgba(255, 99, 132, 1)', // Red
        tension: 0.1  // Makes the line slightly curved
      },
    ],
  };

  // Chart configuration options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data.length ? (
        <Chart type="line" data={chartData} options={chartOptions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LineChart;
