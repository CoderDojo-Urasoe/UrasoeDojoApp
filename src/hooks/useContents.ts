import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { Content } from '../types';

export function useContents() {
  return useQuery({
    queryKey: ['contents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data.map((item): Content => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        location: item.location as Content['location'],
        contactInfo: item.contact_info as Content['contactInfo'],
        createdBy: item.created_by,
        createdAt: new Date(item.created_at),
        updatedAt: new Date(item.updated_at),
      }));
    },
  });
}

export function useFeaturedContents() {
  return useQuery({
    queryKey: ['contents', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contents')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;

      return data.map((item): Content => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        location: item.location as Content['location'],
        contactInfo: item.contact_info as Content['contactInfo'],
        createdBy: item.created_by,
        createdAt: new Date(item.created_at),
        updatedAt: new Date(item.updated_at),
      }));
    },
  });
}