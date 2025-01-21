import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterButtons } from './FilterButtons';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedType: string;
  uniqueTypes: string[];
  onTypeSelect: (type: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedType,
  uniqueTypes,
  onTypeSelect
}) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Publications, Reports & Alerts
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover our latest research insights, policy recommendations, and academic updates
      </p>
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <FilterButtons
        selectedType={selectedType}
        uniqueTypes={uniqueTypes}
        onTypeSelect={onTypeSelect}
      />
    </div>
  );
};