import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ChevronLeft } from 'lucide-react';
import { useRoles } from '../hooks/useRoles';
import RolesList from '../components/roles/RolesList';

export default function Roles() {
  const { data: roles = [], isLoading } = useRoles();

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
          to="/roles/new"
          className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          新規役割
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">役割一覧</h1>
        <RolesList roles={roles} isLoading={isLoading} />
      </div>
    </div>
  );
}