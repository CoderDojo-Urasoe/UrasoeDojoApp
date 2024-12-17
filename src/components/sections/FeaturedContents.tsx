import React from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../cards/ContentCard';
import { Content } from '../../types';

interface FeaturedContentsProps {
  contents: Content[];
}

export default function FeaturedContents({ contents }: FeaturedContentsProps) {
  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">おすすめコンテンツ</h2>
        <Link
          to="/contents"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          すべて見る →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </section>
  );
}