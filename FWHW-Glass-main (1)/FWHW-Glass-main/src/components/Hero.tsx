import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCarousel1 from "@/assets/hero-carousel-1.jpg";
import heroCarousel2 from "@/assets/hero-carousel-2.jpg";
import heroCarousel3 from "@/assets/hero-carousel-3.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const heroImages = [heroCarousel1, heroCarousel2, heroCarousel3];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))] to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            FWHW Glass Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Innovating Ethiopia's Glass Industry for a Safer, Sustainable Future
          </p>
          <p className="text-lg mb-8 text-white/80">
            Local Manufacturing • Global Standards • Trusted by Industry Leaders
          </p>
          <div className="flex gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
