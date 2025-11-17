import { createContext, useState, useMemo, ReactNode, useContext } from 'react';
import { models } from '@/data/modelsLoader';
import { AIModel } from '@/types';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedModalities: string[];
  setSelectedModalities: (modalities: string[]) => void;
  selectedCostTier: string | null;
  setSelectedCostTier: (tier: string | null) => void;
  selectedIndustries: string[];
  setSelectedIndustries: (industries: string[]) => void;
  openWeightOnly: boolean;
  setOpenWeightOnly: (value: boolean) => void;
  sortBy: 'name' | 'speed' | 'quality' | 'cost' | 'release_date';
  setSortBy: (sort: 'name' | 'speed' | 'quality' | 'cost' | 'release_date') => void;
  filteredModels: AIModel[];
  clearFilters: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
  const [selectedCostTier, setSelectedCostTier] = useState<string | null>(null);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [openWeightOnly, setOpenWeightOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'speed' | 'quality' | 'cost' | 'release_date'>('name');

  const filteredModels = useMemo(() => {
    let result = models.filter(model => {
      // Search term
      const matchesSearch = !searchTerm ||
        model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.tasks?.some(task => task.toLowerCase().includes(searchTerm.toLowerCase()));

      // Modalities
      const matchesModality = selectedModalities.length === 0 ||
        selectedModalities.some(mod => model.modalities?.includes(mod));

      // Cost tier
      const matchesCost = !selectedCostTier || model.cost_tier === selectedCostTier;

      // Industries
      const matchesIndustry = selectedIndustries.length === 0 ||
        selectedIndustries.some(ind => model.industries?.includes(ind));

      // Open weight
      const matchesOpenWeight = !openWeightOnly || model.open_weight === true;

      return matchesSearch && matchesModality && matchesCost && matchesIndustry && matchesOpenWeight;
    });

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'speed':
          return (b.rating?.speed || 0) - (a.rating?.speed || 0);
        case 'quality':
          return (b.rating?.quality || 0) - (a.rating?.quality || 0);
        case 'cost':
          return (b.rating?.cost || 0) - (a.rating?.cost || 0);
        case 'release_date':
          return (b.release_date || '').localeCompare(a.release_date || '');
        default:
          return 0;
      }
    });

    return result;
  }, [searchTerm, selectedModalities, selectedCostTier, selectedIndustries, openWeightOnly, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedModalities([]);
    setSelectedCostTier(null);
    setSelectedIndustries([]);
    setOpenWeightOnly(false);
    setSortBy('name');
  };

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      selectedModalities,
      setSelectedModalities,
      selectedCostTier,
      setSelectedCostTier,
      selectedIndustries,
      setSelectedIndustries,
      openWeightOnly,
      setOpenWeightOnly,
      sortBy,
      setSortBy,
      filteredModels,
      clearFilters
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
