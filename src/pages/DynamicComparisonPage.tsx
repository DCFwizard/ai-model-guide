import { useSearchParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowLeft } from 'lucide-react';
import modelsData from '@/data/models.json';
import { AIModel } from '@/types';

export function DynamicComparisonPage() {
  const [searchParams] = useSearchParams();
  const modelIds = searchParams.get('models')?.split(',') || [];

  if (modelIds.length < 2) {
    return <Navigate to="/comparisons" replace />;
  }

  const models = (modelsData as AIModel[]).filter((m) => modelIds.includes(m.id));

  if (models.length < 2) {
    return <Navigate to="/comparisons" replace />;
  }

  const comparisonTitle = models.map((m) => m.name).join(' vs ');

  return (
    <>
      <SEO
        title={comparisonTitle}
        description={`Side-by-side comparison of ${comparisonTitle}. Compare features, pricing, strengths, and best use cases.`}
        keywords={`${models.map((m) => m.name).join(', ')}, AI comparison, LLM comparison, model comparison`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Comparisons', href: '/comparisons' },
              { label: comparisonTitle, href: `/compare?models=${modelIds.join(',')}` },
            ]}
          />

          <div className="mt-8 flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{comparisonTitle}</h1>
            <Button variant="outline" asChild>
              <Link to="/comparisons">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Change Selection
              </Link>
            </Button>
          </div>

          {/* Models Overview */}
          <div className="mt-12 grid gap-6" style={{ gridTemplateColumns: `repeat(${models.length}, minmax(0, 1fr))` }}>
            {models.map((model) => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle>{model.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{model.provider}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{model.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{model.cost_tier}</Badge>
                    <Badge variant="outline" className="capitalize">
                      {model.context_window}
                    </Badge>
                    {model.open_weight && <Badge variant="secondary">Open-weight</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    {models.map((model) => (
                      <TableHead key={model.id} className="text-center">
                        {model.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Provider</TableCell>
                    {models.map((model) => (
                      <TableCell key={model.id} className="text-center">
                        {model.provider}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cost Tier</TableCell>
                    {models.map((model) => (
                      <TableCell key={model.id} className="text-center">
                        {model.cost_tier}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Context Window</TableCell>
                    {models.map((model) => (
                      <TableCell key={model.id} className="text-center capitalize">
                        {model.context_window}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Open-weight</TableCell>
                    {models.map((model) => (
                      <TableCell key={model.id} className="text-center">
                        {model.open_weight ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Modalities</TableCell>
                    {models.map((model) => (
                      <TableCell key={model.id} className="text-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {model.modalities.map((m) => (
                            <Badge key={m} variant="outline" className="text-xs capitalize">
                              {m}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Strengths Comparison */}
          <div className="mt-12 grid gap-6" style={{ gridTemplateColumns: `repeat(${models.length}, minmax(0, 1fr))` }}>
            {models.map((model) => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle>Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {model.strengths.map((s) => (
                      <Badge key={s} variant="outline" className="capitalize">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Best For Comparison */}
          <div className="mt-8 grid gap-6" style={{ gridTemplateColumns: `repeat(${models.length}, minmax(0, 1fr))` }}>
            {models.map((model) => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle>Best For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {model.best_for.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Limitations */}
          <div className="mt-8 grid gap-6" style={{ gridTemplateColumns: `repeat(${models.length}, minmax(0, 1fr))` }}>
            {models.map((model) => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle>Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{model.limitations}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/models">Explore All Models</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
