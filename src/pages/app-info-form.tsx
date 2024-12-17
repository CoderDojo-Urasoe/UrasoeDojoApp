import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useAppInfo } from '../hooks/useAppInfo';
import { useAppInfoMutation } from '../hooks/useAppInfoMutation';
import AppInfoFormFields from '../components/forms/AppInfoFormFields';

export default function AppInfoForm() {
  const navigate = useNavigate();
  const { data: appInfo, isLoading: isLoadingAppInfo } = useAppInfo();
  const { mutate, isLoading: isSaving } = useAppInfoMutation();

  const handleSubmit = (formData: { title: string; content: string }) => {
    mutate(formData, {
      onSuccess: () => {
        navigate('/app-info');
      },
    });
  };

  if (isLoadingAppInfo) {
    return <AppInfoFormSkeleton />;
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/app-info"
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          アプリ情報に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          アプリ情報を編集
        </h1>

        <AppInfoFormFields
          initialData={appInfo}
          onSubmit={handleSubmit}
          isLoading={isSaving}
        />
      </div>
    </div>
  );
}

function AppInfoFormSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        
        <div className="space-y-6">
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}