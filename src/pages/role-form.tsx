import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useRole } from '../hooks/useRole';
import { useRoleMutation } from '../hooks/useRoleMutation';
import RoleFormFields from '../components/forms/RoleFormFields';
import type { RoleFormData } from '../types';

export default function RoleForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { role, isLoading: isLoadingRole } = useRole(id);
  const { mutate, isLoading: isSaving } = useRoleMutation();

  const handleSubmit = (formData: RoleFormData) => {
    mutate(formData, {
      onSuccess: (savedRole) => {
        navigate(`/roles`);
      },
    });
  };

  if (id && isLoadingRole) {
    return <RoleFormSkeleton />;
  }

  const isEditing = !!id;

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/roles"
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          役割一覧に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {isEditing ? '役割を編集' : '新規役割を作成'}
        </h1>

        <RoleFormFields
          initialData={role}
          onSubmit={handleSubmit}
          isLoading={isSaving}
        />
      </div>
    </div>
  );
}

function RoleFormSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
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