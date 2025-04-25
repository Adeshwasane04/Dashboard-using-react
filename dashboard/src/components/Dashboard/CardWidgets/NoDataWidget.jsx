import React from 'react';

const NoDataWidget = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">{title}</h3>
      <div className="flex flex-col items-center justify-center h-40 text-gray-500">
        <svg className="h-10 w-10 text-gray-300 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 12V8H4v4m16 0-3-3m3 3-3 3M4 12l3-3m-3 3 3 3m0-6h10v6H7" />
        </svg>
        <p className="text-sm">No Graph data available!</p>
      </div>
    </div>
  );
};

export default NoDataWidget;