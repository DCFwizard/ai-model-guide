import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedUseCases } from '@/components/RelatedUseCases';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle, XCircle, FileText, DollarSign, Zap, Star, DollarSign as CostIcon } from 'lucide-react';
import modelsData from '@/data/modelsLoader';
import { AIModel } from '@/types';
export function ModelDetailPage() {
  const { id } = useParams<{ id: string }>();
  const model = (modelsData as AIModel[]).find(m => m.id === id);
  if (!model) {
    return <Navigate to="/404" replace />;
  }
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": model.name,
    "applicationCategory": "AIModel",
    "operatingSystem": "Cloud",
    "provider": {
      "@type": "Organization",
      "name": model.provider
    },
    "description": model.description,
    "offers": {
      "@type": "Offer",
      "price": model.cost_tier,
      "priceCurrency": "USD"
    }
  };
  return (
    <>
      <SEO
        title={model.name}
        description={`Learn about the ${model.name} AI model from ${model.provider}, its strengths, use cases, and limitations.`}
      >
        <script type="application/ld+json">{JSON.stringify(softwareApplicationSchema)}</script>
      </SEO>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Models', href: '/models' },
            { label: model.name, href: `/models/${model.id}` }
          ]} />
          <header className="mt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{model.name}</h1>
                <p className="mt-2 text-xl text-muted-foreground">from {model.provider}</p>
                {model.category && (
                  <p className="mt-1 text-sm text-muted-foreground">{model.category}</p>
                )}
                {model.tags && model.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {model.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <Button asChild>
                <a href={model.links.site} target="_blank" rel="noopener noreferrer">
                  Visit Provider <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">{model.description}</p>
          </header>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              {/* Detailed Description */}
              {model.detailed_description && (
                <Card>
                  <CardHeader><CardTitle>Description</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{model.detailed_description}</p>
                  </CardContent>
                </Card>
              )}

              {/* Use Cases Detail */}
              {model.use_cases_detail && (
                <Card>
                  <CardHeader><CardTitle>Use Cases</CardTitle></CardHeader>
                  <CardContent className="space-y-6">
                    {model.use_cases_detail.sections.map((section, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                        <p className="text-muted-foreground">{section.content}</p>
                      </div>
                    ))}
                    {model.use_cases_detail.summary && (
                      <div className="mt-6 pt-6 border-t">
                        <p className="text-muted-foreground italic">{model.use_cases_detail.summary}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Fallback: Legacy Best For */}
              {!model.use_cases_detail && (
                <Card>
                  <CardHeader><CardTitle>Best For</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {model.best_for.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Pricing Detail */}
              {model.pricing_detail && (
                <Card>
                  <CardHeader><CardTitle>Pricing</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {model.pricing_detail.tiers.map((tier, i) => (
                      <div key={i} className="pb-4 border-b last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{tier.name}</h3>
                          <span className="text-sm font-mono bg-secondary px-2 py-1 rounded">{tier.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      </div>
                    ))}
                    {model.pricing_detail.summary && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-muted-foreground italic">{model.pricing_detail.summary}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Rating Detail */}
              {model.rating && model.rating_detail && (
                <Card>
                  <CardHeader><CardTitle>Rating</CardTitle></CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-500" />
                          <span className="font-semibold">Speed</span>
                        </div>
                        <span className="text-2xl font-bold">{model.rating.speed}/10</span>
                      </div>
                      {model.rating_detail.speed_explanation && (
                        <p className="text-sm text-muted-foreground">{model.rating_detail.speed_explanation}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="font-semibold">Quality</span>
                        </div>
                        <span className="text-2xl font-bold">{model.rating.quality}/10</span>
                      </div>
                      {model.rating_detail.quality_explanation && (
                        <p className="text-sm text-muted-foreground">{model.rating_detail.quality_explanation}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CostIcon className="w-5 h-5 text-yellow-500" />
                          <span className="font-semibold">Cost Efficiency</span>
                        </div>
                        <span className="text-2xl font-bold">{model.rating.cost}/10</span>
                      </div>
                      {model.rating_detail.cost_explanation && (
                        <p className="text-sm text-muted-foreground">{model.rating_detail.cost_explanation}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Developer Info */}
              {model.developer_info && (
                <Card>
                  <CardHeader><CardTitle>Developer</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{model.developer_info}</p>
                  </CardContent>
                </Card>
              )}

              {/* Legacy sections for models without detailed fields */}
              {!model.use_cases_detail && (
                <>
                  <Card>
                    <CardHeader><CardTitle>Consider If...</CardTitle></CardHeader>
                    <CardContent><p>{model.consider_if}</p></CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle>Limitations</CardTitle></CardHeader>
                    <CardContent>
                      <div className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <p>{model.limitations}</p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            <aside className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Quick Facts</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider</span>
                    <strong>{model.provider}</strong>
                  </div>
                  {model.release_date && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Released</span>
                      <strong>{model.release_date}</strong>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Open-weight</span>
                    <Badge variant={model.open_weight ? 'default' : 'secondary'}>
                      {model.open_weight ? 'Yes' : 'No'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cost Tier</span>
                    <div className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> <strong>{model.cost_tier}</strong></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Context</span>
                     <div className="flex items-center gap-1"><FileText className="w-4 h-4" /> <strong className="capitalize">{model.context_window}</strong></div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Modalities</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {model.modalities.map(m => <Badge key={m} variant="outline" className="capitalize">{m}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Strengths</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {model.strengths.map(s => <Badge key={s} variant="outline" className="capitalize">{s}</Badge>)}
                    </div>
                  </div>
                  {model.industries && model.industries.length > 0 && (
                    <div>
                      <span className="text-muted-foreground">Industries</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {model.industries.map(ind => <Badge key={ind} variant="outline">{ind}</Badge>)}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Links</CardTitle></CardHeader>
                <CardContent className="flex flex-col space-y-2">
                  <Button variant="outline" asChild><a href={model.links.site} target="_blank" rel="noopener noreferrer">Website <ExternalLink className="w-4 h-4 ml-auto" /></a></Button>
                  <Button variant="outline" asChild><a href={model.links.docs} target="_blank" rel="noopener noreferrer">Docs <ExternalLink className="w-4 h-4 ml-auto" /></a></Button>
                  <Button variant="outline" asChild><a href={model.links.pricing} target="_blank" rel="noopener noreferrer">Pricing <ExternalLink className="w-4 h-4 ml-auto" /></a></Button>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Related Use Cases */}
          <RelatedUseCases modelId={model.id} />
        </div>
      </div>
    </>
  );
}