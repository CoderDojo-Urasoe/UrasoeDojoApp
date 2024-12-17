import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { useMembers } from './useMembers';

export function useMember(id: string | undefined) {
  const { data: members = [] } = useMembers();

  return useQuery({
    queryKey: ['member', id],
    queryFn: async () => {
      if (!id) return null;
      return members.find(member => member.id === id) || null;
    },
    enabled: !!id,
  });
}