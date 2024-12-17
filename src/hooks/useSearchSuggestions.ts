import { useMemo } from 'react';
import { useContents } from './useContents';
import { Content } from '../types';

export function useSearchSuggestions(query: string) {
  const { data: contents = [] } = useContents();
  
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    
    const normalizedQuery = query.toLowerCase().trim();
    const matches = new Set<string>();
    
    contents.forEach((content: Content) => {
      // Match by title
      if (content.title.toLowerCase().includes(normalizedQuery)) {
        matches.add(content.title);
      }
      
      // Match by category
      if (content.category.toLowerCase().includes(normalizedQuery)) {
        matches.add(content.category);
      }
      
      // Match by location
      if (content.location?.address.toLowerCase().includes(normalizedQuery)) {
        matches.add(content.location.address);
      }
    });
    
    return Array.from(matches).slice(0, 5); // Limit to 5 suggestions
  }, [contents, query]);

  return suggestions;
}