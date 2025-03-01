"use client";

import Link from "next/link";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-barbershop-navyblue text-white">
      <div className="barbershop-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-barbershop-gold mr-2" />
              <span className="font-serif text-xl font-bold text-barbershop-gold">Gentleman&apos;s Cut</span>
            </Link>
            <p className="text-barbershop-cream text-sm mb-4">
              Premium grooming services for the modern gentleman. Experience the tradition of classic barbering with a contemporary twist.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-barbershop-cream hover:text-barbershop-gold transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-barbershop-cream hover:text-barbershop-gold transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-barbershop-cream hover:text-barbershop-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-barbershop-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-barbershop-cream hover:text-barbershop-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-barbershop-cream hover:text-barbershop-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/barbers" className="text-barbershop-cream hover:text-barbershop-gold transition-colors text-sm">
                  Barbers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-barbershop-cream hover:text-barbershop-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-barbershop-cream hover:text-barbershop-gold transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold text-barbershop-gold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-barbershop-cream">
                <span className="font-medium">Monday - Friday:</span> 9:00 AM - 8:00 PM
              </li>
              <li className="text-barbershop-cream">
                <span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM
              </li>
              <li className="text-barbershop-cream">
                <span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-barbershop-gold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p className="text-barbershop-cream">
                123 Main Street<br />
                Downtown, City 10001
              </p>
              <p className="text-barbershop-cream">
                <a href="tel:+11234567890" className="hover:text-barbershop-gold transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-barbershop-cream">
                <a href="mailto:info@gentlemanscut.com" className="hover:text-barbershop-gold transition-colors">
                  info@gentlemanscut.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-barbershop-charcoal/30 mt-8 pt-8 text-center text-sm text-barbershop-cream">
          <p>&copy; {new Date().getFullYear()} Gentleman&apos;s Cut Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 