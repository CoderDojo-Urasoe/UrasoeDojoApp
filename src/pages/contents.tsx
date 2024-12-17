import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContentsList from '../components/contents/ContentsList';
import ContentsHeader from '../components/contents/ContentsHeader';
import ContentsFilters from '../components/contents/ContentsFilters';
import { useFilteredContents } from '../hooks/useFilteredContents';

export default function Contents() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';
  
  const { contents, isLoading } = useFilteredContents(searchQuery, selectedCategory);

  return (
    <div className="space-y-6">
      <ContentsHeader searchQuery={searchQuery} category={selectedCategory} />
      
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <ContentsFilters />
        </div>
        
        <div className="mt-6 lg:mt-0 lg:col-span-3">
          <ContentsList contents={contents} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}