import React from 'react';

export default function SkincareFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-gray-900 rounded-full mr-2"></div>
              Why Our Products
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-semibold">
              YOUR SKIN DESERVES<br />
              THE BEST CARE.
            </h1>
            <p className="text-gray-600 mt-2 sm:mt-4 text-base sm:text-lg leading-relaxed">
              Discover a curated collection of skincare products designed to rejuvenate, 
              protect, and pamper your skin. Explore our range crafted with love backed 
              by science, and inspired by nature.
            </p>
          </div>
          {/* Features */}
          <div className="space-y-6 sm:space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-xl sm:text-3xl font-light text-gray-900">01</div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Bio Ingredients</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                  Get naturally beautiful and transform with our bio 
                  ingredients creams for healthy, radiant skin.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-xl sm:text-3xl font-light text-gray-900">02</div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Everything Natural</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                  Pure ingredients for pure skin. The Perfect solution 
                  for your skin care needs.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-xl sm:text-3xl font-light text-gray-900">03</div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">All Handmade</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                  Made with love and care. Just for you. Give your skin 
                  the tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative mt-8 lg:mt-0">
          
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-md sm:max-w-lg mx-auto">
  <img
    src="/images/SkincareFeatures.png"
    alt="Woman applying under-eye patches"
    className="w-full h-full object-cover"
  />


            {/* Award Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-24">
  <div className="bg-[#edf3e5] bg-opacity-100 rounded-full px-3 sm:px-5 py-2 sm:py-3 flex items-center space-x-3 shadow-md">
    {/* Icon with dotted border */}
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dotted border-gray-400 flex items-center justify-center">
      <svg
        className="w-5 h-5 text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
    {/* Text */}
    <div className="text-sm leading-tight">
      <p className="font-medium text-gray-800">Best Skin Care Product</p>
      <p className="text-gray-700">Award Winning</p>
    </div>
  </div>
</div>


          </div>
          {/* Bottom text */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
            <span>SINCE 2001</span>
            <button className="font-medium text-gray-900 hover:text-green-600 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}