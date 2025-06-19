import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BeautyHeroSection = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const decorativeRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const headline = headlineRef.current;
    const button = buttonRef.current;
    const decorativeElements = decorativeRefs.current;

    // Set initial states
    gsap.set([headline, button], { opacity: 0, y: 50 });
    gsap.set(background, { scale: 1.1, opacity: 0 });
    gsap.set(decorativeElements, { opacity: 0, scale: 0 });

    // Create timeline for entrance animations
    const tl = gsap.timeline();

    // Background entrance
    tl.to(background, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    })
    // Headline entrance
    .to(headline, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1.5")
    // Button entrance
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.8")
    // Decorative elements entrance
    .to(decorativeElements, {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    // Floating animation for decorative elements
    decorativeElements.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      }
    });

    // Subtle background movement
    gsap.to(background, {
      scale: 1.05,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Button hover animations
    const buttonElement = button;
    
    const handleMouseEnter = () => {
      gsap.to(buttonElement, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonElement, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    buttonElement.addEventListener('mouseenter', handleMouseEnter);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      gsap.to(background, {
        x: xPercent * 10,
        y: yPercent * 10,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(decorativeElements, {
        x: xPercent * 20,
        y: yPercent * 20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden rounded-2xl cursor-none"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-7 bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{
          backgroundImage: `url('../../public/images/BeautyHeroSection.png')`
        }}
      >
        {/* Bottom blur gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 text-center pb-20">
        {/* Main Headline */}
        <h1 
          ref={headlineRef}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl"
        >
          Feel Beautiful Inside and Out
          <br />
          <span className="block mt-2">with Every Product.</span>
        </h1>

        {/* CTA Button */}
        <button 
          ref={buttonRef}
          className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      {/* Decorative Elements */}
      <div 
        ref={el => decorativeRefs.current[0] = el}
        className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"
      ></div>
      <div 
        ref={el => decorativeRefs.current[1] = el}
        className="absolute bottom-20 right-20 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-2xl"
      ></div>
      <div 
        ref={el => decorativeRefs.current[2] = el}
        className="absolute top-1/3 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-lg"
      ></div>
    </div>
  );
};

export default BeautyHeroSection;