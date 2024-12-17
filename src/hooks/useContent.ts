import { useQuery } from '@tanstack/react-query';
import { Content } from '../types';
import { useContents } from './useContents';

export function useContent(id: string | undefined) {
  const { data: contents = [] } = useContents();

  return useQuery({
    queryKey: ['content', id],
    queryFn: async () => {
      if (!id) return null;
      return contents.find(content => content.id === id) || null;
    },
    enabled: !!id,
  });
}