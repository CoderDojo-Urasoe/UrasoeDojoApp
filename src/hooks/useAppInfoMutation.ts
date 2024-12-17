import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AppInfo } from '../types';

// TODO: Replace with actual API call
const mockSaveAppInfo = async (formData: { title: string; content: string }): Promise<AppInfo> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    id: '1',
    ...formData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export function useAppInfoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mockSaveAppInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appInfo'] });
    },
  });
}