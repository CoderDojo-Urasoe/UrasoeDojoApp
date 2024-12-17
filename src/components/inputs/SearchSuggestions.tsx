import React from 'react';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  visible: boolean;
  selectedIndex: number;
}

export default function SearchSuggestions({
  suggestions,
  onSelect,
  visible,
  selectedIndex
}: SearchSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div 
      id="search-suggestions"
      role="listbox"
      className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
    >
      <ul className="py-2">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index}
            role="option"
            aria-selected={index === selectedIndex}
            id={`suggestion-${index}`}
          >
            <button
              type="button"
              onClick={() => onSelect(suggestion)}
              className={`w-full px-4 py-2 text-left flex items-center text-gray-700 ${
                index === selectedIndex ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
              }`}
            >
              <Search className={`h-4 w-4 mr-2 ${
                index === selectedIndex ? 'text-indigo-500' : 'text-gray-400'
              }`} />
              <span>{suggestion}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}