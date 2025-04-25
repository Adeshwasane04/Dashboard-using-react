import React from 'react';

const HorizontalBarChart = ({ total, label, gradientColors, indicators }) => {
  return (
    <div>
      <div className="mb-1">
        <div className="text-sm font-medium flex justify-between">
          <span>{total}</span>
          <span className="text-gray-600">{label}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className={`bg-gradient-to-r ${gradientColors} h-2.5 rounded-full`} 
          style={{ width: '100%' }}
        ></div>
      </div>
      <div className="flex flex-wrap gap-2">
        {indicators.map((indicator, i) => (
          <div key={i} className="flex items-center">
            <span 
              className="h-3 w-3 rounded-full mr-1" 
              style={{ backgroundColor: indicator.color }}
            ></span>
            <span className="text-xs">{indicator.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBarChart;