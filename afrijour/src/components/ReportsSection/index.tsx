import React, { useState } from 'react';
import { publications } from './publications';
import { Header } from './Header';
import { PublicationGrid } from './PublicationGrid';
import { usePublicationFilter } from './usePublicationFilter';
import { usePublicationTypes } from './usePublicationTypes';

export const ReportsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // keep this as number | null
  const [selectedType, setSelectedType] = useState<string>("");

  const uniqueTypes = usePublicationTypes(publications);
  const filteredPublications = usePublicationFilter(publications, searchTerm, selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedType={selectedType}
          uniqueTypes={uniqueTypes}
          onTypeSelect={setSelectedType}
        />

        <PublicationGrid
          publications={filteredPublications}
          hoveredCard={hoveredCard}  // hoveredCard remains as number | null
          onCardHover={setHoveredCard}
        />
      </div>
    </div>
  );
};
