import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface CompareContextType {
  compareList: string[];
  addToCompare: (modelId: string) => void;
  removeFromCompare: (modelId: string) => void;
  clearCompare: () => void;
  isInCompare: (modelId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const MAX_COMPARE = 3;
const STORAGE_KEY = 'ai-model-compare-list';

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<string[]>(() => {
    // Load from localStorage on init
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage whenever compareList changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compareList));
    } catch (error) {
      console.error('Failed to save compare list:', error);
    }
  }, [compareList]);

  const addToCompare = (modelId: string) => {
    if (compareList.length >= MAX_COMPARE) {
      alert(`You can only compare up to ${MAX_COMPARE} models at a time`);
      return;
    }
    if (!compareList.includes(modelId)) {
      setCompareList([...compareList, modelId]);
    }
  };

  const removeFromCompare = (modelId: string) => {
    setCompareList(compareList.filter(id => id !== modelId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (modelId: string) => {
    return compareList.includes(modelId);
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompare
    }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
