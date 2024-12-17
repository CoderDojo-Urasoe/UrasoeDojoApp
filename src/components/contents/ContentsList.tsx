import React from 'react';
import { Content } from '../../types';
import ContentCard from '../cards/ContentCard';
import ContentsSkeleton from './ContentsSkeleton';

interface ContentsListProps {
  contents: Content[];
  isLoading: boolean;
}

export default function ContentsList({ contents, isLoading }: ContentsListProps) {
  if (isLoading) {
    return <ContentsSkeleton />;
  }

  if (contents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          該当するコンテンツが見つかりませんでした。
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {contents.map((content) => (
        <ContentCard key={content.id} content={content} />
      ))}
    </div>
  );
}