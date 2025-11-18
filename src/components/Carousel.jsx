import React, { useState, useEffect, useRef } from "react";

function Carousel({ images, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrevious();
  };

  return (
    <div
      className="relative w-full max-w-md md:max-w-6xl mx-auto overflow-hidden group mb-9"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-64 md:h-[80vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 z-10"
                : direction === "next"
                ? "-translate-x-full z-0"
                : "translate-x-full z-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100 transition duration-500 text-white text-center px-4">
                <h2 className="text-xl font-bold mb-2">{img.title}</h2>
                <p className="text-sm mb-4">{img.description}</p>
                <a
                  href={img.ctaLink}
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                  target="_blank"
                >
                  {img.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Bulat */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;