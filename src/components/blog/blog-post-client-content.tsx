
"use client";

import { useState, useEffect } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { PostType, Comment } from '@/lib/blog-data';
import { getAllBlogPosts } from '@/lib/blog-data'; // Used for the local "update" simulation
import FormattedDate from '@/components/blog/formatted-date';

interface BlogPostClientContentProps {
  initialPost: PostType;
  slug: string; 
}

export default function BlogPostClientContent({ initialPost, slug }: BlogPostClientContentProps) {
  const { toast } = useToast();

  const [currentPost, setCurrentPost] = useState<PostType>({ ...initialPost });
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    setCurrentPost({ ...initialPost });
    // Reset form fields when post data changes
    setCommentText('');
    setRating(0);
    setName('');
  }, [initialPost]);

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
      id: `comment-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      user: name,
      avatar: `https://picsum.photos/40/40?random=${Date.now()}`,
      text: commentText,
      rating,
      date: new Date().toISOString(),
    };

    setCurrentPost(prevPost => {
      const updatedComments = [newComment, ...(prevPost.comments || [])];
      
      // Simulate updating the "global" static data for this session.
      // This is not a persistent update and is generally bad practice for real applications.
      const postInGlobalList = getAllBlogPosts().find(p => p.slug === slug);
      if (postInGlobalList) {
        if (!postInGlobalList.comments) {
          postInGlobalList.comments = [];
        }
        postInGlobalList.comments.unshift(newComment); 
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
  
  const postComments = currentPost.comments || [];
  const averageRating = postComments.length > 0
    ? postComments.reduce((acc, comment) => acc + comment.rating, 0) / postComments.length
    : 0;

  return (
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
            {postComments.length > 0 && (
              <div className="flex items-center" title={`${averageRating.toFixed(1)} stars from ${postComments.length} reviews`}>
                  <StarRating value={averageRating} readonly size={16} iconClassName="text-amber-400 fill-amber-400" />
                  <span className="ml-1.5">({postComments.length} review{postComments.length === 1 ? '' : 's'})</span>
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

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Reader Reviews ({postComments.length})</h2>
          
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

          {postComments.length > 0 ? (
            <div className="space-y-6 pt-6">
              {postComments.map(comment => (
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
                             <FormattedDate 
                               dateString={comment.date} 
                               formatString="MMMM d, yyyy 'at' h:mm a" 
                               placeholder="Loading date..."
                              />
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
  );
}
