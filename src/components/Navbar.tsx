import React from 'react';
import profile from '../assests/profile-user.png'

const Navbar = () => {
  return (
    <div className="w-full bg-gray-100 h-16 shadow flex items-center justify-between px-4 sm:flex-col md:flex-row">
      <div>
        <h1 className="text-xl font-semibold">EzyMetrics Dashboard</h1>
      </div>
      <div className="flex items-center">
        <img
          src={profile}
          alt="User Avatar"
          className="rounded-full h-10 w-10"
        />
        <span className="ml-2 font-medium">Ahmed Khan</span>
      </div>
    </div>
  );
};

export default Navbar;
