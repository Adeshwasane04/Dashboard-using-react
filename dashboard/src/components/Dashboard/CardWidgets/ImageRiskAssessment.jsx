import React from 'react';

const ImageRiskAssessment = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Image Risk Assessment</h3>
      <div className="mb-1">
        <div className="text-sm font-medium flex justify-between">
          <span>1470</span>
          <span className="text-gray-600">Total Vulnerabilities</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center">
          <span className="h-3 w-3 bg-red-700 rounded-full mr-1"></span>
          <span className="text-xs">Critical (9)</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 bg-red-500 rounded-full mr-1"></span>
          <span className="text-xs">High (190)</span>
        </div>
      </div>
    </div>
  );
};

export default ImageRiskAssessment;