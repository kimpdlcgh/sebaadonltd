import React from "react";
import { Sparkles, Package, Printer, ShoppingBag, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Boutique Goods",
      description: "Curated Excellence",
      details: [
        "Handpicked premium products from global artisans",
        "Exclusive collections unavailable elsewhere",
        "Quality assurance on every item",
        "Trend-forward selections",
        "Limited edition pieces"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      icon: Package,
      title: "Manufacturing",
      description: "Production Excellence",
      details: [
        "State-of-the-art manufacturing facilities",
        "Scalable production capabilities",
        "Quality control at every stage",
        "Sustainable manufacturing practices",
        "Custom specifications welcome"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      icon: Printer,
      title: "Personal Merchandise Printing",
      description: "Your Brand, Perfected",
      details: [
        "High-quality printing on diverse materials",
        "Custom branding solutions",
        "Small to large batch orders",
        "Fast turnaround times",
        "Design consultation available"
      ],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Direct-to-Consumer Clothing",
      description: "Fashion Delivered",
      details: [
        "Premium apparel collections",
        "Direct shipping to your door",
        "Custom sizing options",
        "Seasonal collections",
        "Hassle-free returns and exchanges"
      ],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Our <span className="font-serif italic text-rose-300">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to elevate your brand and bring your vision to reality
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-3">{service.title}</h2>
                <p className="text-rose-600 text-lg font-medium mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${
                index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
              }`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="font-serif italic text-rose-600">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">Simple, transparent, and effective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We understand your needs and vision" },
              { step: "02", title: "Planning", description: "Detailed strategy and timeline creation" },
              { step: "03", title: "Execution", description: "Bringing your project to life" },
              { step: "04", title: "Delivery", description: "Quality assured final product" }
            ].map((phase, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-light text-rose-200 mb-4">{phase.step}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Create Something <span className="font-serif italic text-rose-300">Extraordinary</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Get in touch to discuss your project and discover how we can help
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-6 text-lg rounded-full">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}