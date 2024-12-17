import { useContents } from './useContents';

export function useFilteredContents(searchQuery: string, category: string) {
  const { data: contents = [], isLoading } = useContents();

  const filteredContents = contents.filter((content) => {
    const matchesSearch = !searchQuery || (
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.location?.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesCategory = !category || content.category === category;

    return matchesSearch && matchesCategory;
  });

  return {
    contents: filteredContents,
    isLoading,
  };
}