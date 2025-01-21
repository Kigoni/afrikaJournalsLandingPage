import React from 'react';
import { Publication } from './Publication';
import { PublicationCard } from './PublicationCard';

interface PublicationGridProps {
  publications: Publication[];
  hoveredCard: number | null;
  onCardHover: (index: number | null) => void;
}

export const PublicationGrid: React.FC<PublicationGridProps> = ({
  publications,
  hoveredCard,
  onCardHover
}) => {
  if (publications.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">
          No publications found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publications.map((publication, index) => (
        <PublicationCard
          key={index}
          publication={publication}
          isHovered={hoveredCard === index}
          onHover={() => onCardHover(index)}
          onLeave={() => onCardHover(null)}
        />
      ))}
    </div>
  );
};