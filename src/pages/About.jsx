import React from "react";
import { Target, Eye, Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            About <span className="font-serif italic text-rose-300">SEBAA DON</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between traditional fashion and cutting-edge digital innovation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
            Our <span className="font-serif italic text-rose-600">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              SEBAA DON LIMITED emerges as a fresh and dynamic player in the world of boutique goods, 
              manufacturing, and the future of fashion—digital fashion design. We're not just another company 
              – we're a movement dedicated to redefining excellence in every product we touch, whether physical or digital.
            </p>
            <p>
              Our journey begins with a simple belief: that quality, innovation, and customer-centricity 
              should never be compromised. From our carefully curated boutique selections and state-of-the-art 
              manufacturing facilities to our cutting-edge digital fashion assets and design tools, every 
              aspect of our operation reflects this unwavering commitment.
            </p>
            <p>
              As a new player in the industry, we bring fresh perspectives and innovative approaches to 
              traditional challenges. We recognize that fashion is evolving—brands like DRESSX and Tribute Brand 
              are proving that digital fashion is not a niche anymore, but the future. We're positioned at the 
              forefront of this revolution, offering digital assets, 3D garments, AI-assisted design tools, and 
              virtual fashion experiences that empower creators and designers worldwide.
            </p>
            <p>
              Our direct-to-consumer model eliminates unnecessary middlemen, ensuring you receive premium 
              products at fair prices. Our merchandise printing services combine cutting-edge technology with 
              artistic sensibility. And our digital fashion resources—from tech pack templates to virtual showroom 
              assets—are designed to elevate the creative process for designers at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <Target className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional boutique goods, innovative manufacturing solutions, and cutting-edge 
                digital fashion assets that exceed expectations. We empower designers and creators with tools, 
                resources, and platforms to bring their visions to life while building lasting relationships 
                through transparency, innovation, and unwavering dedication to quality.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <Eye className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a recognized global leader in the intersection of traditional fashion excellence 
                and digital innovation. We envision a future where digital fashion is mainstream, where 
                creators have access to professional tools and resources, and where quality, sustainability, 
                and creativity drive the entire industry forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">
            Our <span className="font-serif italic text-rose-600">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We never compromise on quality, ensuring every product—physical or digital—meets the highest standards"
              },
              {
                icon: Users,
                title: "Innovation",
                description: "We lead the charge in digital fashion, embracing new technologies and approaches to shape the future"
              },
              {
                icon: Target,
                title: "Partnership",
                description: "We build genuine relationships with creators, designers, and clients, becoming true partners in their success"
              },
              {
                icon: Zap,
                title: "Empowerment",
                description: "We provide the tools, resources, and platforms that enable designers to bring their visions to life"
              },
              {
                icon: Eye,
                title: "Sustainability",
                description: "We champion sustainable practices in manufacturing and digital creation for a better future"
              },
              {
                icon: Users,
                title: "Community",
                description: "We foster a thriving community of creators and innovators dedicated to advancing the fashion industry"
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Fashion */}
      <section className="py-24 px-6 bg-gradient-to-br from-rose-50 to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">
            Why Digital <span className="font-serif italic text-rose-600">Fashion</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">The Trends Are Clear</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Virtual fashion marketplaces are booming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Metaverse fashion is becoming mainstream</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>AR try-on experiences are industry standard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Design efficiency through digital tools is essential</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>Professional design templates and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>3D garments and virtual assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>AI-assisted design and trend forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold">✓</span>
                  <span>AR filters and virtual try-on experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
