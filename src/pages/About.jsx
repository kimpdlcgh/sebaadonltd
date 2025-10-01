import React from "react";
import { Target, Eye, Award, Users } from "lucide-react";

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
            A new force in boutique goods and manufacturing, driven by passion and excellence
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
              SEBAA DON LIMITED emerges as a fresh and dynamic player in the world of boutique goods and 
              manufacturing. We're not just another company – we're a movement dedicated to redefining 
              excellence in every product we touch.
            </p>
            <p>
              Our journey begins with a simple belief: that quality, innovation, and customer-centricity 
              should never be compromised. From our carefully curated boutique selections to our 
              state-of-the-art manufacturing facilities, every aspect of our operation reflects this 
              unwavering commitment.
            </p>
            <p>
              As a new player in the industry, we bring fresh perspectives and innovative approaches to 
              traditional challenges. Our direct-to-consumer model eliminates unnecessary middlemen, 
              ensuring you receive premium products at fair prices. Our merchandise printing services 
              combine cutting-edge technology with artistic sensibility, bringing your brand vision to life.
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
                To deliver exceptional boutique goods and manufacturing services that exceed expectations, 
                while building lasting relationships with our clients through transparency, innovation, 
                and unwavering dedication to quality.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <Eye className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a recognized leader in the boutique and manufacturing industry, known for our 
                innovative approach, sustainable practices, and ability to transform client visions into 
                tangible, high-quality realities.
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
                description: "We never compromise on quality, ensuring every product meets the highest standards"
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We build genuine relationships with our clients, becoming true partners in their success"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously evolve, embracing new technologies and approaches to stay ahead"
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="font-serif italic text-rose-300">Commitment</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            As we embark on this exciting journey, we pledge to uphold the highest standards of integrity, 
            quality, and service. Every product we create, every service we deliver, and every relationship 
            we build is a testament to our commitment to excellence.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            SEBAA DON LIMITED isn't just about business – it's about creating value, fostering innovation, 
            and building a legacy of quality that will stand the test of time.
          </p>
        </div>
      </section>
    </div>
  );
}