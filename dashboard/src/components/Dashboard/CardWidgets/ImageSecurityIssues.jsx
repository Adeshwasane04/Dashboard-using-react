import React from 'react';

const ImageSecurityIssues = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Image Security Issues</h3>
      <div className="mb-1">
        <div className="text-sm font-medium flex justify-between">
          <span>2</span>
          <span className="text-gray-600">Total Images</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-gradient-to-r from-red-900 via-red-600 to-orange-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center">
          <span className="h-3 w-3 bg-red-900 rounded-full mr-1"></span>
          <span className="text-xs">Critical (2)</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 bg-red-600 rounded-full mr-1"></span>
          <span className="text-xs">High (2)</span>
        </div>
      </div>
    </div>
  );
};

export default ImageSecurityIssues;