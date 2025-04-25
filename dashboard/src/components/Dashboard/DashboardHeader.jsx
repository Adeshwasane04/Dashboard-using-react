import React from 'react';
import { PlusCircle, RefreshCw, MoreVertical } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-gray-800">CNAPP Dashboard</h1>
      <div className="flex items-center space-x-2">
        <button className="bg-white border border-gray-200 rounded-md px-4 py-2 text-sm flex items-center space-x-2">
          <PlusCircle className="h-4 w-4" />
          <span>Add Widget</span>
        </button>
        <button className="p-2 bg-white border border-gray-200 rounded-md">
          <RefreshCw className="h-4 w-4 text-gray-500" />
        </button>
        <button className="p-2 bg-white border border-gray-200 rounded-md">
          <MoreVertical className="h-4 w-4 text-gray-500" />
        </button>
        <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-1 bg-white">
          <div className="h-6 w-6 bg-purple-600 rounded-full text-white flex items-center justify-center text-xs font-bold">C</div>
          <span className="px-2 text-sm font-medium">Last 2 days</span>
          <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;