
export interface Comment {
  id: string;
  user: string;
  avatar?: string;
  text: string;
  rating: number;
  date: string; // ISO string
}

export interface PostType {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string; // For main blog post image
  thumbnailUrl?: string; // Optional: For blog list page if different
  dataAiHint?: string;
  content: string; // Full HTML content
  comments: Comment[];
}


export const blogPostsList: PostType[] = [
  {
    id: 1,
    slug: "future-of-ai-in-marketing",
    title: "The Future of AI in Marketing",
    date: "October 26, 2023",
    author: "Jane Doe, Chief Marketing Strategist",
    excerpt: "Explore how artificial intelligence is revolutionizing marketing strategies, from personalized content to predictive analytics.",
    imageUrl: "https://picsum.photos/1200/600?random=10",
    thumbnailUrl: "https://picsum.photos/600/400?random=10",
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
    comments: [
      { id: "c1", user: "Alice W.", avatar: "https://picsum.photos/40/40?random=201", text: "Insightful read! Really helped me understand the potential of AI in our campaigns.", rating: 5, date: "2024-01-10T10:30:00Z" },
      { id: "c2", user: "Bob T.", avatar: "https://picsum.photos/40/40?random=202", text: "Good points, but I think the ethics of AI in marketing could have been explored more deeply.", rating: 3, date: "2024-01-11T14:45:00Z" },
    ],
  },
  {
    id: 2,
    slug: "maximizing-roi-social-media",
    title: "Maximizing ROI with Social Media Advertising",
    date: "November 5, 2023",
    author: "John Smith, Head of Digital Ads",
    excerpt: "Learn effective tactics to boost your return on investment through targeted social media ad campaigns.",
    imageUrl: "https://picsum.photos/1200/600?random=11",
    thumbnailUrl: "https://picsum.photos/600/400?random=11",
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
    comments: [
      { id: "c3", user: "Charlie M.", avatar: "https://picsum.photos/40/40?random=203", text: "Very helpful for my small business campaigns. The A/B testing tips were gold!", rating: 4, date: "2024-02-05T09:00:00Z" },
    ],
  },
  {
    id: 3,
    slug: "crafting-engaging-blog-posts",
    title: "Content is King: Crafting Engaging Blog Posts",
    date: "November 15, 2023",
    author: "Alice Brown, Senior Content Manager",
    excerpt: "Discover the secrets to writing compelling blog content that captivates your audience and drives traffic.",
    imageUrl: "https://picsum.photos/1200/600?random=12",
    thumbnailUrl: "https://picsum.photos/600/400?random=12",
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
    comments: [],
  },
  {
    id: 4,
    slug: "seo-trends-2024",
    title: "SEO Trends to Watch in 2024",
    date: "December 1, 2023",
    author: "David Green, SEO Specialist",
    excerpt: "Stay ahead of the curve with our insights into the latest SEO trends that will shape digital marketing next year.",
    imageUrl: "https://picsum.photos/1200/600?random=13",
    thumbnailUrl: "https://picsum.photos/600/400?random=13",
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
    comments: [
        { id: "c4", user: "David K.", avatar: "https://picsum.photos/40/40?random=204", text: "Up-to-date info, thanks! E-E-A-T is definitely the way to go.", rating: 5, date: "2024-03-15T11:00:00Z" },
        { id: "c5", user: "Eve L.", avatar: "https://picsum.photos/40/40?random=205", text: "Great summary of the E-E-A-T principles.", rating: 4, date: "2024-03-16T16:20:00Z" },
        { id: "c6", user: "Frank P.", avatar: "https://picsum.photos/40/40?random=206", text: "Wondering how AI search will impact keyword strategies in the long run.", rating: 3, date: "2024-03-17T08:50:00Z" },
    ],
  },
  {
    id: 5,
    slug: "power-email-marketing-automation",
    title: "The Power of Email Marketing Automation",
    date: "December 12, 2023",
    author: "Sarah Miller, Email Marketing Lead",
    excerpt: "Unlock the potential of email marketing automation to nurture leads and build lasting customer relationships.",
    imageUrl: "https://picsum.photos/1200/600?random=14",
    thumbnailUrl: "https://picsum.photos/600/400?random=14",
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
    comments: [
        { id: "c7", user: "Grace H.", avatar: "https://picsum.photos/40/40?random=207", text: "Automation saved us so much time! The welcome series idea is great.", rating: 5, date: "2024-04-01T12:00:00Z" },
    ],
  },
  {
    id: 6,
    slug: "video-marketing-essential",
    title: "Video Marketing: Why It's Essential for Your Brand",
    date: "December 20, 2023",
    author: "Mike Johnson, Head of Video Production",
    excerpt: "Understand the impact of video marketing and how to integrate it effectively into your overall strategy.",
    imageUrl: "https://picsum.photos/1200/600?random=15",
    thumbnailUrl: "https://picsum.photos/600/400?random=15",
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
    comments: [
        { id: "c8", user: "Heidi N.", avatar: "https://picsum.photos/40/40?random=208", text: "Videos really boost engagement on our social channels. Thanks for the tips!", rating: 4, date: "2024-04-20T10:15:00Z" },
        { id: "c9", user: "Ivan S.", avatar: "https://picsum.photos/40/40?random=209", text: "Good overview of different video types. I'm planning to try testimonial videos next.", rating: 4, date: "2024-04-21T17:30:00Z" },
    ],
  },
];

export const getBlogPostBySlug = (slug: string): PostType | undefined => {
  return blogPostsList.find(p => p.slug === slug);
};

export const getAllBlogPosts = (): PostType[] => {
  // Ensure posts are sorted by date or ID if needed for default listing
  // For now, returning as is.
  return blogPostsList;
};

export const getTopRatedBlogPosts = (count: number): PostType[] => {
  const allPosts = getAllBlogPosts();

  const postsWithAvgRating = allPosts.map(post => {
    const totalRating = post.comments.reduce((acc, comment) => acc + comment.rating, 0);
    const averageRating = post.comments.length > 0 ? totalRating / post.comments.length : 0;
    return { post, averageRating };
  });

  // Sort by average rating in descending order.
  // For posts with the same average rating, a secondary sort (e.g., by number of comments or date) could be added.
  // For now, simple sort by average rating is sufficient.
  postsWithAvgRating.sort((a, b) => {
    if (b.averageRating !== a.averageRating) {
      return b.averageRating - a.averageRating;
    }
    // Optional: secondary sort by number of comments if ratings are equal
    return b.post.comments.length - a.post.comments.length;
  });

  return postsWithAvgRating.slice(0, count).map(item => item.post);
};
