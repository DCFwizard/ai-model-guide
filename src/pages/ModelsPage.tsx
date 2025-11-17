import { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { ModelCard } from '@/components/ModelCard';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import modelsData from '@/data/models.json';
import { AIModel, Modality } from '@/types';
type FilterType = 'all' | 'open_weight' | Modality;
export function ModelsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterType[]>(['all']);
  const models = modelsData as AIModel[];
  const handleFilterChange = (value: string[]) => {
    if (value.length === 0) {
      setActiveFilters(['all']);
    } else if (value.length > 1 && value.includes('all')) {
      setActiveFilters(value.filter(v => v !== 'all') as FilterType[]);
    } else {
      setActiveFilters(value as FilterType[]);
    }
  };
  const filteredModels = useMemo(() => {
    return models
      .filter(model => {
        const searchLower = searchTerm.toLowerCase();
        return (
          model.name.toLowerCase().includes(searchLower) ||
          model.provider.toLowerCase().includes(searchLower) ||
          model.description.toLowerCase().includes(searchLower)
        );
      })
      .filter(model => {
        if (activeFilters.includes('all')) return true;
        const hasOpenWeight = activeFilters.includes('open_weight') && model.open_weight;
        const hasModality = activeFilters.some(filter => model.modalities.includes(filter as Modality));
        return hasOpenWeight || hasModality;
      });
  }, [models, searchTerm, activeFilters]);
  return (
    <>
      <SEO
        title="All AI Models"
        description="Filter and compare all available AI models to find the perfect one for your project."
        keywords="AI models list, GPT-4, Claude 3, Gemini, Llama 3, Mistral, compare AI models, LLM models 2025, open source AI models"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Explore Top AI Models</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Search, filter, and find the perfect model for your needs.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400">
              Compare key capabilities across leading AI models — including reasoning performance, coding ability, multimodal features, context window size, and pricing tiers. Use the model cards to quickly assess strengths and limitations for tasks such as writing, coding, research, agents, and automation.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search models by name, provider, or keyword..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ToggleGroup type="multiple" value={activeFilters} onValueChange={handleFilterChange} className="justify-center">
                <ToggleGroupItem value="all">All</ToggleGroupItem>
                <ToggleGroupItem value="open_weight">Open-weight</ToggleGroupItem>
                <ToggleGroupItem value="text">Text</ToggleGroupItem>
                <ToggleGroupItem value="vision">Vision</ToggleGroupItem>
                <ToggleGroupItem value="speech">Speech</ToggleGroupItem>
              </ToggleGroup>
            </div>
            {filteredModels.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Models Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}