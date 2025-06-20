import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const textRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    // Heading animation (existing)
    if (textRef.current) {
      const words = textRef.current.querySelectorAll("span");
      words.forEach((word, index) => {
        word.style.opacity = "0";
        setTimeout(() => {
          word.style.transition = "opacity 0.6s ease-out";
          word.style.opacity = "1";
        }, index * 100);
      });
    }
    // Paragraph word-by-word darkening animation on scroll
    if (paraRef.current) {
      const paraWords = paraRef.current.querySelectorAll("span.word");
      paraWords.forEach((word) => {
        word.style.opacity = "0.3";
      });
      const handleScroll = () => {
        const rect = paraRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          paraWords.forEach((word, idx) => {
            setTimeout(() => {
              gsap.to(word, { opacity: 1, duration: 0.4, ease: "power2.out" });
            }, idx * 80);
          });
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      // Trigger if already in view
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#fefff4" }}
    >
      {/* Main Content Container */}
      <div className="relative px-6" style={{ backgroundColor: "#fefff4" }}>
        {/* Left Side Content - hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-6 top-8 z-10 max-w-xs">
          <p
            className="text-sm text-gray-600 leading-relaxed mb-8 translate-x-8"
            ref={paraRef}
          >
            {"Transform your skincare routine with products that restore, protect, and enhance your natural glow every day."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="word"
                  style={{ transition: "opacity 0.4s" }}
                >
                  {word}{" "}
                </span>
              ))}
          </p>
          <button className="bg-[#2d3b36] text-white px-9 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors translate-y-68 translate-x-8">
            Shop Now
          </button>
        </div>
        {/* Center Content - GLOW NATURALLY */}
        <div className="text-center pt-4 pb-8">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2d3b36] leading-tight tracking-wide"
            ref={textRef}
          >
            <span>GLOW</span>
            <br />
            <span>NATUR-</span>
            <br />
            <span>ALLY</span>
          </h1>
          {/* Mobile: show paragraph and button below heading */}
          <div className="block md:hidden mt-6">
            <p
              className="text-sm text-gray-600 leading-relaxed mb-4"
              ref={paraRef}
            >
              {"Transform your skincare routine with products that restore, protect, and enhance your natural glow every day."
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="word"
                    style={{ transition: "opacity 0.4s" }}
                  >
                    {word}{" "}
                  </span>
                ))}
            </p>
            <button className="bg-[#2d3b36] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
        {/* Product Image - Top Right */}
        <div className="absolute top-8 right-6 z-20">
          <div className="w-34 h-32 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/product2.png"
              alt="LUNA skincare product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>{" "}
        {/* End of Product Image - Top Right */}
        {/* Centered overlay SKINCARE text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-[10rem] md:text-[16rem] font-black text-[#2d3b36] leading-none tracking-[0.1em] select-none translate-y-28">
            SKINCARE
          </h2>
        </div>
        {/* Hero Image with Tooltip */}
        <div className="relative flex justify-center items-center mt-4 mb-12 z-10">
          <div className="relative w-100 h-96 bg-gradient-to-br from-amber-100 via-green-100 to-green-200 rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="/images/product1.png"
              alt="Woman with natural skincare routine"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Floating tooltip */}
            <div
              className="absolute bottom-6 left-4 rounded-full px-4 py-3 text-xs text-gray-700 shadow-lg max-w-xs z-30"
              style={{ backgroundColor: "#eff5e1" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                  <img
                    src="/images/product2.png"
                    alt="Product icon"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                </div>
                <span>
                  While giving you an invigorating cleansing experience.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Description */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
            <span className="text-gray-400">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and
              rejuvenate your skin.
            </span>
          </p>
        </div>
      </div>{" "}
      {/* End of px-6 container */}
    </div> // End of min-h-screen wrapper
  );
}
