import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold p-4">EzyMetrics</h1>
      <nav>
        <ul>
          <li className="p-4">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-4">
            <Link to="/leads">Leads</Link>
          </li>
          <li className="p-4">
            <Link to="/analytics">Analytics</Link>
          </li>
          <li className="p-4">
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
