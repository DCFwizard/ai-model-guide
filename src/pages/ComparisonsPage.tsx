import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import modelsData from '@/data/modelsLoader';
import { AIModel } from '@/types';

export function ComparisonsPage() {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const navigate = useNavigate();
  const models = modelsData as AIModel[];

  const handleToggleModel = (modelId: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelId) ? prev.filter((id) => id !== modelId) : [...prev, modelId]
    );
  };

  const handleCompare = () => {
    if (selectedModels.length >= 2) {
      navigate(`/compare?models=${selectedModels.join(',')}`);
    }
  };

  return (
    <>
      <SEO
        title="Compare AI Models"
        description="Select and compare AI models side-by-side. Analyze features, pricing, performance, and use cases to choose the best model for your needs."
        keywords="compare AI models, AI comparison tool, GPT vs Claude, model comparison, LLM comparison, AI model selector"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Compare AI Models
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Select 2 or more models to compare their features, strengths, and ideal use cases.
            </p>
          </div>

          {/* Selection Counter */}
          <div className="mt-8 flex justify-center">
            <Card className="inline-block">
              <CardContent className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold">
                    {selectedModels.length} model{selectedModels.length !== 1 ? 's' : ''} selected
                  </span>
                  <Button
                    onClick={handleCompare}
                    disabled={selectedModels.length < 2}
                    size="sm"
                    className="bg-sky-600 hover:bg-sky-700"
                  >
                    Compare Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Model Selection Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => {
              const isSelected = selectedModels.includes(model.id);
              return (
                <Card
                  key={model.id}
                  className={`cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-sky-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => handleToggleModel(model.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {model.name}
                          {isSelected && (
                            <Badge variant="default" className="bg-sky-600">
                              Selected
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="mt-2">{model.provider}</CardDescription>
                      </div>
                      <Checkbox checked={isSelected} className="mt-1" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{model.cost_tier}</Badge>
                      <Badge variant="outline" className="capitalize">
                        {model.context_window} context
                      </Badge>
                      {model.open_weight && <Badge variant="outline">Open-weight</Badge>}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Help Text */}
          {selectedModels.length === 1 && (
            <p className="mt-8 text-center text-muted-foreground">
              Select at least one more model to enable comparison
            </p>
          )}
        </div>
      </div>
    </>
  );
}
