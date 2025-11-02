import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the AI Model Guide team for questions, feedback, or suggestions."
      />
      <StaticPageLayout title="Contact Us">
        <p>
          We'd love to hear from you! Whether you have a question, feedback on the guide, a suggestion for a new model or use case, or just want to say hello, please don't hesitate to reach out.
        </p>
        <p>
          The best way to get in touch with us is by email. We do our best to respond to all inquiries as quickly as possible.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href="mailto:contact@whichaimodeltouseforwhat.com">
              <Mail className="mr-2 h-5 w-5" /> contact@whichaimodeltouseforwhat.com
            </a>
          </Button>
        </div>
        <h2 className="mt-12">Feedback & Contributions</h2>
        <p>
          This guide is a community-driven resource. If you notice any information that is outdated, incorrect, or could be improved, please let us know. We welcome contributions and suggestions to make this guide as accurate and helpful as possible for everyone.
        </p>
      </StaticPageLayout>
    </>
  );
}