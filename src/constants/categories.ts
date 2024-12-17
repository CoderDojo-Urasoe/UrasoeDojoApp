import { Book, Users, MapPin, Heart } from 'lucide-react';

export const categories = [
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