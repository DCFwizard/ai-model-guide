import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
export function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not Found" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-sky-500">404</h1>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page Not Found
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link to="/">Go back home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="#">Contact support <span aria-hidden="true">&rarr;</span></Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}