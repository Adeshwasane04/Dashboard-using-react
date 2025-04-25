import React from 'react';

const DonutChart = ({ data, total, legend }) => {
  let cumulativePercent = 0;
  
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {data.map((segment, i) => {
            // Calculate the segment parameters
            const segmentPercent = (segment.value / total) * 100;
            const startAngle = cumulativePercent * 3.6; // 3.6 = 360 / 100
            cumulativePercent += segmentPercent;
            const endAngle = cumulativePercent * 3.6;
            
            // Convert angles to radians and calculate path
            const startRad = (startAngle - 90) * Math.PI / 180;
            const endRad = (endAngle - 90) * Math.PI / 180;
            
            const x1 = 50 + 40 * Math.cos(startRad);
            const y1 = 50 + 40 * Math.sin(startRad);
            const x2 = 50 + 40 * Math.cos(endRad);
            const y2 = 50 + 40 * Math.sin(endRad);
            
            // Create the path command
            const largeArcFlag = segmentPercent > 50 ? 1 : 0;
            const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            
            return (
              <path
                key={i}
                d={pathData}
                fill={segment.color}
              />
            );
          })}
          <circle cx="50" cy="50" r="25" fill="white" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xl font-bold">{total}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-1 gap-1 text-sm">
        {legend.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;