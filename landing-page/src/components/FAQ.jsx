import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Headphones } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({ 0: true });
  
  // Refs for animations
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const headerRef = useRef(null);
  const faqItemsRef = useRef([]);
  const answerRefs = useRef([]);

  const toggleItem = (index) => {
    const wasExpanded = expandedItems[index];
    
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));

    // Animate the answer panel
    const answerElement = answerRefs.current[index];
    const iconElement = faqItemsRef.current[index]?.querySelector('.toggle-icon');
    
    if (answerElement) {
      if (wasExpanded) {
        // Collapse animation
        gsap.to(answerElement, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        });
        gsap.to(iconElement, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Expand animation
        gsap.set(answerElement, { height: "auto" });
        const autoHeight = answerElement.offsetHeight;
        gsap.fromTo(answerElement, 
          { height: 0, opacity: 0 },
          { 
            height: autoHeight,
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut"
          }
        );
        gsap.to(iconElement, {
          rotation: 45,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const header = headerRef.current;
    const faqItems = faqItemsRef.current;

    // Set initial states
    gsap.set(image, { scale: 0.8, opacity: 0 });
    gsap.set(header.children, { y: 30, opacity: 0 });
    gsap.set(faqItems, { x: 50, opacity: 0 });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Image entrance
    tl.to(image, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    })
    // Header elements stagger
    .to(header.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.6")
    // FAQ items stagger
    .to(faqItems, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");

  

    // Parallax effect for image
    gsap.to(image, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Hover animations for FAQ items
    faqItems.forEach((item) => {
      if (item) {
        const handleMouseEnter = () => {
          gsap.to(item, {
            scale: 1.02,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function will handle removal
        item._gsapHandlers = { handleMouseEnter, handleMouseLeave };
      }
    });

    // Initial expanded item animation
    const initialExpandedAnswer = answerRefs.current[0];
    if (initialExpandedAnswer) {
      gsap.set(initialExpandedAnswer, { height: "auto", opacity: 1 });
      const initialIcon = faqItemsRef.current[0]?.querySelector('.toggle-icon');
      if (initialIcon) {
        gsap.set(initialIcon, { rotation: 45 });
      }
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      faqItems.forEach(item => {
        if (item && item._gsapHandlers) {
          item.removeEventListener('mouseenter', item._gsapHandlers.handleMouseEnter);
          item.removeEventListener('mouseleave', item._gsapHandlers.handleMouseLeave);
        }
      });
    };
  }, []);

  const faqItems = [
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Yes, our products are formulated with gentle ingredients suitable for sensitive skin types. We conduct extensive testing to ensure compatibility."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unopened products. Please contact our customer service team for assistance with returns."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Check our shipping page for details."
    },
    {
      question: "How do I choose the right product?",
      answer: "Our skincare quiz can help you find the perfect products for your skin type and concerns. You can also consult with our skincare experts."
    }
  ];

  return (
    <div ref={containerRef} className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Product Image */}
          <div className="relative">
            <div className="rounded-3xl h-96 lg:h-[650px] relative overflow-hidden">
              {/* Full Image Background */}
              <img 
                ref={imageRef}
                src="/images/bodylotion.png"
                alt="Skincare Product"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            
            {/* Support button */}
            <div
  className="absolute bottom-20 left-25 bg-gray-900 text-white rounded-full p-4 flex items-center space-x-3 shadow-lg cursor-pointer hover:bg-gray-800"
>
  <Headphones size={20} className="text-white" />
  <div className="text-sm">
    <div className="font-medium">24/7 We're Here</div>
    <div className="text-xs text-gray-300">to Help You</div>
  </div>
</div>
          </div>

          {/* Right side - FAQ */}
          <div className="space-y-8">
            {/* Header */}
            <div ref={headerRef}>
              <div className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm mb-6">
                <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                Frequently Asked Question
              </div>
              <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                Answers to Your Skincare Questions, All in One Place.
              </h1>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  ref={el => faqItemsRef.current[index] = el}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-900 font-medium text-base">
                      {item.question}
                    </span>
                    <div className="toggle-icon flex-shrink-0 ml-4">
                      {expandedItems[index] ? (
                        <Minus size={20} className="text-gray-600" />
                      ) : (
                        <Plus size={20} className="text-gray-600" />
                      )}
                    </div>
                  </button>
                  <div 
                    ref={el => answerRefs.current[index] = el}
                    className="overflow-hidden"
                    style={{ height: expandedItems[index] ? 'auto' : 0 }}
                  >
                    <div className="px-6 pb-5 bg-white">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;