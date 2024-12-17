import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Home, Book, Users, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Layout() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-800">CoderDojo浦添</span>
              </Link>
            </div>
            
            <div className="flex items-center">
              {user && (
                <div className="flex items-center space-x-4">
                  <Link to="/contents" className="text-gray-600 hover:text-gray-900">
                    <Book className="h-5 w-5" />
                  </Link>
                  <Link to="/members" className="text-gray-600 hover:text-gray-900">
                    <Users className="h-5 w-5" />
                  </Link>
                  <Link to="/app-info" className="text-gray-600 hover:text-gray-900">
                    <Settings className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}