"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, Calendar, Home, Scissors, Phone, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-barbershop-cream border-b border-barbershop-gold/30 sticky top-0 z-50">
      <div className="barbershop-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="relative h-10 w-10 overflow-hidden">
              {/* Replace with your actual logo */}
              <div className="h-full w-full flex items-center justify-center bg-barbershop-darkred rounded-full">
                <Scissors className="h-6 w-6 text-barbershop-cream" />
              </div>
            </div>
            <span className="font-serif text-xl font-bold text-barbershop-darkred">Gentleman&apos;s Cut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" icon={<Home className="h-4 w-4 mr-1" />}>
              Home
            </NavLink>
            <NavLink href="/services" icon={<Scissors className="h-4 w-4 mr-1" />}>
              Services
            </NavLink>
            <NavLink href="/barbers" icon={<User className="h-4 w-4 mr-1" />}>
              Our Barbers
            </NavLink>
            <NavLink href="/about" icon={<Info className="h-4 w-4 mr-1" />}>
              About Us
            </NavLink>
            <NavLink href="/contact" icon={<Phone className="h-4 w-4 mr-1" />}>
              Contact
            </NavLink>
            <Link
              href="/booking"
              className="flex items-center px-4 py-2 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-barbershop-navyblue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-barbershop-navyblue/95 z-50 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="relative h-10 w-10 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-barbershop-darkred rounded-full">
                  <Scissors className="h-6 w-6 text-barbershop-cream" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold text-barbershop-cream">Gentleman&apos;s Cut</span>
            </Link>
            <button
              className="p-2 text-barbershop-cream"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-lg">
            <MobileNavLink href="/" icon={<Home className="h-5 w-5 mr-3" />} onClick={closeMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/services" icon={<Scissors className="h-5 w-5 mr-3" />} onClick={closeMenu}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/barbers" icon={<User className="h-5 w-5 mr-3" />} onClick={closeMenu}>
              Our Barbers
            </MobileNavLink>
            <MobileNavLink href="/about" icon={<Info className="h-5 w-5 mr-3" />} onClick={closeMenu}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/contact" icon={<Phone className="h-5 w-5 mr-3" />} onClick={closeMenu}>
              Contact
            </MobileNavLink>
            <Link
              href="/booking"
              className="flex items-center justify-center px-4 py-3 mt-4 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
              onClick={closeMenu}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink = ({ href, children, icon }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center text-barbershop-navyblue hover:text-barbershop-darkred transition-colors font-medium"
    >
      {icon}
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink = ({ href, children, icon, onClick }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center text-barbershop-cream hover:text-barbershop-gold transition-colors font-medium"
      onClick={onClick}
    >
      {icon}
      {children}
    </Link>
  );
};

export default Navbar; 