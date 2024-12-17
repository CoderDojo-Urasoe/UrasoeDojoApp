import React from 'react';
import { Search } from 'lucide-react';
import SearchSuggestions from './SearchSuggestions';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSuggestionSelect: (suggestion: string) => void;
  onBlur: () => void;
  onFocus: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  suggestions: string[];
  showSuggestions: boolean;
  selectedIndex: number;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  onSuggestionSelect,
  onBlur,
  onFocus,
  onKeyDown,
  suggestions,
  showSuggestions,
  selectedIndex,
  inputRef,
  placeholder = 'キーワードで検索...',
}: SearchInputProps) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        role="combobox"
        aria-expanded={showSuggestions}
        aria-controls="search-suggestions"
        aria-activedescendant={selectedIndex > -1 ? `suggestion-${selectedIndex}` : undefined}
        className="w-full px-4 py-3 rounded-lg pl-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
        autoComplete="off"
      />
      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      <button
        type="submit"
        className={`absolute right-3 top-2 px-4 py-1.5 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors ${
          !value.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!value.trim()}
      >
        検索
      </button>
      
      <SearchSuggestions
        suggestions={suggestions}
        onSelect={onSuggestionSelect}
        visible={showSuggestions}
        selectedIndex={selectedIndex}
      />
    </form>
  );
}