import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { Content, ContentFormData } from '../types';

export function useContentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: ContentFormData): Promise<Content> => {
      const { data, error } = await supabase
        .from('contents')
        .insert([{
          title: formData.title,
          description: formData.description,
          category: formData.category,
          location: formData.location || null,
          contact_info: formData.contactInfo || null,
          created_by: '1', // TODO: Get from auth context
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        title: data.title,
        description: data.description,
        category: data.category,
        location: data.location as Content['location'],
        contactInfo: data.contact_info as Content['contactInfo'],
        createdBy: data.created_by,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contents'] });
    },
  });
}