import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import useCasesData from '@/data/use-cases.json';
import modelsData from '@/data/models.json';
import { UseCase, AIModel } from '@/types';
export function UseCaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const useCase = (useCasesData as UseCase[]).find(uc => uc.slug === slug);
  if (!useCase) {
    return <Navigate to="/404" replace />;
  }
  const models = modelsData as AIModel[];
  const getModelById = (id: string) => models.find(m => m.id === id);
  const recommendations = [
    { tier: '1', ...useCase.recommendations.premium },
    { tier: '2', ...useCase.recommendations.balanced },
    { tier: '3', ...useCase.recommendations.budget },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": useCase.faq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <>
      <SEO
        title={`Best AI Models for ${useCase.title}`}
        description={`Find the best AI models for ${useCase.title}. Compare premium, balanced, and budget options and learn how to evaluate them for your project.`}
      >
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </SEO>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Use Cases', href: '/use-cases' },
            { label: useCase.title, href: `/use-cases/${useCase.slug}` }
          ]} />
          <header className="mt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Best AI Models for {useCase.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{useCase.overview}</p>
          </header>
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Model Recommendations</h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Tier</TableHead>
                    <TableHead>Recommended Model</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recommendations.map(({ tier, model_id, reason }) => {
                    const model = getModelById(model_id);
                    return (
                      <TableRow key={tier}>
                        <TableCell className="font-medium">{tier}</TableCell>
                        <TableCell>{model ? model.name : 'N/A'}</TableCell>
                        <TableCell className="text-muted-foreground">{reason}</TableCell>
                        <TableCell className="text-right">
                          {model && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/models/${model.id}`}>View <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </section>
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">How to Evaluate Models for {useCase.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCase.evaluation_criteria.map((criterion) => (
                <Card key={criterion.title}>
                  <CardHeader><CardTitle>{criterion.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{criterion.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {useCase.faq.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </>
  );
}