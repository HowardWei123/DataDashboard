/*'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartData } from 'chart.js';

//import LineChart from '../app/components/LineChart';
//import BarChart from '../app/components/BarChart';
//import PieChart from '../app/components/PieChart';
import CandlestickChart from '../app/components/CandlestickChart';

import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Adapter for date formatting with TimeScale
import 'chartjs-chart-financial';

// Register the required components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,   // Register TimeScale for time-based charts
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement  // Required for Pie chart
   // Register Financial plugin for candlestick charts
);

const Home: React.FC = () => {
  /*const [lineData, setLineData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [{ label: 'Line Chart', data: [] }],
  });
  const [barData, setBarData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [{ label: 'Bar Chart', data: [] }],
  });
  const [pieData, setPieData] = useState<ChartData<'pie'>>({
    labels: [],
    datasets: [{ label: 'Pie Chart', data: [] }],
  });
  const [candlestickData, setCandlestickData] = useState<any>({
    labels: [],
    datasets: [{ label: 'Candlestick Chart', data: [] }],
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Line Chart Data
  /*      const lineResponse = await axios.get('/api/line-chart-data/');
        setLineData({
          labels: lineResponse.data.labels,
          datasets: [{ label: 'Line Chart', data: lineResponse.data.data }],
        });

        // Fetch Bar Chart Data
        const barResponse = await axios.get('/api/bar-chart-data/');
        setBarData({
          labels: barResponse.data.labels,
          datasets: [{ label: 'Bar Chart', data: barResponse.data.data }],
        });

        // Fetch Pie Chart Data
        const pieResponse = await axios.get('/api/pie-chart-data/');
        setPieData({
          labels: pieResponse.data.labels,
          datasets: [{ label: 'Pie Chart', data: pieResponse.data.data }],
        });

        // Fetch Candlestick Chart Data
        const candlestickResponse = await axios.get('/api/candlestick-data/');
        setCandlestickData(candlestickResponse.data);
        
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {/* <div className="chart">
          <h2 className="text-xl">Line Chart</h2>
          <LineChart data={lineData} />
        </div>
        <div className="chart">
          <h2 className="text-xl">Bar Chart</h2>
          <BarChart data={barData} />
        </div>
        <div className="chart">
          <h2 className="text-xl">Pie Chart</h2>
          <PieChart data={pieData} />
        </div>
       }<div className="chart">
          <h2 className="text-xl">Candlestick Chart</h2>
          <CandlestickChart data={candlestickData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
*/

'use client';

import React from 'react';
import LineChart from '../app/components/LineChart';
import BarChart from '../app/components/BarChart';
import PieChart from '../app/components/PieChart';
import CandlestickChart from '../app/components/CandlestickChart';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="chart">
          <h2 className="text-xl">Line Chart</h2>
          <LineChart />
          <h2 className="text-xl">Bar Chart</h2>
          <BarChart />
          <h2 className="text-xl">Pie Chart</h2>
          <PieChart />
          <h2 className="text-xl">Candlestick Chart</h2>
          <CandlestickChart />
        </div>
      </div>
    </div>
  );
};

export default Home;