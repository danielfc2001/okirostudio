
import Navigation from '@/components/landing/navigation';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Dummy data for blog posts - in a real app, this would come from a CMS or database
const blogPostsData: { [key: string]: any } = {
  "future-of-ai-in-marketing": {
    id: 1,
    title: "The Future of AI in Marketing",
    date: "October 26, 2023",
    author: "Jane Doe, Chief Marketing Strategist",
    imageUrl: "https://picsum.photos/1200/600?random=10",
    dataAiHint: "AI technology",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Artificial intelligence (AI) is no longer a futuristic concept but a present-day reality transforming the marketing landscape. From personalized customer experiences to data-driven insights, AI is empowering marketers to achieve unprecedented levels of efficiency and effectiveness.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Personalization at Scale</h2>
      <p class="mb-4 leading-relaxed">AI algorithms can analyze vast amounts of customer data to deliver highly personalized content and product recommendations. This level of personalization, previously unattainable, fosters deeper customer engagement and loyalty.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=101" alt="Personalization chart" class="rounded-lg shadow-md mx-auto" data-ai-hint="data chart"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">AI-driven personalization increases engagement by up to 30%.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Predictive Analytics for Smarter Decisions</h2>
      <p class="mb-4 leading-relaxed">Predictive analytics, powered by AI, allows marketers to forecast trends, customer behavior, and campaign performance. This foresight enables more strategic resource allocation and proactive adjustments to marketing strategies.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Content Creation and Optimization</h2>
      <p class="mb-4 leading-relaxed">AI tools are now capable of assisting in content creation, from generating blog post ideas to drafting ad copy. Furthermore, AI can optimize existing content for SEO and readability, ensuring it reaches the right audience and resonates effectively.</p>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"The integration of AI into marketing is not just about automation; it's about augmenting human creativity and intelligence to build stronger customer relationships."</p>
      </blockquote>
      <p class="leading-relaxed">As AI technology continues to evolve, its role in marketing will only become more integral. Businesses that embrace AI-driven strategies will be better positioned to thrive in the competitive digital age.</p>
    `,
  },
   "maximizing-roi-social-media": {
    id: 2,
    title: "Maximizing ROI with Social Media Advertising",
    date: "November 5, 2023",
    author: "John Smith, Head of Digital Ads",
    imageUrl: "https://picsum.photos/1200/600?random=11",
    dataAiHint: "social media",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Social media advertising offers a powerful platform to reach targeted audiences and drive conversions. However, maximizing return on investment (ROI) requires a strategic approach, careful planning, and continuous optimization.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Define Clear Objectives</h2>
      <p class="mb-4 leading-relaxed">Before launching any campaign, clearly define what you want to achieve. Whether it's increasing brand awareness, generating leads, or driving sales, your objectives will guide your strategy and ad creatives.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Know Your Audience</h2>
      <p class="mb-4 leading-relaxed">Utilize the robust targeting options available on social media platforms. Create detailed audience personas and segment your target market based on demographics, interests, behaviors, and more. The more targeted your ads, the higher the likelihood of conversion.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=102" alt="Audience targeting dashboard" class="rounded-lg shadow-md mx-auto" data-ai-hint="dashboard interface"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Effective audience targeting is key to social media ad success.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Compelling Creatives and Copy</h2>
      <p class="mb-4 leading-relaxed">Your ad creative (image or video) and copy must be attention-grabbing and persuasive. A/B test different variations to identify what resonates best with your audience. Ensure your call-to-action (CTA) is clear and compelling.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Track, Analyze, and Optimize</h2>
      <p class="mb-4 leading-relaxed">Continuously monitor your campaign performance using platform analytics and tools like Google Analytics. Track key metrics such as click-through rate (CTR), conversion rate, and cost per acquisition (CPA). Use these insights to optimize your campaigns by adjusting targeting, bids, creatives, or landing pages.</p>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"Successful social media advertising is an iterative process. Constant testing and optimization are crucial for maximizing ROI."</p>
      </blockquote>
      <p class="leading-relaxed">By implementing these strategies, businesses can significantly improve their social media advertising ROI and achieve their marketing goals effectively.</p>
    `,
  },
   "crafting-engaging-blog-posts": {
    id: 3,
    title: "Content is King: Crafting Engaging Blog Posts",
    date: "November 15, 2023",
    author: "Alice Brown, Senior Content Manager",
    imageUrl: "https://picsum.photos/1200/600?random=12",
    dataAiHint: "writing content",
    content: `
      <p class="mb-4 text-lg leading-relaxed">In the realm of digital marketing, content truly is king. Well-crafted blog posts not only attract and engage your target audience but also establish your brand as a thought leader in your industry. Here's how to create content that captivates.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Understand Your Audience's Needs</h2>
      <p class="mb-4 leading-relaxed">The first step to engaging content is knowing who you're writing for. Research your audience's pain points, interests, and the questions they're asking. Your blog posts should provide valuable solutions and insights.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Craft Compelling Headlines</h2>
      <p class="mb-4 leading-relaxed">Your headline is the first impression. Make it count. A good headline is clear, concise, and creates curiosity or highlights a benefit, encouraging users to click and read more.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=103" alt="Person writing on laptop" class="rounded-lg shadow-md mx-auto" data-ai-hint="laptop typing"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Engaging content starts with understanding your reader.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Structure for Readability</h2>
      <p class="mb-4 leading-relaxed">Online readers often scan content. Use short paragraphs, subheadings, bullet points, and numbered lists to break up text and make it easier to digest. Visuals like images, charts, and videos can also enhance readability and engagement.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Provide Value and Originality</h2>
      <p class="mb-4 leading-relaxed">Offer unique perspectives, in-depth analysis, or actionable advice that readers can't easily find elsewhere. Back up your claims with data, examples, or case studies to build credibility.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Optimize for SEO</h2>
      <p class="mb-4 leading-relaxed">Incorporate relevant keywords naturally throughout your content, including in the title, headings, and body text. Don't forget meta descriptions and image alt text to improve search engine visibility.</p>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"Great content is the best sales tool in the world. It doesn't just inform; it builds trust and drives action."</p>
      </blockquote>
      <p class="leading-relaxed">By focusing on these elements, you can transform your blog into a powerful asset that attracts, engages, and converts your target audience.</p>
    `,
  },
  "seo-trends-2024": {
    id: 4,
    title: "SEO Trends to Watch in 2024",
    date: "December 1, 2023",
    author: "David Green, SEO Specialist",
    imageUrl: "https://picsum.photos/1200/600?random=13",
    dataAiHint: "SEO chart",
    content: `
      <p class="mb-4 text-lg leading-relaxed">The world of Search Engine Optimization (SEO) is constantly evolving. Staying ahead of the curve is crucial for maintaining and improving your website's visibility. Here are some key SEO trends to watch for in 2024.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">AI and Search</h2>
      <p class="mb-4 leading-relaxed">Artificial Intelligence will continue to play a significant role in how search engines understand and rank content. Expect more AI-driven search experiences like Google's Search Generative Experience (SGE). Optimizing for semantic search and providing comprehensive answers to user queries will be vital.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</h2>
      <p class="mb-4 leading-relaxed">Google's emphasis on E-E-A-T will become even more critical. Demonstrating real-world experience, showcasing expertise, building authority in your niche, and ensuring your site is trustworthy are paramount for ranking well, especially for YMYL (Your Money or Your Life) topics.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=104" alt="E-E-A-T concept" class="rounded-lg shadow-md mx-auto" data-ai-hint="trust concept"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">E-E-A-T signals are increasingly important for SEO.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Video SEO</h2>
      <p class="mb-4 leading-relaxed">With the rise of platforms like TikTok and YouTube Shorts, video content is booming. Optimizing video content for search (e.g., using relevant keywords in titles, descriptions, tags, and providing transcripts) will be essential for discoverability.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">User Experience (UX) Signals</h2>
      <p class="mb-4 leading-relaxed">Core Web Vitals and other UX signals will continue to be important ranking factors. Ensuring your website is fast, mobile-friendly, and provides a seamless user experience is no longer optional.</p>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"The future of SEO lies in creating high-quality, user-centric content that genuinely helps people, supported by strong technical foundations."</p>
      </blockquote>
      <p class="leading-relaxed">Adapting to these trends will help businesses maintain a competitive edge in the ever-changing search landscape of 2024 and beyond.</p>
    `,
  },
  "power-email-marketing-automation": {
    id: 5,
    title: "The Power of Email Marketing Automation",
    date: "December 12, 2023",
    author: "Sarah Miller, Email Marketing Lead",
    imageUrl: "https://picsum.photos/1200/600?random=14",
    dataAiHint: "email inbox",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Email marketing remains one of the most effective digital marketing channels. When combined with automation, its power to nurture leads, engage customers, and drive sales is significantly amplified.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">What is Email Marketing Automation?</h2>
      <p class="mb-4 leading-relaxed">Email marketing automation involves using software to send targeted emails to subscribers based on predefined triggers or schedules. These triggers can include actions like signing up for a newsletter, abandoning a cart, or making a purchase.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Benefits of Automation</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 leading-relaxed">
        <li><strong>Time-Saving:</strong> Automate repetitive tasks, freeing up your team to focus on strategy.</li>
        <li><strong>Personalization:</strong> Deliver highly relevant content based on subscriber behavior and preferences.</li>
        <li><strong>Improved Lead Nurturing:</strong> Guide prospects through the sales funnel with timely and targeted messages.</li>
        <li><strong>Increased Engagement:</strong> Send the right message at the right time to boost open and click-through rates.</li>
        <li><strong>Enhanced Customer Retention:</strong> Keep your brand top-of-mind with automated follow-ups and loyalty campaigns.</li>
      </ul>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=105" alt="Email automation workflow" class="rounded-lg shadow-md mx-auto" data-ai-hint="workflow diagram"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Automation allows for complex, personalized email sequences.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Common Automated Email Campaigns</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 leading-relaxed">
        <li><strong>Welcome Series:</strong> Introduce new subscribers to your brand and offerings.</li>
        <li><strong>Abandoned Cart Reminders:</strong> Encourage users to complete their purchases.</li>
        <li><strong>Post-Purchase Follow-ups:</strong> Request reviews, offer support, or suggest related products.</li>
        <li><strong>Re-engagement Campaigns:</strong> Win back inactive subscribers.</li>
        <li><strong>Birthday/Anniversary Emails:</strong> Build rapport with personalized greetings and offers.</li>
      </ul>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"Email automation isn't just about sending emails; it's about building intelligent, automated conversations with your audience at scale."</p>
      </blockquote>
      <p class="leading-relaxed">By leveraging email marketing automation, businesses can create more meaningful interactions with their audience, improve efficiency, and ultimately drive better results.</p>
    `,
  },
  "video-marketing-essential": {
    id: 6,
    title: "Video Marketing: Why It's Essential for Your Brand",
    date: "December 20, 2023",
    author: "Mike Johnson, Head of Video Production",
    imageUrl: "https://picsum.photos/1200/600?random=15",
    dataAiHint: "video play",
    content: `
      <p class="mb-4 text-lg leading-relaxed">In today's fast-paced digital world, video marketing has emerged as an indispensable tool for brands looking to connect with their audience, increase engagement, and drive conversions. If you're not using video, you're likely missing out on significant opportunities.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Why Video is So Effective</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 leading-relaxed">
        <li><strong>Highly Engaging:</strong> Video combines visuals and audio, making it more captivating than text or static images.</li>
        <li><strong>Easily Digestible:</strong> Complex information can be conveyed quickly and clearly through video.</li>
        <li><strong>Boosts Conversions:</strong> Including videos on landing pages can significantly increase conversion rates.</li>
        <li><strong>Improves SEO:</strong> Search engines favor video content, and videos can increase the time users spend on your site.</li>
        <li><strong>Builds Trust and Credibility:</strong> Videos allow you to showcase your brand's personality and connect with your audience on a more human level.</li>
        <li><strong>Mobile-Friendly:</strong> With the majority of internet users consuming content on mobile devices, video is an ideal format.</li>
      </ul>
      <figure class="my-6">
        <img src="https://picsum.photos/800/400?random=106" alt="People watching video on devices" class="rounded-lg shadow-md mx-auto" data-ai-hint="mobile devices"/>
        <figcaption class="text-center text-sm text-muted-foreground mt-2">Video consumption on mobile devices continues to soar.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Types of Marketing Videos</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 leading-relaxed">
        <li><strong>Explainer Videos:</strong> Clearly demonstrate how your product or service works.</li>
        <li><strong>Product Demos:</strong> Showcase the features and benefits of your offerings.</li>
        <li><strong>Customer Testimonials:</strong> Build social proof and trust with authentic reviews.</li>
        <li><strong>Behind-the-Scenes:</strong> Offer a glimpse into your company culture and operations.</li>
        <li><strong>Educational/How-To Videos:</strong> Provide value and establish your expertise.</li>
        <li><strong>Brand Story Videos:</strong> Connect emotionally with your audience by sharing your mission and values.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Getting Started with Video Marketing</h2>
      <p class="mb-4 leading-relaxed">You don't need a Hollywood budget to start. Begin with a clear strategy, define your target audience, and choose video types that align with your goals. Utilize accessible tools and platforms, and focus on creating authentic, valuable content.</p>
      <blockquote class="border-l-4 border-primary p-4 my-6 bg-muted/50">
        <p class="italic text-foreground">"Video is a powerful storytelling medium. Use it to share your brand's narrative in a way that resonates and inspires action."</p>
      </blockquote>
      <p class="leading-relaxed">Integrating video into your marketing strategy is no longer a luxury but a necessity for staying competitive and effectively engaging your audience in the digital age.</p>
    `,
  },
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    // Handle post not found, e.g., redirect to 404 or blog index
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm space-x-4">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>
          </header>

          <div className="relative aspect-[16/9] w-full mb-12 rounded-lg overflow-hidden shadow-lg" data-ai-hint={post.dataAiHint}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 768px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          
          <Separator className="my-8" />

          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

        </article>
      </main>
      <Footer />
    </div>
  );
}

// This function can be used by Next.js to generate static paths for blog posts
export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}
