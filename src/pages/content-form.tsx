import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import ContentFormFields from '../components/forms/ContentFormFields';
import { useContentMutation } from '../hooks/useContentMutation';
import type { ContentFormData } from '../types';

export default function ContentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { content, isLoading: isLoadingContent } = useContent(id);
  const { mutate, isLoading: isSaving } = useContentMutation();

  const handleSubmit = (formData: ContentFormData) => {
    mutate(formData, {
      onSuccess: (savedContent) => {
        navigate(`/contents/${savedContent.id}`);
      },
    });
  };

  if (id && isLoadingContent) {
    return <ContentFormSkeleton />;
  }

  const isEditing = !!id;

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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {isEditing ? 'コンテンツを編集' : '新規コンテンツを作成'}
        </h1>

        <ContentFormFields
          initialData={content}
          onSubmit={handleSubmit}
          isLoading={isSaving}
        />
      </div>
    </div>
  );
}

function ContentFormSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          ))}
          
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}