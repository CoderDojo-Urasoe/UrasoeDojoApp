import { useQuery } from '@tanstack/react-query';
import { Role } from '../types';

// TODO: Replace with actual API call
const mockRoles: Role[] = [
  {
    id: '1',
    name: '管理者',
    permissions: ['all'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: '編集者',
    permissions: ['read', 'write'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: '閲覧者',
    permissions: ['read'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function useRoles() {
  return useQuery({
    queryKey: ['roles'],
    queryFn: async () => mockRoles,
  });
}