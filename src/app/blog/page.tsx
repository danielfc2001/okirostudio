
import Navigation from '@/components/landing/navigation';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing",
    date: "October 26, 2023",
    excerpt: "Explore how artificial intelligence is revolutionizing marketing strategies, from personalized content to predictive analytics.",
    imageUrl: "https://picsum.photos/600/400?random=10",
    dataAiHint: "AI technology",
    slug: "future-of-ai-in-marketing",
  },
  {
    id: 2,
    title: "Maximizing ROI with Social Media Advertising",
    date: "November 5, 2023",
    excerpt: "Learn effective tactics to boost your return on investment through targeted social media ad campaigns.",
    imageUrl: "https://picsum.photos/600/400?random=11",
    dataAiHint: "social media",
    slug: "maximizing-roi-social-media",
  },
  {
    id: 3,
    title: "Content is King: Crafting Engaging Blog Posts",
    date: "November 15, 2023",
    excerpt: "Discover the secrets to writing compelling blog content that captivates your audience and drives traffic.",
    imageUrl: "https://picsum.photos/600/400?random=12",
    dataAiHint: "writing content",
    slug: "crafting-engaging-blog-posts",
  },
    {
    id: 4,
    title: "SEO Trends to Watch in 2024",
    date: "December 1, 2023",
    excerpt: "Stay ahead of the curve with our insights into the latest SEO trends that will shape digital marketing next year.",
    imageUrl: "https://picsum.photos/600/400?random=13",
    dataAiHint: "SEO chart",
    slug: "seo-trends-2024",
  },
  {
    id: 5,
    title: "The Power of Email Marketing Automation",
    date: "December 12, 2023",
    excerpt: "Unlock the potential of email marketing automation to nurture leads and build lasting customer relationships.",
    imageUrl: "https://picsum.photos/600/400?random=14",
    dataAiHint: "email inbox",
    slug: "power-email-marketing-automation",
  },
  {
    id: 6,
    title: "Video Marketing: Why It's Essential for Your Brand",
    date: "December 20, 2023",
    excerpt: "Understand the impact of video marketing and how to integrate it effectively into your overall strategy.",
    imageUrl: "https://picsum.photos/600/400?random=15",
    dataAiHint: "video play",
    slug: "video-marketing-essential",
  },
];


export default function BlogPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col" data-ai-hint={post.dataAiHint}>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
