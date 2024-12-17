import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ChevronLeft } from 'lucide-react';
import { useMembers } from '../hooks/useMembers';
import MembersList from '../components/members/MembersList';

export default function Members() {
  const { data: members = [], isLoading } = useMembers();

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
          to="/members/new"
          className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          新規メンバー
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">メンバー一覧</h1>
        <MembersList members={members} isLoading={isLoading} />
      </div>
    </div>
  );
}