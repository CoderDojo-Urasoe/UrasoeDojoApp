import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe } from 'lucide-react';
import { Content } from '../../types';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{content.description}</p>
        
        <div className="space-y-2">
          {content.location && (
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{content.location.address}</span>
            </div>
          )}
          
          {content.contactInfo?.phone && (
            <div className="flex items-center text-gray-500">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">{content.contactInfo.phone}</span>
            </div>
          )}
          
          {content.contactInfo?.website && (
            <div className="flex items-center text-gray-500">
              <Globe className="h-4 w-4 mr-2" />
              <a 
                href={content.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                ウェブサイト
              </a>
            </div>
          )}
        </div>
        
        <Link
          to={`/contents/${content.id}`}
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          詳細を見る →
        </Link>
      </div>
    </div>
  );
}