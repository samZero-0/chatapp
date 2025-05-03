'use client'
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      title: "Connect with friends instantly",
      description: "Fast, secure messaging with the people who matter most",
      image: "https://i.ibb.co.com/tT8N35Pq/image.png",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-400",
      btnText: "Get Started"
    },
    {
      title: "Group chats made simple",
      description: "Create groups for family, friends, or work with just a tap",
      image: "/api/placeholder/600/400",
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
      btnText: "Create Group"
    },
    {
      title: "Share moments as they happen",
      description: "Send photos, videos, and files with end-to-end encryption",
      image: "/api/placeholder/600/400",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      btnText: "Share Now"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Handle slide transitions with animation
  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    handleSlideChange(index);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      <div 
        className="h-full transition-all duration-500 ease-in-out flex" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`w-full h-full flex-shrink-0 ${slide.bgColor} flex flex-col md:flex-row items-center justify-between px-8 py-12`}
          >
            <div className="text-white md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center">
                  {slide.btnText}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
                <button className="text-white border border-white px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 rounded-full bg-white opacity-10 -top-10 -right-10"></div>
              <div className="absolute w-32 h-32 rounded-full bg-white opacity-10 bottom-10 left-10"></div>
              
              <img 
                src={slide.image} 
                alt={`${slide.title} illustration`}
                className="rounded-xl shadow-xl w-full max-w-md h-auto object-cover transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - redesigned */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        <button 
          onClick={prevSlide} 
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 focus:outline-none transition-all duration-300 backdrop-blur-sm"
          disabled={isTransitioning}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <button 
          onClick={nextSlide} 
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 focus:outline-none transition-all duration-300 backdrop-blur-sm"
          disabled={isTransitioning}
        >
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Enhanced indicator dots */}
      <div className="absolute bottom-8 left-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-12 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-16' 
                : 'bg-white bg-opacity-40 hover:bg-opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-8 right-8 bg-black bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HomeBanner;