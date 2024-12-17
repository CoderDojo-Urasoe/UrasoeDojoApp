import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Edit } from 'lucide-react';
import { useAppInfo } from '../hooks/useAppInfo';

export default function AppInfo() {
  const { data: appInfo, isLoading } = useAppInfo();

  if (isLoading) {
    return <AppInfoSkeleton />;
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          トップに戻る
        </Link>
        
        <Link
          to="/app-info/edit"
          className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <Edit className="h-4 w-4 mr-2" />
          編集
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{appInfo?.title}</h1>
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: appInfo?.content || '' }} />
        </div>
      </div>
    </div>
  );
}

function AppInfoSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-6 flex justify-between items-center">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}