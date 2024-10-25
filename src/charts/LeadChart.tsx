import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,  
  LineElement    
} from 'chart.js';
import { leadMetrics } from '../data/leadMetrics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,    
  PointElement,   
  LineElement,    
  Title,
  Tooltip,
  Legend
);

const LeadChart = () => {

  useEffect(() => {
    return () => {
      const chartInstance = ChartJS.getChart('lead-chart');
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: leadMetrics.map((metric) => metric.month),
    datasets: [
      {
        label: 'Number of Leads',
        data: leadMetrics.map((metric) => metric.leads),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar id="lead-chart" data={data} options={options} />;
};

export default LeadChart;
