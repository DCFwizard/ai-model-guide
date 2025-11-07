import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UseCaseCard } from '@/components/UseCaseCard';
import { ModelCard } from '@/components/ModelCard';
import useCasesData from '@/data/use-cases.json';
import modelsData from '@/data/models.json';
import { AIModel, UseCase } from '@/types';
export function HomePage() {
  const topModels = (modelsData as AIModel[]).slice(0, 6);
  const popularUseCases = (useCasesData as UseCase[]).slice(0, 6);
  return (
    <>
      <SEO
        keywords="AI model comparison, best AI model 2025, GPT-4 vs Claude, AI model guide, LLM comparison, machine learning models, choose AI model"
      />
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative bg-slate-100 dark:bg-slate-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-20 dark:opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="py-24 md:py-32 lg:py-40 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 tracking-tighter">
                Which AI Model To Use For What?
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300">
                A practical, no-hype guide to choosing the right model for your task. Compare capabilities, costs, and use cases to build better with AI.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link to="/models">Explore All Models</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/use-cases">Browse Use Cases</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Use Cases Section */}
        <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Popular Use Cases</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Discover how AI models can solve real-world problems.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {popularUseCases.map((useCase) => (
                <UseCaseCard key={useCase.slug} useCase={useCase} />
              ))}
            </div>
          </div>
        </section>
        {/* Top Models Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top AI Models</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A curated list of leading models across the industry.
              </p>
            </div>

            {/* Polymarket Prediction Widget */}
            <div className="mt-8 mb-12 flex flex-col items-center">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Market Prediction</h3>
              </div>
              <div className="w-full max-w-md">
                <iframe
                  title="polymarket-market-iframe"
                  src="https://embed.polymarket.com/market.html?market=which-company-has-best-ai-model-end-of-2025&features=volume&theme=dark"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800"
                  style={{ height: '180px' }}
                  frameBorder="0"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </div>
        </section>
        {/* SEO Text Block */}
        <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="text-2xl font-bold">Your Guide in the AI Landscape</h3>
             <p className="mt-4 text-muted-foreground">
                Choosing the right AI model is crucial. Whether you need the best AI model for summarization, a powerful LLM for coding, or an open-source model for RAG, our guide provides clear comparisons. We help you decide between options like GPT vs Claude vs Llama by focusing on practical application, performance, and cost, so you can choose the best AI model for your specific project with confidence.
             </p>
          </div>
        </section>
      </div>
    </>
  );
}