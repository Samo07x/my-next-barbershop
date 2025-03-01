import Image from "next/image";
import Link from "next/link";
import { Calendar, Star, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Barbers | Gentleman's Cut Barbershop",
  description: "Meet our team of expert barbers with years of experience in classic and modern grooming techniques.",
};

export default function BarbersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/barbers-hero.jpg"
            alt="Our expert barbers"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-barbershop-gold">
              Meet Our Expert Barbers
            </h1>
            <p className="text-lg md:text-xl mb-6 text-barbershop-cream">
              Our team of skilled professionals brings years of experience and passion to deliver exceptional grooming services.
            </p>
          </div>
        </div>
      </section>

      {/* Barbers List */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Barber 1 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-1.jpg"
                  alt="James Wilson"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">James Wilson</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Master Barber</p>
                <p className="text-barbershop-charcoal mb-4">
                  With over 15 years of experience, James specializes in classic cuts and precision fades. His attention to detail and commitment to perfection make him a favorite among our regular clients.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Classic Gentleman&apos;s Cuts</li>
                    <li>• Precision Fades</li>
                    <li>• Hot Towel Shaves</li>
                    <li>• Beard Styling</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/james-wilson"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=james-wilson"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>

            {/* Barber 2 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-2.jpg"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">Michael Rodriguez</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Style Specialist</p>
                <p className="text-barbershop-charcoal mb-4">
                  Michael brings contemporary styling techniques with a focus on modern trends and beard sculpting. His creative approach and eye for detail help clients achieve their unique style.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Modern Styles</li>
                    <li>• Beard Sculpting</li>
                    <li>• Textured Crops</li>
                    <li>• Hair Design</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/michael-rodriguez"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=michael-rodriguez"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>

            {/* Barber 3 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-3.jpg"
                  alt="David Thompson"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">David Thompson</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Senior Barber</p>
                <p className="text-barbershop-charcoal mb-4">
                  David excels in traditional hot towel shaves and classic gentleman&apos;s grooming techniques. His old-school approach combined with modern knowledge creates an exceptional experience.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Traditional Hot Shaves</li>
                    <li>• Classic Pompadours</li>
                    <li>• Executive Cuts</li>
                    <li>• Facial Hair Grooming</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/david-thompson"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=david-thompson"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>

            {/* Barber 4 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-4.jpg"
                  alt="Robert Johnson"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">Robert Johnson</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Color Specialist</p>
                <p className="text-barbershop-charcoal mb-4">
                  Robert specializes in men&apos;s hair and beard coloring with a natural-looking finish. His expertise in color theory ensures clients receive the most flattering results.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Hair Coloring</li>
                    <li>• Beard Coloring</li>
                    <li>• Gray Blending</li>
                    <li>• Modern Cuts</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/robert-johnson"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=robert-johnson"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>

            {/* Barber 5 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-5.jpg"
                  alt="Thomas Garcia"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">Thomas Garcia</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Texture Specialist</p>
                <p className="text-barbershop-charcoal mb-4">
                  Thomas excels in working with all hair textures and specializes in creating styles that enhance natural texture while being easy to maintain.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Curly Hair Cuts</li>
                    <li>• Textured Styles</li>
                    <li>• Taper Fades</li>
                    <li>• Line-ups & Designs</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/thomas-garcia"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=thomas-garcia"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>

            {/* Barber 6 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/barber-6.jpg"
                  alt="William Chen"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl font-bold text-barbershop-darkred">William Chen</h2>
                  <div className="flex">
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                    <Star className="h-4 w-4 text-barbershop-gold fill-current" />
                  </div>
                </div>
                <p className="text-barbershop-navyblue font-medium mb-3">Apprentice Barber</p>
                <p className="text-barbershop-charcoal mb-4">
                  Our newest team member, William brings fresh perspective and modern techniques. Under the mentorship of our senior barbers, he delivers excellent service at a special apprentice rate.
                </p>
                <div className="border-t border-barbershop-cream pt-4 mb-4">
                  <h3 className="font-medium text-barbershop-navyblue mb-2">Specialties:</h3>
                  <ul className="text-sm text-barbershop-charcoal space-y-1">
                    <li>• Modern Cuts</li>
                    <li>• Skin Fades</li>
                    <li>• Beard Trims</li>
                    <li>• Contemporary Styling</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href="/barbers/william-chen"
                    className="text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium flex items-center"
                  >
                    View Full Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/booking?barber=william-chen"
                    className="flex items-center text-sm px-3 py-1.5 rounded-md bg-barbershop-darkred text-white hover:bg-barbershop-darkred/90 transition-colors"
                  >
                    <Calendar className="mr-1 h-4 w-4" />
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barbershop-darkred text-white">
        <div className="barbershop-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Experience Expert Grooming?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book your appointment with one of our skilled barbers today and enjoy the premium barbershop experience.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center bg-barbershop-gold text-barbershop-navyblue px-8 py-3 rounded-md font-medium hover:bg-barbershop-gold/90 transition-colors"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
} 