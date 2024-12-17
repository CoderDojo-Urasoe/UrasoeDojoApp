import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/categories';

export default function ContentsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || '';

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">カテゴリー</h2>
      
      <div className="space-y-2">
        {categories.map(({ id, name, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => handleCategoryChange(id)}
            className={`w-full flex items-center px-3 py-2 rounded-md text-sm ${
              selectedCategory === id
                ? `${color} text-white`
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-4 w-4 mr-2" />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}