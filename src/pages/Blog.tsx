import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/products';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-hero relative">
        <div className="absolute inset-0 particles-bg opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="glass" className="mb-4">Latest Insights</Badge>
          <h1 className="font-heading text-h1 font-bold mb-4">The Optimization <span className="gradient-text">Journal</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Expert insights on peptides, biohacking, and longevity.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-card overflow-hidden group hover-lift">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-4">
                <Badge variant="cyan">{post.category}</Badge>
                <h2 className="font-heading text-xl font-semibold group-hover:text-cyan transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/blog/${post.slug}`}>Read More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
