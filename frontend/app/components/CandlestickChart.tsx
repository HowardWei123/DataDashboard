import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale, // Correct scale registration for time
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns'; // Adapter for date formatting

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale, // Correct scale for time-based charts
  CandlestickController,
  CandlestickElement,
  Title,
  Tooltip,
  Legend
);

// Define the interface for candlestick data points
interface CandlestickDataPoint {
  x: Date; // Ensure this is Date for time-based axis
  open: number;
  high: number;
  low: number;
  close: number;
}

const CandlestickChart: React.FC = () => {
  const [data, setData] = useState<CandlestickDataPoint[]>([]); // State to store candlestick data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch candlestick data from the API
        const response = await axios.get('http://localhost:8000/api/candlestick-data/');
        const parsedData = response.data.data.map((item: any) => ({
          x: new Date(item.x), // Convert string date to Date object
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }));
        setData(parsedData); // Set parsed data to state
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching candlestick data:', error);
      }
    };

    fetchData();
  }, []);

  // Configure chart data format
  const chartData = {
    datasets: [
      {
        label: 'Candlestick Data',
        data: data.map(item => ({
          x: item.x,
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        })),
        borderColor: 'rgba(0, 0, 0, 1)',  // Wick color
        backgroundColor: 'rgba(0, 0, 255, 0.3)', // Candlestick color

        barPercentage: 0.5, // Reduces the width of the bar (value from 0 to 1)
        categoryPercentage: 0.5, // Controls spacing between bars
      }
    ]
  };

  // Configure chart options
  const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Candlestick Chart',
        },
    },
    scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Price',
          },
        },
    },
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data.length ? (
        <Chart type="candlestick" data={chartData} options={chartOptions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandlestickChart;