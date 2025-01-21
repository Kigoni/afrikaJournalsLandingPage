import React from 'react';
import { Filter } from 'lucide-react';

interface FilterButtonsProps {
  selectedType: string;
  uniqueTypes: string[];
  onTypeSelect: (type: string) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedType,
  uniqueTypes,
  onTypeSelect,
}) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onTypeSelect("")}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${selectedType === "" 
          ? "bg-gray-900 text-white" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
      >
        <Filter className="w-4 h-4 mr-2" />
        All Types
      </button>
      {uniqueTypes.map((type) => (
        <button
          key={type}
          onClick={() => onTypeSelect(type)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${selectedType === type 
            ? "bg-gray-900 text-white" 
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
