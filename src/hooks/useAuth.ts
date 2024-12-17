import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const navigate = useNavigate();
  const { login, logout } = useAuthStore();

  useEffect(() => {
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          // Get user's role from the database
          const { data: userData, error } = await supabase
            .from('users')
            .select('*, roles(*)')
            .eq('id', session.user.id)
            .single();

          if (error || !userData) {
            console.error('Error fetching user data:', error);
            return;
          }

          login({
            id: userData.id,
            email: userData.email,
            name: userData.name,
            role: {
              id: userData.roles.id,
              name: userData.roles.name,
              permissions: userData.roles.permissions,
              createdAt: new Date(userData.roles.created_at),
              updatedAt: new Date(userData.roles.updated_at),
            },
            createdAt: new Date(userData.created_at),
            updatedAt: new Date(userData.updated_at),
          });
        } else {
          logout();
          navigate('/login');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [login, logout, navigate]);

  return {
    signIn: async (email: string, password: string) => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  };
}