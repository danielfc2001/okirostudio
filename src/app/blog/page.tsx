"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/landing/navigation";
import Footer from "@/components/landing/footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import {
  getAllBlogPosts,
  getTopRatedBlogPosts,
  PostType,
} from "@/lib/blog-data";
import { StarRating } from "@/components/ui/star-rating";
import FormattedDate from "@/components/blog/formatted-date";

export default function BlogPage() {
  const allPosts = getAllBlogPosts(); // Already sorted by date in getAllBlogPosts
  const topRatedPosts = getTopRatedBlogPosts(4);

  // Obtener todas las categorías únicas de los posts
  const categories = Array.from(
    new Set(allPosts.flatMap((post) => post.categorie || []))
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const postsPerPage = 10;

  // Filtrar posts por categoría seleccionada
  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((post: PostType) =>
          post.categorie.includes(selectedCategory)
        );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Cuando cambia la categoría, volver a la primera página
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  // Slider state for mobile Top Rated Articles
  const [topRatedIndex, setTopRatedIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide for mobile Top Rated Articles
  useEffect(() => {
    if (topRatedPosts.length <= 1) return;
    const timer = setTimeout(() => {
      setTopRatedIndex((prev) => (prev + 1) % topRatedPosts.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [topRatedIndex, topRatedPosts.length]);

  // Scroll to current slide when index changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: topRatedIndex * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [topRatedIndex]);

  // Handlers for manual navigation
  const goToPrevTopRated = () => {
    setTopRatedIndex((prev) =>
      prev === 0 ? topRatedPosts.length - 1 : prev - 1
    );
  };
  const goToNextTopRated = () => {
    setTopRatedIndex((prev) => (prev + 1) % topRatedPosts.length);
  };

  const renderPostCard = (
    post: (typeof allPosts)[0],
    cardClassName?: string
  ) => {
    const averageRating =
      post.comments.length > 0
        ? post.comments.reduce((acc, comment) => acc + comment.rating, 0) /
          post.comments.length
        : 0;
    const commentCount = post.comments.length;

    return (
      <Card
        key={post.id}
        className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group bg-card ${
          cardClassName || ""
        }`}
        data-ai-hint={post.dataAiHint}
      >
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
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <FormattedDate
              dateString={post.date}
              formatString="MMMM d, yyyy"
              placeholder="Loading date..."
            />
            <span className="hidden sm:inline text-muted-foreground/50">
              &bull;
            </span>
            <div
              className="flex items-center"
              title={`${
                averageRating > 0 ? averageRating.toFixed(1) : "No"
              } stars`}
            >
              <StarRating
                value={averageRating}
                readonly
                size={14}
                iconClassName="text-amber-400 fill-amber-400"
              />
              {averageRating > 0 && (
                <span className="ml-1">({averageRating.toFixed(1)})</span>
              )}
            </div>
            <span className="hidden sm:inline text-muted-foreground/50">
              &bull;
            </span>
            <div
              className="flex items-center"
              title={`${commentCount} comment${commentCount === 1 ? "" : "s"}`}
            >
              <MessageCircle
                size={14}
                className="mr-1 text-muted-foreground/80"
              />
              <span>{commentCount}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        <div className="p-6 pt-0">
          <Button
            asChild
            variant="link"
            className="p-0 h-auto text-primary hover:text-primary/80"
          >
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
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Nuestro blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros artículos sobre desarrollo web, diseño, tecnología
            y más. Aquí encontrarás recursos, tutoriales y reflexiones de
            expertos para inspirarte y ayudarte en tu viaje digital.
          </p>
        </header>
        <form className="flex flex-col items-center justify-center gap-2 my-12">
          {/* Dropdown de categorías */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full md:w-3/4 py-2 px-3 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-background text-foreground"
          >
            <option value="all">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:w-3/4 dark:bg-transparent py-2 px-3 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
            <Button type="submit" className="w-full md:w-1/4 py-3">
              Buscar
            </Button>
          </div>
        </form>
        <div className="flex flex-col-reverse md:flex-row gap-12">
          {/* Main blog list */}
          <section className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center sm:text-left">
              All Articles
            </h2>
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => renderPostCard(post))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">
                No articles found.
              </p>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  variant="outline"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  variant="outline"
                >
                  Next <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </section>
          {/* Aside for top rated posts */}
          {topRatedPosts.length > 0 && (
            <>
              {/* Desktop aside */}
              <aside className="hidden md:block md:w-60 lg:w-80 flex-shrink-0">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-12">
                    Top Rated Articles
                  </h2>
                  <div className="flex flex-col gap-6">
                    {topRatedPosts.map((post) =>
                      renderPostCard(
                        post,
                        "border border-muted bg-background shadow-none hover:shadow-md"
                      )
                    )}
                  </div>
                </div>
              </aside>
              {/* Mobile slider */}
              <section className="flex md:hidden flex-col w-full mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Top Rated Articles
                </h2>
                <div className="relative">
                  {/* Slider */}
                  <div
                    ref={sliderRef}
                    className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {topRatedPosts.map((post, idx) => (
                      <div
                        key={post.id}
                        className="min-w-full snap-center px-1"
                        style={{ scrollSnapAlign: "center" }}
                      >
                        {renderPostCard(
                          post,
                          "border border-muted bg-background shadow-none hover:shadow-md"
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Controls */}
                  {topRatedPosts.length > 1 && (
                    <>
                      <button
                        aria-label="Anterior destacado"
                        onClick={goToPrevTopRated}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow"
                        style={{ backdropFilter: "blur(2px)" }}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        aria-label="Siguiente destacado"
                        onClick={goToNextTopRated}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow"
                        style={{ backdropFilter: "blur(2px)" }}
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  {/* Dots */}
                  {topRatedPosts.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {topRatedPosts.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label={`Ir al destacado ${idx + 1}`}
                          onClick={() => setTopRatedIndex(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === topRatedIndex
                              ? "bg-primary scale-125 shadow"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
