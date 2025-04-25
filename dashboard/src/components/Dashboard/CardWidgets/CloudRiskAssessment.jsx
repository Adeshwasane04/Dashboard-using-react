import React from 'react';
import DonutChart from '../Charts/DonutChart';

const CloudRiskAssessment = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Cloud Account Risk Assessment</h3>
      <div className="flex justify-center">
        <DonutChart 
          data={[
            { label: 'Failed', value: 1689, color: '#D32F2F' },
            { label: 'Warning', value: 681, color: '#FFC107' },
            { label: 'Not available', value: 36, color: '#FFF8E1' },
            { label: 'Passed', value: 7253, color: '#4CAF50' }
          ]} 
          total={9659} 
          legend={[
            { label: 'Failed (1689)', color: '#D32F2F' },
            { label: 'Warning (681)', color: '#FFC107' },
            { label: 'Not available (36)', color: '#E0E0E0' },
            { label: 'Passed (7253)', color: '#4CAF50' }
          ]}
        />
      </div>
    </div>
  );
};

export default CloudRiskAssessment;