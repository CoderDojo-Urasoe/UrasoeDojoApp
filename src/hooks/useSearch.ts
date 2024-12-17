import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchSuggestions } from './useSearchSuggestions';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const suggestions = useSearchSuggestions(searchQuery);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setShowSuggestions(true);
    setSelectedIndex(-1); // Reset selection when query changes
  }, []);

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : -1
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > -1 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        if (selectedIndex > -1) {
          e.preventDefault();
          handleSuggestionSelect(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  }, [showSuggestions, suggestions, selectedIndex, handleSuggestionSelect]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/contents?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [searchQuery, navigate]);

  const handleBlur = useCallback(() => {
    // Delay hiding suggestions to allow clicking them
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }, 200);
  }, []);

  const handleFocus = useCallback(() => {
    if (searchQuery.trim()) {
      setShowSuggestions(true);
    }
  }, [searchQuery]);

  return {
    searchQuery,
    suggestions,
    showSuggestions,
    selectedIndex,
    handleSearch,
    handleSubmit,
    handleSuggestionSelect,
    handleBlur,
    handleFocus,
    handleKeyDown,
    inputRef,
  };
}