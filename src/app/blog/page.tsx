
import Navigation from '@/components/landing/navigation';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getAllBlogPosts, getTopRatedBlogPosts } from '@/lib/blog-data';
import { StarRating } from '@/components/ui/star-rating';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const topRatedPosts = getTopRatedBlogPosts(4);

  const renderPostCard = (post: typeof allPosts[0], cardClassName?: string) => {
    const averageRating = post.comments.length > 0
      ? post.comments.reduce((acc, comment) => acc + comment.rating, 0) / post.comments.length
      : 0;
    const commentCount = post.comments.length;

    return (
      <Card key={post.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group bg-card ${cardClassName || ''}`} data-ai-hint={post.dataAiHint}>
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={post.thumbnailUrl || post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span>{post.date}</span>
            <span className="hidden sm:inline text-muted-foreground/50">&bull;</span>
            <div className="flex items-center" title={`${averageRating > 0 ? averageRating.toFixed(1) : 'No'} stars`}>
               <StarRating value={averageRating} readonly size={14} iconClassName="text-amber-400 fill-amber-400" /> 
               {averageRating > 0 && <span className="ml-1">({averageRating.toFixed(1)})</span>}
            </div>
             <span className="hidden sm:inline text-muted-foreground/50">&bull;</span>
            <div className="flex items-center" title={`${commentCount} comment${commentCount === 1 ? '' : 's'}`}>
                <MessageCircle size={14} className="mr-1 text-muted-foreground/80"/> 
                <span>{commentCount}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <div className="p-6 pt-0">
          <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
            <Link href={`/blog/${post.slug}`}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-28">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">MarkDev Agency Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and trends from our marketing experts. Stay informed and inspired.
          </p>
        </header>

        {topRatedPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">
              Top Rated Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRatedPosts.map(post => renderPostCard(post))}
            </div>
          </section>
        )}
        
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center sm:text-left">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(post => renderPostCard(post))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
