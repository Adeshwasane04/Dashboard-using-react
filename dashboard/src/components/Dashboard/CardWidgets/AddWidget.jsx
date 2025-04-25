import React from 'react';
import { PlusCircle } from 'lucide-react';

const AddWidget = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col justify-center items-center">
      <button className="flex items-center text-gray-500">
        <PlusCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">Add Widget</span>
      </button>
    </div>
  );
};

export default AddWidget;