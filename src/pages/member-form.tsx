import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useMember } from '../hooks/useMember';
import { useMemberMutation } from '../hooks/useMemberMutation';
import MemberFormFields from '../components/forms/MemberFormFields';
import type { MemberFormData } from '../types';

export default function MemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { member, isLoading: isLoadingMember } = useMember(id);
  const { mutate, isLoading: isSaving } = useMemberMutation();

  const handleSubmit = (formData: MemberFormData) => {
    mutate(formData, {
      onSuccess: (savedMember) => {
        navigate(`/members`);
      },
    });
  };

  if (id && isLoadingMember) {
    return <MemberFormSkeleton />;
  }

  const isEditing = !!id;

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/members"
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          メンバー一覧に戻る
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {isEditing ? 'メンバーを編集' : '新規メンバーを作成'}
        </h1>

        <MemberFormFields
          initialData={member}
          onSubmit={handleSubmit}
          isLoading={isSaving}
        />
      </div>
    </div>
  );
}

function MemberFormSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
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