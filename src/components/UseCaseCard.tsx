import { UseCase } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
interface UseCaseCardProps {
  useCase: UseCase;
}
export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const Icon = LucideIcons[useCase.icon] as LucideIcons.LucideIcon;
  return (
    <Link to={`/use-cases/${useCase.slug}`} className="block group">
      <Card className="h-full bg-card group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-sky-500/50 transition-all duration-300 ease-in-out">
        <CardHeader className="flex-row items-center gap-4 space-y-0">
          {Icon && <Icon className="w-8 h-8 text-sky-500" />}
          <CardTitle>{useCase.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{useCase.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}