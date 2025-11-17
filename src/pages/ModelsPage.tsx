import { SEO } from '@/components/SEO';
import { ModelCard } from '@/components/ModelCard';
import { SearchBar } from '@/components/search/SearchBar';
import { FilterPanel } from '@/components/search/FilterPanel';
import { useSearch } from '@/contexts/SearchContext';

export function ModelsPage() {
  const { filteredModels } = useSearch();
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
          <div className="mt-12">
            <div className="mb-8">
              <SearchBar />
            </div>
            <div className="grid gap-8 lg:grid-cols-4">
              <aside className="lg:col-span-1">
                <FilterPanel />
              </aside>
              <div className="lg:col-span-3">
                {filteredModels.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </div>
    </>
  );
}