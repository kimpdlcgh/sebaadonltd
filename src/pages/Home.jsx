import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Package, Printer, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
      title: "Digital Fashion Revolution",
      subtitle: "3D Virtual Garments & Metaverse Fashion"
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80",
      title: "AI-Powered Design Tools",
      subtitle: "Create, Innovate, Transform Your Ideas"
    },
    {
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80",
      title: "Virtual Fashion Showcase",
      subtitle: "AR Try-Ons & Digital Collections"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80",
      title: "Premium Direct-to-Consumer",
      subtitle: "Luxury Fashion Delivered to Your Door"
    },
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
      title: "Boutique Excellence",
      subtitle: "Curated Collections for Discerning Tastes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const services = [
    {
      icon: Sparkles,
      title: "Digital Fashion Design",
      description: "Cutting-edge digital assets and tools for modern fashion designers"
    },
    {
      icon: Package,
      title: "Boutique Goods",
      description: "Curated selection of premium, handpicked products that embody elegance and exclusivity"
    },
    {
      icon: Printer,
      title: "Manufacturing",
      description: "State-of-the-art production facilities delivering quality at scale"
    },
    {
      icon: ShoppingBag,
      title: "Merchandise Printing & Direct-to-Consumer",
      description: "Custom printing solutions and premium apparel delivered straight to your door"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slideshow Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center w-full">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6">
              <span className="text-sm font-medium tracking-wider text-rose-300">
                ✨ NEXT GENERATION FASHION TECH
              </span>
            </div>

            {/* Animated Title */}
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-white animate-fade-in">
              <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-rose-500 mb-2">
                {slides[currentSlide].title}
              </span>
              <span className="block text-3xl md:text-4xl font-light text-white/90">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Where craftsmanship meets cutting-edge innovation. Elevating digital fashion, manufacturing excellence, 
            and personalized experiences to unprecedented heights for the next generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-rose-500 w-8 h-2"
                  : "bg-white/40 hover:bg-white/60 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What We <span className="font-serif italic text-rose-600">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions across multiple verticals, all unified by our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-rose-200"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Services")}>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Why <span className="font-serif italic text-rose-400">SEBAA DON</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                As an emerging force in the boutique and manufacturing landscape, we bring fresh perspectives 
                combined with unwavering dedication to quality. Our integrated approach means seamless service 
                from concept to delivery.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium quality in every product",
                  "Direct-to-consumer efficiency",
                  "Customization at scale",
                  "Innovative manufacturing processes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80"
                alt="Manufacturing Excellence"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Ready to <span className="font-serif italic text-rose-600">Elevate</span> Your Brand?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how SEBAA DON LIMITED can bring your vision to life with our comprehensive services
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}