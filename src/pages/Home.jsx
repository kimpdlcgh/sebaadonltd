import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Package, Printer, ShoppingBag } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Sparkles,
      title: "Boutique Goods",
      description: "Curated selection of premium, handpicked products that embody elegance and exclusivity"
    },
    {
      icon: Package,
      title: "Manufacturing",
      description: "State-of-the-art production facilities delivering quality at scale"
    },
    {
      icon: Printer,
      title: "Merchandise Printing",
      description: "Custom printing solutions that bring your personal brand to life"
    },
    {
      icon: ShoppingBag,
      title: "Direct-to-Consumer",
      description: "Premium clothing and merchandise delivered straight to your door"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm font-medium tracking-wider text-rose-300">NEW PLAYER IN PREMIUM GOODS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <span className="block font-serif italic text-rose-300">SEBAA DON</span>
            <span className="block mt-2">LIMITED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Where craftsmanship meets innovation. Elevating boutique goods, manufacturing excellence, 
            and personalized merchandise to unprecedented heights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
                Get in Touch
              </Button>
            </Link>
          </div>
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