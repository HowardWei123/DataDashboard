import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,  // Import BarElement for bar charts
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]); // State for chart labels
  const [data, setData] = useState<number[]>([]); // State for chart data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bar chart data from the API
        const response = await axios.get('http://localhost:8000/api/bar-chart-data/');
        setLabels(response.data.labels); // Set labels from API response
        setData(response.data.data); // Set data from API response
      } catch (error) {
        setError('Failed to fetch bar chart data');
        console.error('Error fetching bar chart data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare the chart data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Sales Data',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green bars
        borderColor: 'rgba(75, 192, 192, 1)', // Dark green border for bars
        borderWidth: 1,
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
        text: 'Bar Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Products',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data.length ? (
        <Chart type="bar" data={chartData} options={chartOptions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChart;
