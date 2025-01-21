import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface Publication {
  id: string; // Ensure id property is included
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  hoverColor: string;
  type: string;
  title: string;
  description: string;
  link: string;
}

interface PublicationCardProps {
  publication: Publication;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void; // Add onLeave prop to handle mouse leave event
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
  isHovered,
  onHover,
  onLeave
}) => {
  const Icon = publication.icon;

  return (
    <div
      className={`relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl`}
      onMouseEnter={onHover}   // Handle mouse enter
      onMouseLeave={onLeave}   // Handle mouse leave
    >
      <div className="p-8">
        <div className={`inline-flex items-center ${publication.color} rounded-xl p-3 mb-6`}>
          <Icon className="h-6 w-6" />
        </div>

        <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-700">
          {publication.type}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          {publication.title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {publication.description}
        </p>

        <a
          href={publication.link}
          className={`mt-6 inline-flex items-center text-sm font-semibold ${
            isHovered ? 'text-white' : publication.color.split(' ')[1]
          } transition-colors duration-200`}
        >
          Read More
          <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isHovered ? 'transform translate-x-1' : ''
          }`} />
        </a>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${publication.hoverColor} opacity-0 transition-opacity duration-300 ease-in-out -z-10 ${
          isHovered ? 'opacity-10' : ''
        }`}
      />
    </div>
  );
};
