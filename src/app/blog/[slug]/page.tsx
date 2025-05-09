
"use client"; // This page now uses client-side state and effects

import { useState, useEffect } from 'react';
import Navigation from '@/components/landing/navigation';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { StarRating } from '@/components/ui/star-rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { getBlogPostBySlug, getAllBlogPosts, type PostType, type Comment } from '@/lib/blog-data';


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const initialPostData = getBlogPostBySlug(params.slug);
  const { toast } = useToast();

  const [currentPost, setCurrentPost] = useState<PostType | null>(initialPostData ? { ...initialPostData } : null);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const newPostData = getBlogPostBySlug(params.slug);
    setCurrentPost(newPostData ? { ...newPostData } : null);
    // Reset form fields when post changes
    setCommentText('');
    setRating(0);
    setName('');
  }, [params.slug]);


  if (!currentPost) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-28 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim() || rating === 0) {
      toast({
        title: 'Incomplete Submission',
        description: 'Please provide your name, a comment, and a rating.',
        variant: 'destructive',
      });
      return;
    }

    const newComment: Comment = {
      id: `comment-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, // More unique ID
      user: name,
      avatar: `https://picsum.photos/40/40?random=${Date.now()}`,
      text: commentText,
      rating,
      date: new Date().toISOString(),
    };

    setCurrentPost(prevPost => {
      if (!prevPost) return null;
      const updatedComments = [newComment, ...prevPost.comments];
      
      // This part is tricky with static data.
      // To make the update "stick" for the session in the dummy data for demonstration:
      const postInList = getAllBlogPosts().find(p => p.slug === params.slug);
      if (postInList) {
        postInList.comments.unshift(newComment); // Modifying the imported array directly (not ideal for real apps)
      }
      
      return { ...prevPost, comments: updatedComments };
    });
    
    toast({
      title: 'Review Submitted',
      description: 'Thank you for your feedback!',
    });
    setCommentText('');
    setRating(0);
    setName('');
  };
  
  const averageRating = currentPost.comments.length > 0
    ? currentPost.comments.reduce((acc, comment) => acc + comment.rating, 0) / currentPost.comments.length
    : 0;


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-28">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <Button asChild variant="outline" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">{currentPost.title}</h1>
            <div className="flex flex-wrap items-center text-muted-foreground text-sm gap-x-4 gap-y-2">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>By {currentPost.author}</span>
              </div>
               {currentPost.comments.length > 0 && (
                <div className="flex items-center" title={`${averageRating.toFixed(1)} stars from ${currentPost.comments.length} reviews`}>
                    <StarRating value={averageRating} readonly size={16} iconClassName="text-amber-400 fill-amber-400" />
                    <span className="ml-1.5">({currentPost.comments.length} review{currentPost.comments.length === 1 ? '' : 's'})</span>
                </div>
                )}
            </div>
          </header>

          <div className="relative aspect-[16/9] w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-ai-hint={currentPost.dataAiHint}>
            <Image
              src={currentPost.imageUrl}
              alt={currentPost.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 768px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          
          <Separator className="my-8" />

          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: currentPost.content }} 
          />

          <Separator className="my-12" />

          {/* Comments Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Reader Reviews ({currentPost.comments.length})</h2>
            
            <Card className="shadow-lg bg-card border border-border">
              <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
                <CardDescription>Share your thoughts and rate this article.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="reviewerName" className="mb-2 block text-sm font-medium">Your Name</Label>
                    <Input 
                      id="reviewerName"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="bg-background"
                      aria-label="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="commentText" className="mb-2 block text-sm font-medium">Your Opinion</Label>
                    <Textarea
                      id="commentText"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write your comment here..."
                      rows={4}
                      required
                      className="bg-background"
                      aria-label="Your Opinion"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">Your Rating</Label>
                    <StarRating value={rating} onValueChange={setRating} size={28} iconClassName="text-amber-400" aria-label="Article rating"/>
                  </div>
                  <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">Submit Review</Button>
                </form>
              </CardContent>
            </Card>

            {currentPost.comments.length > 0 ? (
              <div className="space-y-6 pt-6">
                {currentPost.comments.map(comment => (
                  <Card key={comment.id} className="shadow-md bg-card border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.avatar || `https://picsum.photos/40/40?random=${comment.id}`} alt={`${comment.user}'s avatar`} data-ai-hint="person avatar" />
                            <AvatarFallback>{comment.user.substring(0,1).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base font-semibold text-foreground">{comment.user}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground">
                              {format(new Date(comment.date), "MMMM d, yyyy 'at' h:mm a")}
                            </CardDescription>
                          </div>
                        </div>
                        <StarRating value={comment.rating} readonly size={16} iconClassName="text-amber-400 fill-amber-400" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-foreground/90 text-sm leading-relaxed">{comment.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic text-center py-4">No reviews yet. Be the first to share your thoughts!</p>
            )}
          </section>

        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
