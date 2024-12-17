import React from 'react';
import { useForm } from 'react-hook-form';
import { Role, RoleFormData } from '../../types';

const availablePermissions = [
  { id: 'read', name: '閲覧' },
  { id: 'write', name: '編集' },
  { id: 'delete', name: '削除' },
  { id: 'admin', name: '管理' },
  { id: 'all', name: 'すべての権限' },
];

interface RoleFormFieldsProps {
  initialData?: Role | null;
  onSubmit: (data: RoleFormData) => void;
  isLoading: boolean;
}

export default function RoleFormFields({
  initialData,
  onSubmit,
  isLoading,
}: RoleFormFieldsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    defaultValues: initialData ? {
      name: initialData.name,
      permissions: initialData.permissions,
    } : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          役割名
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          権限
        </label>
        <div className="space-y-2">
          {availablePermissions.map(({ id, name }) => (
            <label key={id} className="flex items-center">
              <input
                type="checkbox"
                value={id}
                {...register('permissions', { required: '少なくとも1つの権限を選択してください' })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{name}</span>
            </label>
          ))}
        </div>
        {errors.permissions && (
          <p className="mt-1 text-sm text-red-600">{errors.permissions.message}</p>
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