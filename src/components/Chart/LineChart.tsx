import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension : 0.3,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Jan', 'Febr', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [40000,500,6000,7000,800,90000,100000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
