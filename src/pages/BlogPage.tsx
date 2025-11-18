import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import blogPosts from '@/data/blogPostsLoader';
import { BlogPost } from '@/types';

type FilterType = 'all' | 'Guide' | 'News' | 'Updates';

export function BlogPage() {
  const posts = blogPosts as BlogPost[];
  const [activeFilters, setActiveFilters] = useState<FilterType[]>(['all']);

  const handleFilterChange = (value: string[]) => {
    if (value.length === 0) {
      setActiveFilters(['all']);
    } else if (value.length > 1 && value.includes('all')) {
      setActiveFilters(value.filter(v => v !== 'all') as FilterType[]);
    } else {
      setActiveFilters(value as FilterType[]);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (activeFilters.includes('all')) return true;
      return activeFilters.includes(post.category as FilterType);
    });
  }, [posts, activeFilters]);

  return (
    <>
      <SEO
        title="Blog"
        description="Latest insights, guides, and comparisons about AI models. Stay updated with the newest trends in artificial intelligence."
        keywords="AI blog, AI models news, LLM guides, AI comparisons, machine learning blog, AI trends 2025"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog & Guides</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Expert insights on AI models, comparisons, and implementation guides.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-12 flex justify-center">
            <ToggleGroup type="multiple" value={activeFilters} onValueChange={handleFilterChange} className="justify-center">
              <ToggleGroupItem value="all">All</ToggleGroupItem>
              <ToggleGroupItem value="Guide">Guide</ToggleGroupItem>
              <ToggleGroupItem value="News">News</ToggleGroupItem>
              <ToggleGroupItem value="Updates">Updates</ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* All Posts */}
          {filteredPosts.length > 0 ? (
            <section className="mt-12">
              <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group flex flex-col">
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Badge>{post.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime} min read
                          </span>
                        </div>
                        <CardTitle className="group-hover:text-sky-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center text-sm text-sky-600 group-hover:text-sky-700">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ) : (
            <div className="text-center py-16 mt-12">
              <h3 className="text-xl font-semibold">No Posts Found</h3>
              <p className="text-muted-foreground mt-2">Try selecting different filters.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
