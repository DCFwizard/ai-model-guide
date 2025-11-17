import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/contexts/SearchContext';

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        type="text"
        placeholder="Search models, providers, tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 w-full"
      />
    </div>
  );
}
