'use client'
import { useState, useEffect } from 'react';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Connect with friends instantly",
      description: "Fast, secure messaging with the people who matter most",
      image: "https://i.ibb.co.com/tT8N35Pq/image.png",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-400"
    },
    // {
    //   title: "Group chats made simple",
    //   description: "Create groups for family, friends, or work with just a tap",
    //   image: "/api/placeholder/600/400",
    //   bgColor: "bg-gradient-to-r from-purple-500 to-pink-400"
    // },
    // {
    //   title: "Share moments as they happen",
    //   description: "Send photos, videos, and files with end-to-end encryption",
    //   image: "/api/placeholder/600/400",
    //   bgColor: "bg-gradient-to-r from-green-500 to-emerald-400"
    // }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[575px] overflow-hidden rounded-lg shadow-xl">
      {/* Slides */}
      <div className="h-full transition-all duration-500 ease-in-out flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`w-full h-full flex-shrink-0 ${slide.bgColor} flex flex-col md:flex-row items-center justify-between px-8 py-6`}
          >
            <div className="text-white md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{slide.title}</h1>
              <p className="text-lg md:text-xl opacity-90">{slide.description}</p>
              <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </div>
            <div className="md:w-11/12 flex justify-center">
              <img 
                src={slide.image} 
                alt="Chat app illustration" 
                className="rounded-lg shadow-lg w-96 h-[400px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;