import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';
const comparisonData = {
  title: "GPT-4 vs. Claude 3",
  models: {
    gpt4: {
      name: "GPT-4 Class",
      pros: ["Superior reasoning and logic", "Extensive tool/function calling support", "Vast ecosystem and community"],
      cons: ["Higher cost and latency", "Stricter rate limits", "Can be less conversational"],
    },
    claude3: {
      name: "Claude 3 Class",
      pros: ["Excellent long-context performance", "Strong vision capabilities", "More natural, conversational tone"],
      cons: ["Slightly weaker on complex coding/logic", "Less mature tool support", "Can be overly cautious"],
    },
  },
  features: [
    { feature: "Complex Reasoning", gpt4: true, claude3: false },
    { feature: "Long-Context (200K+ tokens)", gpt4: false, claude3: true },
    { feature: "Vision Analysis", gpt4: true, claude3: true },
    { feature: "Cost-Effectiveness", gpt4: false, claude3: true },
    { feature: "API/Tool Ecosystem", gpt4: true, claude3: false },
  ],
  verdict: {
    gpt4: "Choose GPT-4 for mission-critical tasks requiring the highest accuracy in reasoning, complex instruction-following, and robust tool integration.",
    claude3: "Choose Claude 3 for applications involving long documents, nuanced writing, deep analysis of text or images, and where a more conversational user experience is desired."
  }
};
export function ComparisonPage() {
  return (
    <>
      <SEO
        title={comparisonData.title}
        description={`A detailed side-by-side comparison of ${comparisonData.models.gpt4.name} and ${comparisonData.models.claude3.name}.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Comparisons', href: '#' },
            { label: comparisonData.title, href: '/comparisons/gpt-vs-claude' }
          ]} />
          <header className="mt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{comparisonData.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              A head-to-head look at two of the industry's leading AI models.
            </p>
          </header>
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-center">{comparisonData.models.gpt4.name}</TableHead>
                    <TableHead className="text-center">{comparisonData.models.claude3.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.features.map(({ feature, gpt4, claude3 }) => (
                    <TableRow key={feature}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      <TableCell className="text-center">
                        {gpt4 ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />}
                      </TableCell>
                      <TableCell className="text-center">
                        {claude3 ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-500 mx-auto" />}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </section>
          <section className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">{comparisonData.models.gpt4.name}</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle>Pros</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    {comparisonData.models.gpt4.pros.map(pro => <p key={pro} className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{pro}</p>)}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Cons</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    {comparisonData.models.gpt4.cons.map(con => <p key={con} className="flex items-start"><X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />{con}</p>)}
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{comparisonData.models.claude3.name}</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle>Pros</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    {comparisonData.models.claude3.pros.map(pro => <p key={pro} className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{pro}</p>)}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Cons</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    {comparisonData.models.claude3.cons.map(con => <p key={con} className="flex items-start"><X className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />{con}</p>)}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">The Verdict</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-100 dark:bg-slate-900/50">
                <CardHeader><CardTitle>When to pick {comparisonData.models.gpt4.name}</CardTitle></CardHeader>
                <CardContent><p>{comparisonData.verdict.gpt4}</p></CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-900/50">
                <CardHeader><CardTitle>When to pick {comparisonData.models.claude3.name}</CardTitle></CardHeader>
                <CardContent><p>{comparisonData.verdict.claude3}</p></CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}