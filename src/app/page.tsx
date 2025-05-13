import Navigation from "@/components/landing/navigation";
import AboutUs from "@/components/landing/about-us";
import Services from "@/components/landing/services";
import FeaturedWorks from "@/components/landing/featured-works";
import Footer from "@/components/landing/footer";

export const runtime = "edge";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <AboutUs />
        <Services />
        <FeaturedWorks />
      </main>
      <Footer />
    </div>
  );
}
