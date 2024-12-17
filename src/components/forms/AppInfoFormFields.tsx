import React from 'react';
import { useForm } from 'react-hook-form';
import { AppInfo } from '../../types';

interface AppInfoFormFieldsProps {
  initialData?: AppInfo | null;
  onSubmit: (data: { title: string; content: string }) => void;
  isLoading: boolean;
}

export default function AppInfoFormFields({
  initialData,
  onSubmit,
  isLoading,
}: AppInfoFormFieldsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; content: string }>({
    defaultValues: initialData ? {
      title: initialData.title,
      content: initialData.content,
    } : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          内容
        </label>
        <textarea
          id="content"
          rows={10}
          {...register('content', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isLoading
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isLoading ? '保存中...' : '保存'}
        </button>
      </div>
    </form>
  );
}