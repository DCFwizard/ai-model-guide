import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, GitCompare } from 'lucide-react';
import { useCompare } from '@/contexts/CompareContext';
import { models } from '@/data/modelsLoader';

export function CompareBar() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg p-4 z-50 animate-in slide-in-from-bottom">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GitCompare className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm text-foreground">Compare Models:</span>
        </div>

        <div className="flex flex-wrap gap-2 flex-1">
          {compareList.map(id => {
            const model = models.find(m => m.id === id);
            return (
              <Badge key={id} variant="secondary" className="flex items-center gap-2">
                {model?.name || id}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-red-600"
                  onClick={() => removeFromCompare(id)}
                />
              </Badge>
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={clearCompare}
          >
            Clear All
          </Button>
          <Button
            onClick={() => navigate('/compare')}
            disabled={compareList.length < 2}
            size="sm"
          >
            Compare ({compareList.length})
          </Button>
        </div>
      </div>
    </div>
  );
}
