import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Customers from "@/components/Customers";
import VideoShowcase from "@/components/VideoShowcase";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import MouseFollower from "@/components/MouseFollower";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticlesBackground />
      <MouseFollower />

      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <Carousel />
        <Features />
        <Customers />
        <VideoShowcase />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
