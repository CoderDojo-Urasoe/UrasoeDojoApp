import { useQuery } from '@tanstack/react-query';
import { Role } from '../types';
import { useRoles } from './useRoles';

export function useRole(id: string | undefined) {
  const { data: roles = [] } = useRoles();

  return useQuery({
    queryKey: ['role', id],
    queryFn: async () => {
      if (!id) return null;
      return roles.find(role => role.id === id) || null;
    },
    enabled: !!id,
  });
}