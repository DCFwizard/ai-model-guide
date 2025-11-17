import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useCompare } from '@/contexts/CompareContext';
import { models } from '@/data/modelsLoader';
import { Star, Check, X, ArrowLeft } from 'lucide-react';

export function ModelComparePage() {
  const { compareList, clearCompare } = useCompare();
  const compareModels = models.filter(m => compareList.includes(m.id));

  if (compareList.length === 0) {
    return (
      <>
        <SEO
          title="Compare AI Models"
          description="Compare AI models side by side"
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">No Models Selected</h1>
          <p className="text-gray-600 mb-6">
            Please select at least 2 models from the Models page to compare.
          </p>
          <Button asChild>
            <Link to="/models">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Models
            </Link>
          </Button>
        </div>
      </>
    );
  }

  if (compareList.length === 1) {
    return (
      <>
        <SEO
          title="Compare AI Models"
          description="Compare AI models side by side"
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Add More Models</h1>
          <p className="text-gray-600 mb-6">
            You need at least 2 models to compare. Currently selected: {compareModels[0]?.name}
          </p>
          <Button asChild>
            <Link to="/models">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Models
            </Link>
          </Button>
        </div>
      </>
    );
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className={`h-4 w-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <SEO
        title={`Compare: ${compareModels.map(m => m.name).join(' vs ')}`}
        description={`Side-by-side comparison of ${compareModels.map(m => m.name).join(', ')}`}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Models', href: '/models' },
          { label: 'Compare', href: '/compare' }
        ]} />

        <div className="mt-8 flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Compare Models</h1>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/models">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Models
              </Link>
            </Button>
            <Button variant="outline" onClick={clearCompare}>
              Clear All
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-48 font-bold">Feature</TableHead>
                {compareModels.map(model => (
                  <TableHead key={model.id} className="text-center">
                    <div className="space-y-2">
                      <Link
                        to={`/models/${model.id}`}
                        className="font-semibold text-lg hover:underline"
                      >
                        {model.name}
                      </Link>
                      <div className="text-sm text-gray-600">{model.provider}</div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Description */}
              <TableRow>
                <TableCell className="font-semibold">Description</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id} className="max-w-md">
                    <p className="text-sm">{model.description}</p>
                  </TableCell>
                ))}
              </TableRow>

              {/* Modalities */}
              <TableRow>
                <TableCell className="font-semibold">Modalities</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <div className="flex flex-wrap gap-1">
                      {model.modalities?.map(mod => (
                        <Badge key={mod} variant="secondary" className="capitalize">
                          {mod}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* Context Window */}
              <TableRow>
                <TableCell className="font-semibold">Context Window</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id} className="capitalize">
                    {model.context_window}
                  </TableCell>
                ))}
              </TableRow>

              {/* Speed Rating */}
              <TableRow>
                <TableCell className="font-semibold">Speed Rating</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <div className="flex items-center gap-2">
                      {renderStars(model.rating?.speed || 0)}
                      <span className="text-sm">({model.rating?.speed}/5)</span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* Quality Rating */}
              <TableRow>
                <TableCell className="font-semibold">Quality Rating</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <div className="flex items-center gap-2">
                      {renderStars(model.rating?.quality || 0)}
                      <span className="text-sm">({model.rating?.quality}/5)</span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* Cost Rating */}
              <TableRow>
                <TableCell className="font-semibold">Cost Rating</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <div className="flex items-center gap-2">
                      {renderStars(model.rating?.cost || 0)}
                      <span className="text-sm">({model.rating?.cost}/5)</span>
                    </div>
                  </TableCell>
                ))}
              </TableRow>

              {/* Cost Tier */}
              <TableRow>
                <TableCell className="font-semibold">Cost Tier</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <Badge variant="outline">{model.cost_tier}</Badge>
                  </TableCell>
                ))}
              </TableRow>

              {/* Pricing */}
              <TableRow>
                <TableCell className="font-semibold">Pricing</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id} className="text-sm">
                    {model.pricing}
                  </TableCell>
                ))}
              </TableRow>

              {/* Open Weight */}
              <TableRow>
                <TableCell className="font-semibold">Open Weight</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    {model.open_weight ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-red-600" />
                    )}
                  </TableCell>
                ))}
              </TableRow>

              {/* Release Date */}
              <TableRow>
                <TableCell className="font-semibold">Release Date</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>{model.release_date}</TableCell>
                ))}
              </TableRow>

              {/* Best For */}
              <TableRow>
                <TableCell className="font-semibold">Best For</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id}>
                    <ul className="text-sm space-y-1">
                      {model.best_for?.slice(0, 3).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </TableCell>
                ))}
              </TableRow>

              {/* Limitations */}
              <TableRow>
                <TableCell className="font-semibold">Limitations</TableCell>
                {compareModels.map(model => (
                  <TableCell key={model.id} className="text-sm max-w-md">
                    {model.limitations}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Links to individual models */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {compareModels.map(model => (
            <Card key={model.id} className="p-4">
              <h3 className="font-semibold mb-2">{model.name}</h3>
              <Button asChild className="w-full">
                <Link to={`/models/${model.id}`}>
                  View Full Details
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
