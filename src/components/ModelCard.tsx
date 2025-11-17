import { AIModel } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, DollarSign, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCompare } from '@/contexts/CompareContext';
import { toast } from 'sonner';

interface ModelCardProps {
  model: AIModel;
}
const iconMap = {
  medium: <FileText className="w-4 h-4" />,
  long: <FileText className="w-4 h-4" />,
  small: <FileText className="w-4 h-4" />
};
export function ModelCard({ model }: ModelCardProps) {
  const { compareList, addToCompare, removeFromCompare } = useCompare();
  const isInCompare = compareList.includes(model.id);

  const handleCompareToggle = (checked: boolean) => {
    if (checked) {
      const success = addToCompare(model.id);
      if (!success) {
        toast.error('Maximum 3 models can be compared at once');
      }
    } else {
      removeFromCompare(model.id);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="flex flex-col h-full bg-card shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <div className="flex-grow">
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <CardDescription>{model.provider}</CardDescription>
            </div>
            <div className="flex flex-col items-end gap-2">
              {model.open_weight && <Badge variant="secondary" className="whitespace-nowrap">Open-weight</Badge>}
              <div className="flex items-center gap-2">
                <Checkbox
                  id={`compare-${model.id}`}
                  checked={isInCompare}
                  onCheckedChange={handleCompareToggle}
                />
                <label
                  htmlFor={`compare-${model.id}`}
                  className="text-xs text-muted-foreground cursor-pointer"
                >
                  Compare
                </label>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
          <div className="flex flex-wrap gap-2">
            {model.strengths.slice(0, 3).map((strength) => (
              <Badge key={strength} variant="outline" className="capitalize">{strength}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1" title="Cost Tier">
              <DollarSign className="w-4 h-4" />
              <span>{model.cost_tier}</span>
            </div>
            <div className="flex items-center gap-1" title="Context Window">
              {iconMap[model.context_window]}
              <span className="capitalize">{model.context_window}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/models/${model.id}`}>
              Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}