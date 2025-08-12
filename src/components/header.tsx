"use client";

import { useState } from "react";
import Link from "next/link";
import { Scissors, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-barbershop-navyblue text-white">
      <div className="barbershop-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Scissors className="h-6 w-6 text-barbershop-gold mr-2" />
            <span className="font-serif text-xl font-bold text-barbershop-gold">Gentleman&apos;s Cut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <Link href="/" className="text-barbershop-cream hover:text-barbershop-gold transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-barbershop-cream hover:text-barbershop-gold transition-colors">
              Services
            </Link>
            <Link href="/barbers" className="text-barbershop-cream hover:text-barbershop-gold transition-colors">
              Barbers
            </Link>
            <Link href="/contact" className="text-barbershop-cream hover:text-barbershop-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="px-4 py-2 bg-barbershop-darkred text-white rounded-md font-medium hover:bg-barbershop-darkred/90 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-barbershop-cream"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <Link
                href="/"
                className="text-barbershop-cream hover:text-barbershop-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-barbershop-cream hover:text-barbershop-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/barbers"
                className="text-barbershop-cream hover:text-barbershop-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Barbers
              </Link>
              <Link
                href="/contact"
                className="text-barbershop-cream hover:text-barbershop-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="px-4 py-2 bg-barbershop-darkred text-white rounded-md font-medium hover:bg-barbershop-darkred/90 transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 