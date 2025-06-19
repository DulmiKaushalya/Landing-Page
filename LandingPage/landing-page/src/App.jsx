import React, { useEffect } from "react";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SkincareShowcase from "./components/SkincareShowcase ";
import BeautyHeroSection from "./components/BeautyHeroSection ";
import SkincareShow  from "./components/SkincareShow";
import gsap from "gsap";
import './index.css'


function App() {
  useEffect(() => {
    // Add a delay to ensure components are mounted
    const timer = setTimeout(() => {
      try {
        const sections = gsap.utils.toArray("section");
        console.log("Sections found:", sections.length); // Debug log
        
        if (sections.length > 0) {
          gsap.from(sections, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.3,
            ease: "power3.out"
          });
        }
      } catch (error) {
        console.error("GSAP animation error:", error);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
        {/* Add fallback content to test */}
        <HeroSection />
        <Features />
        <SkincareShowcase />
        <BeautyHeroSection/>
        <SkincareShow/>
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;