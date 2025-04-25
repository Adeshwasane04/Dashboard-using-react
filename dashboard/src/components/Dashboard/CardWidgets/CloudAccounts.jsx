
import React from 'react';
import DonutChart from '../Charts/DonutChart';

const CloudAccounts = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Cloud Accounts</h3>
      <div className="flex justify-center">
        <DonutChart 
          data={[
            { label: 'Connected', value: 1, color: '#4169E1' },
            { label: 'Not Connected', value: 1, color: '#E8EEFF' }
          ]} 
          total={2} 
          legend={[
            { label: 'Connected (2)', color: '#4169E1' },
            { label: 'Not Connected (2)', color: '#E8EEFF' }
          ]}
        />
      </div>
    </div>
  );
};

export default CloudAccounts;