import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, MapPin, Heart } from 'lucide-react';

const categories = [
  {
    id: 'education',
    name: '教育',
    icon: Book,
    description: '学習支援・教育プログラム',
    color: 'bg-blue-500',
  },
  {
    id: 'community',
    name: 'コミュニティ',
    icon: Users,
    description: '地域活動・交流の場',
    color: 'bg-green-500',
  },
  {
    id: 'facilities',
    name: '施設',
    icon: MapPin,
    description: '子育て支援施設・遊び場',
    color: 'bg-purple-500',
  },
  {
    id: 'support',
    name: '支援',
    icon: Heart,
    description: '子育て支援サービス',
    color: 'bg-red-500',
  },
];

export default function CategorySection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">カテゴリー</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ id, name, icon: Icon, description, color }) => (
          <Link
            key={id}
            to={`/contents?category=${id}`}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}