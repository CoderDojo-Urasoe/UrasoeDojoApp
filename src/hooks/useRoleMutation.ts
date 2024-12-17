import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Role, RoleFormData } from '../types';

// TODO: Replace with actual API call
const mockSaveRole = async (formData: RoleFormData): Promise<Role> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: Math.random().toString(36).substr(2, 9),
    ...formData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export function useRoleMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockSaveRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
  });
}