import { SEO } from '@/components/SEO';
import { UseCaseCard } from '@/components/UseCaseCard';
import useCasesData from '@/data/use-cases.json';
import { UseCase } from '@/types';
export function UseCasesPage() {
  const useCases = useCasesData as UseCase[];
  return (
    <>
      <SEO
        title="AI Use Cases"
        description="Explore various use cases for AI models, from summarization to code generation."
        keywords="AI use cases, AI summarization, RAG AI, AI coding assistant, AI for writing, best AI for task, LLM use cases 2025"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AI Use Cases</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover how to apply AI models to solve real-world problems and create innovative applications.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.slug} useCase={useCase} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}