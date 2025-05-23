import Navigation from "@/components/landing/navigation";
import AboutUs from "@/components/landing/about-us";
import Services from "@/components/landing/services";
import FeaturedWorks from "@/components/landing/featured-works";
import Footer from "@/components/landing/footer";
import OurTeam from "@/components/landing/our-team";
import OurFeatures from "@/components/landing/our-features";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <AboutUs />
        <OurFeatures />
        <FeaturedWorks />
        <Services />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
