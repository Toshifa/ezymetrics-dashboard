import React from 'react';
import PerformanceChart from '../charts/PerformanceChart';

const Analytics = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <PerformanceChart />
    </div>
  );
};

export default Analytics;
