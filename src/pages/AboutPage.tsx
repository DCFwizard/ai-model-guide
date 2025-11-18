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
        <p>
          The world of artificial intelligence is evolving at an extraordinary pace. New models are released constantly, each with its own strengths, limitations, and ideal use cases. For developers, researchers, and product managers, navigating this landscape and choosing the right tool can feel overwhelming. That is why we created <strong>AI Model Guide – Which AI Model To Use For What?</strong>, a practical resource designed to help you make confident, informed decisions.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide clear, actionable, and vendor-neutral guidance for selecting the most effective AI model for your task. We cut through the hype and focus on what truly matters, offering concise insights that help you build better, faster, and more efficiently with AI. The right model can be the difference between a project that thrives and one that struggles, so we organize information around real-world use cases such as summarization, coding assistance, and retrieval augmented generation.
        </p>

        <h2>What We Do</h2>

        <h3>Curate and Compare</h3>
        <p>
          We closely track the leading AI models from providers like OpenAI, Anthropic, Google, Meta, and others, presenting their capabilities in a format that is easy to compare.
        </p>

        <h3>Focus on Practicality</h3>
        <p>
          We emphasize real-world performance, cost effectiveness, context length, and the specific tasks where each model excels.
        </p>

        <h3>Maintain Neutrality</h3>
        <p>
          All recommendations are based on the technical merits and common applications of each model, without preference for any provider.
        </p>

        <h3>Evolve With the AI Landscape</h3>
        <p>
          This guide is a living, continuously updated resource built to grow as AI advances. We also welcome community feedback and contributions to keep the information accurate and helpful for everyone.
        </p>

        <h2>Why We Do It</h2>
        <p>
          We believe AI should be accessible and understandable. By providing transparent, unbiased insights, our goal is to help you choose the right model for your needs and make your work with artificial intelligence easier, more efficient, and better informed. Whether you are here to compare tools, validate your choices, or simply explore what is possible, this guide is built to support you on your journey.
        </p>
      </StaticPageLayout>
    </>
  );
}