import { useQuery } from '@tanstack/react-query';
import { User } from '../types';

// TODO: Replace with actual API call
const mockMembers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: '管理者',
    role: {
      id: '1',
      name: '管理者',
      permissions: ['all'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    email: 'editor@example.com',
    name: '編集者',
    role: {
      id: '2',
      name: '編集者',
      permissions: ['read', 'write'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function useMembers() {
  return useQuery({
    queryKey: ['members'],
    queryFn: async () => mockMembers,
  });
}