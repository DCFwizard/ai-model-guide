import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the mission and purpose of the AI Model Guide."
      />
      <StaticPageLayout title="About This Guide">
        <p>
          The world of AI is moving at an incredible pace. New models are released constantly, each with its own unique strengths, weaknesses, and ideal use cases. For developers, researchers, and product managers, navigating this landscape to find the right tool for the job can be overwhelming.
        </p>
        <p>
          That's why we created the <strong>AI Model Guide</strong>.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide a clear, practical, and vendor-neutral resource for choosing the right AI model. We cut through the hype to deliver concise, actionable information that helps you build better, faster, and more effectively with AI.
        </p>
        <p>
          We believe that the right model can be the difference between a project that succeeds and one that struggles. By organizing information around real-world use cases—like summarization, coding assistance, and Retrieval-Augmented Generation (RAG)—we aim to connect your problem directly to the best possible solution.
        </p>
        <h2>What We Do</h2>
        <ul>
          <li><strong>Curate and Compare:</strong> We track the leading AI models from providers like OpenAI, Anthropic, Google, Meta, and more, presenting their capabilities in an easy-to-compare format.</li>
          <li><strong>Focus on Practicality:</strong> We emphasize real-world performance, cost-effectiveness, and the specific tasks where each model excels.</li>
          <li><strong>Maintain Neutrality:</strong> Our recommendations are based on the technical merits and common applications of each model, without preference for any single provider.</li>
        </ul>
        <p>
          This guide is a living document, updated as the AI landscape evolves. We hope it serves as a valuable companion on your journey of building with artificial intelligence.
        </p>
        <p className="mt-8 text-muted-foreground">
          Built with ❤️ at Cloudflare
        </p>
      </StaticPageLayout>
    </>
  );
}