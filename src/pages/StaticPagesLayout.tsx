import React from 'react';
interface StaticPageLayoutProps {
  title: string;
  children: React.ReactNode;
}
export function StaticPageLayout({ title, children }: StaticPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-a:text-sky-600 dark:prose-a:text-sky-400 hover:prose-a:text-sky-500">
          {children}
        </div>
      </div>
    </div>
  );
}