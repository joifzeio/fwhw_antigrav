import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Using new hero images
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: hero1,
            title: "Local Manufacturing",
            subtitle: "Global Standards • Trusted by Industry Leaders"
        },
        {
            image: hero2,
            title: "Premium Glass Solutions",
            subtitle: "Architectural Excellence for Modern Spaces"
        },
        {
            image: hero3,
            title: "Advanced Safety Glass",
            subtitle: "High-quality tempered and laminated glass solutions"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
                        <div className="container px-4">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                {slide.title}
                            </h1>
                            <p className="mb-8 text-lg text-slate-200 sm:text-xl md:text-2xl max-w-3xl mx-auto">
                                {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/products"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Explore Products
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    to="/contact" // Assuming contact section is on home or separate page, linking to about for now or anchor
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
