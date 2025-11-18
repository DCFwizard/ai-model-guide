import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the mission and purpose of the AI Model Guide."
      />
      <StaticPageLayout title="About Us">
        <div className="space-y-8">
          <div className="text-lg leading-relaxed">
            <p>
              The world of artificial intelligence is evolving at an extraordinary pace. New models are released constantly, each with its own strengths, limitations, and ideal use cases. For developers, researchers, and product managers, navigating this landscape and choosing the right tool can feel overwhelming.
            </p>
            <p className="mt-4">
              That is why we created <strong className="text-primary">AI Model Guide – Which AI Model To Use For What?</strong>, a practical resource designed to help you make confident, informed decisions.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6 my-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is simple: to provide <strong>clear, actionable, and vendor-neutral guidance</strong> for selecting the most effective AI model for your task. We cut through the hype and focus on what truly matters, offering concise insights that help you build better, faster, and more efficiently with AI.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              The right model can be the difference between a project that thrives and one that struggles, so we organize information around real-world use cases such as <em>summarization</em>, <em>coding assistance</em>, and <em>retrieval augmented generation</em>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">What We Do</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Curate and Compare
                </h3>
                <p>
                  We closely track the leading AI models from providers like <strong>OpenAI</strong>, <strong>Anthropic</strong>, <strong>Google</strong>, <strong>Meta</strong>, and others, presenting their capabilities in a format that is easy to compare.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Focus on Practicality
                </h3>
                <p>
                  We emphasize real-world performance, cost effectiveness, context length, and the specific tasks where each model excels.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Maintain Neutrality
                </h3>
                <p>
                  All recommendations are based on the technical merits and common applications of each model, without preference for any provider.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  Evolve With the AI Landscape
                </h3>
                <p>
                  This guide is a living, continuously updated resource built to grow as AI advances. We also welcome community feedback and contributions to keep the information accurate and helpful for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why We Do It</h2>
            <p className="text-lg leading-relaxed">
              We believe AI should be <strong>accessible and understandable</strong>. By providing transparent, unbiased insights, our goal is to help you choose the right model for your needs and make your work with artificial intelligence easier, more efficient, and better informed.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Whether you are here to <strong>compare tools</strong>, <strong>validate your choices</strong>, or simply <strong>explore what is possible</strong>, this guide is built to support you on your journey.
            </p>
          </div>
        </div>
      </StaticPageLayout>
    </>
  );
}