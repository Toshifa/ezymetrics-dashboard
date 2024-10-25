import React from 'react';
import { Line } from 'react-chartjs-2';
import { metrics } from '../data/metrics';

const PerformanceChart = () => {
  const data = {
    labels: metrics.map((m) => m.month),
    datasets: [
      {
        label: 'Performance',
        data: metrics.map((m) => m.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default PerformanceChart;
