import React from 'react';
import SearchInput from '../inputs/SearchInput';
import { useSearch } from '../../hooks/useSearch';

export default function Hero() {
  const {
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
  } = useSearch();

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
          浦添の教育・子育て情報を
          <br />
          見つけよう
        </h1>
        <p className="text-xl mb-8">
          地域の教育プログラムや子育て支援サービスを
          <br className="hidden sm:inline" />
          簡単に検索・閲覧できます
        </p>
        
        <div className="max-w-xl mx-auto">
          <SearchInput
            value={searchQuery}
            onChange={handleSearch}
            onSubmit={handleSubmit}
            onSuggestionSelect={handleSuggestionSelect}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            selectedIndex={selectedIndex}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
}