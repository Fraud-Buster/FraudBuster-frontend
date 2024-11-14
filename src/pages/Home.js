import HeroHome from "../components/modules/home/hero.home";
import LandingNav from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import BlogSection from "../components/modules/home/BlogSection/home.BlogSection";
import InsightsSection from "../components/modules/home/Insights";
import FAQSection from "../components/modules/home/FAQSection/home.FAQSection";

export const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
        <LandingNav />

        {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex justify-center items-center py-10">
        <HeroHome />
      </section>

      {/* Insights Section */}
      <section className="w-full min-h-[60vh] flex justify-center items-center py-10">
        <InsightsSection />
      </section>

      {/* Blog Section */}
      <section className="w-full min-h-[60vh] flex justify-center items-center py-10">
        <BlogSection />
      </section>

      {/* FAQ Section */}
      <section className="w-full min-h-[60vh] flex justify-center items-center py-10">
        <FAQSection />
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0A0A0A] text-white py-6">
        <Footer />
      </footer>
    </main>
  );
};