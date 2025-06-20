export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden h-auto min-h-[300px] md:h-[500px]"
      style={{ backgroundColor: "#2d3b36" }}
    >
      {/* Background Pattern - Large faded text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <div className="text-[4rem] xs:text-[8rem] sm:text-[12rem] md:text-[19rem] font-bold text-white/20 select-none leading-none tracking-wider translate-y-8 md:translate-y-16">
            SKINCARE
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 flex flex-col justify-start h-full px-4 sm:px-6 md:px-16 pt-8 sm:pt-12 pb-6 sm:pb-8">
        {/* Top Section */}
        <div className="mb-8 sm:mb-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-white">
                Join The Skincare
                <br />
                Community Now.
              </h2>
            </div>
            {/* Right Column - Contact Info */}
            <div className="flex flex-col justify-center items-start md:items-end md:text-right">
              <p className="text-base sm:text-lg text-gray-300 mb-1 sm:mb-2">
                Get in Touch
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-2xl font-light text-white hover:underline"
              >
                contact.skincare.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pb-2 sm:pb-4">
          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 md:space-x-12">
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              Facebook
            </a>
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              Instagram
            </a>
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              YouTube
            </a>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 md:space-x-12">
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              Terms of Service
            </a>
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              Privacy Policy
            </a>
            <a className="text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
