import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import blogPosts from '@/data/blogPostsLoader';
import { BlogPost } from '@/types';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const SITE_URL = 'https://whichaimodeltouseforwhat.com';

  // BlogPosting Schema.org
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'author': {
      '@type': 'Organization',
      'name': post.author,
    },
    'datePublished': post.publishDate,
    'dateModified': post.publishDate,
    'publisher': {
      '@type': 'Organization',
      'name': 'AI Model Guide',
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/logo.png`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    'articleSection': post.category,
    'keywords': post.tags.join(', '),
    'wordCount': post.content.split(' ').length,
    'timeRequired': `PT${post.readTime}M`,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      >
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
      </SEO>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <article className="mt-8">
            {/* Article Header */}
            <header>
              <div className="flex items-center gap-2 mb-4">
                <Badge>{post.category}</Badge>
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
              {post.content.split('\n').map((paragraph, index) => {
                // Simple markdown-like parsing
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                // Support for HTML links/buttons
                if (paragraph.trim().startsWith('<a ')) {
                  return (
                    <div key={index} className="my-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                  );
                }
                if (paragraph.startsWith('**Choose ') || paragraph.startsWith('- ')) {
                  return (
                    <p key={index} className="my-4">
                      {paragraph}
                    </p>
                  );
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className="my-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}
