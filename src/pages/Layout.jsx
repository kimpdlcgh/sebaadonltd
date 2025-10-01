
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "About", path: createPageUrl("About") },
    { name: "Portfolio", path: createPageUrl("Portfolio") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen">
      <style>{`
        :root {
          --color-primary: #2C2C2C;
          --color-accent: #B76E79;
          --color-secondary: #D4C5B9;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="text-2xl font-light tracking-tight">
                <span className="font-serif italic text-rose-600">SEBAA DON</span>
                <span className="text-gray-900 ml-2">LIMITED</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-6 border-t border-gray-100 mt-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-rose-50 text-rose-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-3xl font-light mb-4">
                <span className="font-serif italic text-rose-400">SEBAA DON</span>
                <span className="ml-2">LIMITED</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Elevating boutique goods, manufacturing excellence, and personalized merchandise 
                to unprecedented heights. Your vision, our expertise.
              </p>
              <div className="flex gap-4">
                <a href="mailto:info@sebaadon.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+15551234567" className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-400">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-rose-400">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>info@sebaadonltd.shop</li>
                <li>+44 7429 919750</li>
                <li>
                  340a, 
                  Normanton Road<br />
                  Derby, England<br />
                  DE2 6WE
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2024 SEBAA DON LIMITED. All rights reserved.</p>
              <div className="flex gap-6">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <button className="hover:text-white transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
