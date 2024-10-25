import React from 'react';
import PerformanceChart from '../charts/PerformanceChart';
import LeadChart from '../charts/LeadChart';
import CustomizableWidget from './CustomizableWidget';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  {/* Responsive grid */}
        <CustomizableWidget title="Performance Metrics">
          <PerformanceChart />
        </CustomizableWidget>
        <CustomizableWidget title="Lead Stats">
          <LeadChart />
        </CustomizableWidget>
      </div>
    </div>
  );
};

export default Dashboard;
