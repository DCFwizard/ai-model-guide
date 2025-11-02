import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
interface BreadcrumbItem {
  label: string;
  href: string;
}
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            <Link
              to={item.href}
              className="hover:text-foreground transition-colors"
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}