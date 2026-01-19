import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const projects = [
    {
      title: "Digital Fashion Sketch Templates",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Professional Procreate/Photoshop templates for fashion design"
    },
    {
      title: "3D Virtual Garment Assets",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      description: "3D clothing models for virtual fashion and metaverse applications"
    },
    {
      title: "AI Fashion Design Presets",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
      description: "AI-assisted prompts and presets for trend forecasting and mood boards"
    },
    {
      title: "Luxury Apparel Collection",
      category: "Direct-to-Consumer",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      description: "Premium clothing line with custom branding"
    },
    {
      title: "Fashion Tech Pack Templates",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      description: "Editable technical packs for manufacturers and production"
    },
    {
      title: "Corporate Merchandise",
      category: "Printing Services",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
      description: "Complete branded merchandise suite"
    },
    {
      title: "AR Fashion Try-On Experience",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Augmented reality filters and virtual try-on solutions"
    },
    {
      title: "Custom Brush Pack Collection",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Procreate brushes for fashion textures (silk, denim, knit)"
    },
    {
      title: "Artisan Home Goods",
      category: "Boutique Collection",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      description: "Curated selection of premium home products"
    },
    {
      title: "Digital Wardrobe Planner",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      description: "Interactive capsule wardrobe guide and styling tool"
    },
    {
      title: "Promotional Materials",
      category: "Printing Services",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
      description: "High-quality printed marketing collateral"
    },
    {
      title: "Virtual Showroom Assets",
      category: "Digital Fashion",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
      description: "3D scenes and assets for online collection presentations"
    }
  ];

  const categories = ["All", "Digital Fashion", "Boutique Collection", "Printing Services", "Direct-to-Consumer"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Our <span className="font-serif italic text-rose-300">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of excellence across all our service areas
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-rose-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-rose-300 mb-1">{project.category}</p>
                    <h3 className="text-xl font-light">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-rose-600 mb-2">{project.category}</p>
                  <h3 className="text-xl font-light text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Ready to Start Your <span className="font-serif italic text-rose-600">Project</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss how we can bring your vision to life
          </p>
        </div>
      </section>
    </div>
  );
}