import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import useCasesData from '@/data/use-cases.json';
import { UseCase } from '@/types';

interface RelatedUseCasesProps {
  modelId: string;
}

export function RelatedUseCases({ modelId }: RelatedUseCasesProps) {
  // Find use cases where this model is recommended
  const relatedUseCases = (useCasesData as UseCase[]).filter(useCase => {
    const recommendations = useCase.recommendations;
    return (
      recommendations.premium.model_id === modelId ||
      recommendations.balanced.model_id === modelId ||
      recommendations.budget.model_id === modelId
    );
  });

  if (relatedUseCases.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Recommended For</h2>
      <p className="text-muted-foreground mb-8">
        This model is recommended for the following use cases:
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedUseCases.map((useCase) => {
          // Determine which tier this model is recommended at
          const tier =
            useCase.recommendations.premium.model_id === modelId ? '1' :
            useCase.recommendations.balanced.model_id === modelId ? '2' :
            '3';

          return (
            <Link key={useCase.slug} to={`/use-cases/${useCase.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="group-hover:text-sky-600 transition-colors">
                      {useCase.title}
                    </CardTitle>
                    <Badge variant={tier === '1' ? 'default' : 'secondary'}>
                      {tier}
                    </Badge>
                  </div>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-sky-600 group-hover:text-sky-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
