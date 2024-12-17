import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Shield } from 'lucide-react';
import { Role } from '../../types';

interface RolesListProps {
  roles: Role[];
  isLoading: boolean;
}

export default function RolesList({ roles, isLoading }: RolesListProps) {
  if (isLoading) {
    return <RolesListSkeleton />;
  }

  if (roles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          役割が登録されていません。
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => (
        <div
          key={role.id}
          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-indigo-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
              </div>
              <Link
                to={`/roles/${role.id}/edit`}
                className="text-indigo-600 hover:text-indigo-900"
              >
                <Edit className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">権限</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RolesListSkeleton() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-5 w-5 bg-gray-200 rounded mr-2"></div>
              <div className="h-5 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-4 w-4 bg-gray-200 rounded"></div>
          </div>
          
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="flex gap-2">
              {[...Array(2)].map((_, j) => (
                <div key={j} className="h-6 bg-gray-200 rounded-full w-16"></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}