import { useMemo } from 'react';
import { Publication } from './Publication';

export const usePublicationTypes = (publications: Publication[]) => {
  return useMemo(() => {
    const types = new Set(publications.map(pub => pub.type));
    return Array.from(types).sort();
  }, [publications]);
};