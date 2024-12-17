import React from 'react';
import { useForm } from 'react-hook-form';
import { Content, ContentFormData } from '../../types';
import { categories } from '../../constants/categories';

interface ContentFormFieldsProps {
  initialData?: Content | null;
  onSubmit: (data: ContentFormData) => void;
  isLoading: boolean;
}

export default function ContentFormFields({
  initialData,
  onSubmit,
  isLoading,
}: ContentFormFieldsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContentFormData>({
    defaultValues: initialData ? {
      title: initialData.title,
      description: initialData.description,
      category: initialData.category,
      location: initialData.location,
      contactInfo: initialData.contactInfo,
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
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          説明
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          カテゴリー
        </label>
        <select
          id="category"
          {...register('category', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">選択してください</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">所在地情報</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="location.address" className="block text-sm font-medium text-gray-700">
              住所
            </label>
            <input
              type="text"
              id="location.address"
              {...register('location.address')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">連絡先情報</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="contactInfo.phone" className="block text-sm font-medium text-gray-700">
              電話番号
            </label>
            <input
              type="tel"
              id="contactInfo.phone"
              {...register('contactInfo.phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="contactInfo.email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              id="contactInfo.email"
              {...register('contactInfo.email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="contactInfo.website" className="block text-sm font-medium text-gray-700">
              ウェブサイト
            </label>
            <input
              type="url"
              id="contactInfo.website"
              {...register('contactInfo.website')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
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