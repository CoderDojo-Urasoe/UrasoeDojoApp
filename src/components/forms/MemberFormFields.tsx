import React from 'react';
import { useForm } from 'react-hook-form';
import { User, MemberFormData } from '../../types';
import { useRoles } from '../../hooks/useRoles';

interface MemberFormFieldsProps {
  initialData?: User | null;
  onSubmit: (data: MemberFormData) => void;
  isLoading: boolean;
}

export default function MemberFormFields({
  initialData,
  onSubmit,
  isLoading,
}: MemberFormFieldsProps) {
  const { data: roles = [] } = useRoles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberFormData>({
    defaultValues: initialData ? {
      email: initialData.email,
      name: initialData.name,
      roleId: initialData.role.id,
    } : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: '必須項目です',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '有効なメールアドレスを入力してください',
            },
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          名前
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
        <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">
          役割
        </label>
        <select
          id="roleId"
          {...register('roleId', { required: '必須項目です' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">選択してください</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.roleId && (
          <p className="mt-1 text-sm text-red-600">{errors.roleId.message}</p>
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