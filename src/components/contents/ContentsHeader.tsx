import React from 'react';
import { categories } from '../../constants/categories';

interface ContentsHeaderProps {
  searchQuery: string;
  category: string;
}

export default function ContentsHeader({ searchQuery, category }: ContentsHeaderProps) {
  const selectedCategory = categories.find(c => c.id === category);
  const title = searchQuery
    ? `"${searchQuery}" の検索結果`
    : selectedCategory
      ? `${selectedCategory.name}に関する情報`
      : 'すべてのコンテンツ';

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600">
        浦添市の教育・子育てに関する情報をご覧いただけます。
      </p>
    </div>
  );
}