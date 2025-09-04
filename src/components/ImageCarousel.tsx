import React, { useCallback, useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  title?: string;
  className?: string;
  imageSize?: 'mobile' | 'desktop';
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title, className = '', imageSize = 'mobile' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 2 : prev - 1));
  }, [images.length]);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 2 ? 0 : prev + 1));
  }, [images.length]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    const singleImageWidth = imageSize === 'desktop' 
      ? 'w-full max-w-none' 
      : 'w-full max-w-md';
    
    return (
      <div className={`relative ${className}`}>
        <div className="bg-gray-900 rounded-lg shadow-2xl p-4 flex items-center justify-center">
          <div className={`mx-auto ${singleImageWidth}`}>
            <img 
              src={images[0]} 
              alt={title || 'Project image'} 
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  // Skip the first image (thumbnail) for the wheel
  const wheelImages = images.slice(1);
  
  // Set image size based on imageSize prop
  const imageWidth = imageSize === 'desktop' 
    ? 'w-full max-w-none' 
    : 'w-72';

  return (
    <div className={`relative ${className}`}>
      {/* 3D Carousel Container */}
      <div className={`relative ${imageSize === 'desktop' ? 'h-[350px] md:h-[600px]' : 'h-[600px]'} w-full flex items-center justify-center overflow-hidden bg-gray-900 rounded-lg shadow-2xl z-10`}>
        {/* Background Images in Circle */}
        {wheelImages.map((image, index) => {
          const angle = ((index - currentIndex) * 360) / wheelImages.length;
          const radius = imageSize === 'desktop' ? 200 : 320;
          const x = Math.sin((angle * Math.PI) / 180) * radius;
          const z = Math.cos((angle * Math.PI) / 180) * radius;
          const scale = z > 0 ? 0.5 + (z / radius) * 0.3 : 0.3;
          const opacity = z > 0 ? 0.4 + (z / radius) * 0.6 : 0.2;
          
          return (
            <div
              key={`wheel-image-${index}`}
              className="absolute pointer-events-none transition-all duration-1200 ease-out"
              style={{
                transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.round(z),
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
                imageRendering: 'crisp-edges',
              }}
            >
              <img 
                src={image} 
                alt={`${title || 'Project'} image ${index + 2}`}
                className={`${imageWidth} h-auto object-contain rounded-lg`}
                style={{
                  imageRendering: 'crisp-edges',
                  backfaceVisibility: 'hidden',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-20"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-20"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {wheelImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to carousel image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-20">
        {currentIndex + 1} / {wheelImages.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
