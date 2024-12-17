import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ChevronLeft } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export default function Content() {
  const { id } = useParams();
  const { content, isLoading } = useContent(id);

  if (isLoading) {
    return <ContentSkeleton />;
  }

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          コンテンツが見つかりませんでした。
        </p>
        <Link
          to="/contents"
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          コンテンツ一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/contents"
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          コンテンツ一覧に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-gray-600 mb-8 whitespace-pre-wrap">{content.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {content.location && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">所在地</h2>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>{content.location.address}</span>
              </div>
            </div>
          )}

          {(content.contactInfo?.phone || content.contactInfo?.email || content.contactInfo?.website) && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">連絡先</h2>
              <div className="space-y-3">
                {content.contactInfo.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{content.contactInfo.phone}</span>
                  </div>
                )}
                {content.contactInfo.email && (
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2" />
                    <a
                      href={`mailto:${content.contactInfo.email}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {content.contactInfo.email}
                    </a>
                  </div>
                )}
                {content.contactInfo.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-5 w-5 mr-2" />
                    <a
                      href={content.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      ウェブサイトを開く
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ContentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-3 mb-8">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}