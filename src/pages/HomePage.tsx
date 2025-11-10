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

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>

            {/* Polymarket Prediction Widget */}
            <div className="mt-16 mb-8 flex flex-col items-center">
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

        {/* About Section - SEO Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Which AI Model To Use For What</h2>

            <p className="text-lg text-muted-foreground mb-4">
              WhichAIModelToUseForWhat.com is a practical, no-hype guide designed to help you understand and compare today's most powerful AI models. We make it easier to decide which model fits your specific task — whether it's summarization, retrieval-augmented generation (RAG), coding, multimodal analysis, or building AI agents.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              Our team tracks and compares leading models such as OpenAI GPT-5, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Qwen3-Max, and DeepSeek-V3. Each model page includes clear data on reasoning quality, coding ability, context length, cost, speed, and multimodal performance.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              The goal of AI Model Guide is to provide transparent, practical insights rather than marketing claims. We evaluate each model based on real-world use cases, benchmark results, and feedback from the developer community.
            </p>

            <p className="text-lg text-muted-foreground mb-4">
              Whether you're an engineer, a researcher, or a business professional exploring AI integration, our comparison tables and summaries help you make informed decisions. By understanding which AI model to use for what, you can save time, optimize costs, and build smarter applications.
            </p>

            <p className="text-lg text-muted-foreground">
              The site is continuously updated as new models are released. As the AI landscape evolves — from open-source frameworks like Llama and Mistral to proprietary systems like GPT-5 and Claude — our mission remains the same: help you navigate the complexity of large language models and choose the best tool for the job.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}