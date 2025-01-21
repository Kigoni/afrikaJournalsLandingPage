import { useMemo } from 'react';
import { Publication } from './Publication';

export const usePublicationFilter = (
  publications: Publication[],
  searchTerm: string,
  selectedType: string
) => {
  return useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === "" || pub.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [publications, searchTerm, selectedType]);
};