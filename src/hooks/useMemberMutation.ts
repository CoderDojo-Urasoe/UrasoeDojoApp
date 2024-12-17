import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { User, MemberFormData } from '../types';

// TODO: Replace with actual API call
const mockSaveMember = async (formData: MemberFormData): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: Math.random().toString(36).substr(2, 9),
    ...formData,
    role: {
      id: formData.roleId,
      name: 'Mock Role',
      permissions: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export function useMemberMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockSaveMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
    },
  });
}