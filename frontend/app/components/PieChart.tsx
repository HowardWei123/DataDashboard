import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement, // Import ArcElement for pie chart
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register required elements for pie chart
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const PieChart: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]); // State for chart labels
  const [data, setData] = useState<number[]>([]); // State for chart data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pie chart data from the API
        const response = await axios.get('http://localhost:8000/api/pie-chart-data/');
        setLabels(response.data.labels); // Set labels from API response
        setData(response.data.data); // Set data from API response
      } catch (error) {
        setError('Failed to fetch pie chart data');
        console.error('Error fetching pie chart data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare the chart data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Red
          'rgba(54, 162, 235, 0.2)', // Blue
          'rgba(255, 206, 86, 0.2)', // Yellow
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Red
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 206, 86, 1)', // Yellow
        ],
        borderWidth: 1,
      }
    ]
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
        text: 'Pie Chart',
      },
    },
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data.length ? (
        <Chart type="pie" data={chartData} options={chartOptions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PieChart;
