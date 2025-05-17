import Navigation from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data";
import BlogPostClientContent from "@/components/blog/blog-post-client-content";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getBlogPostBySlug(params.slug);

  if (!postData) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-28 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the blog post you are looking for does not exist.
          </p>
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      {/* Pass the fetched post data and slug to the client component */}
      <BlogPostClientContent initialPost={postData} slug={params.slug} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
