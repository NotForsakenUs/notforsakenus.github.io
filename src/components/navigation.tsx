"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "https://blog.notforsaken.us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#333150] border-b-4 border-white shadow-lg ${className}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-18 lg:h-20 py-3">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center group"
            onClick={closeMobileMenu}
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757099722395-ovzs5k413c.png" 
              alt="Not Forsaken Ministries Logo" 
              className="h-12 lg:h-14 w-auto group-hover:opacity-80 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-white hover:text-white/80 transition-colors duration-300 relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Donate Button - Hidden on small screens, visible on lg+ */}
            <Button
              asChild
              className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="https://collect.crowded.me/collection/ede664cc-e0ab-4093-9182-69740177e821">Donate</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-lg text-white hover:text-white/80 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-[#333150]">
            <nav className="px-4 pt-4 pb-6 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 rounded-lg transition-all duration-300"
                >
                  <Link href="https://collect.crowded.me/collection/ede664cc-e0ab-4093-9182-69740177e821" onClick={closeMobileMenu}>
                    Support Our Ministry
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
