import Image from "next/image";
import Link from "next/link";
import { Calendar, Scissors, Star, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-background.jpg"
            alt="Barbershop background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-barbershop-gold">
              Classic Grooming for the Modern Gentleman
            </h1>
            <p className="text-lg md:text-xl mb-8 text-barbershop-cream">
              Experience the timeless tradition of a premium barbershop with expert barbers and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="barbershop-button-primary px-6 py-3 rounded-md font-medium text-center flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="barbershop-button-accent px-6 py-3 rounded-md font-medium text-center flex items-center justify-center"
              >
                <Scissors className="mr-2 h-5 w-5" />
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-barbershop-cream">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              We offer a range of premium grooming services tailored to meet the needs of the modern gentleman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="barbershop-card p-6 flex flex-col h-full">
              <div className="bg-barbershop-darkred/10 p-3 rounded-full w-fit mb-4">
                <Scissors className="h-6 w-6 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Classic Haircut</h3>
              <p className="text-barbershop-charcoal mb-4 flex-grow">
                A traditional haircut with precision and attention to detail, including a hot towel finish.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-barbershop-navyblue">$35</span>
                <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  30 min
                </span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="barbershop-card p-6 flex flex-col h-full">
              <div className="bg-barbershop-darkred/10 p-3 rounded-full w-fit mb-4">
                <Scissors className="h-6 w-6 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Beard Trim & Shape</h3>
              <p className="text-barbershop-charcoal mb-4 flex-grow">
                Expert beard grooming to shape, trim and style your beard for a polished look.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-barbershop-navyblue">$25</span>
                <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  20 min
                </span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="barbershop-card p-6 flex flex-col h-full">
              <div className="bg-barbershop-darkred/10 p-3 rounded-full w-fit mb-4">
                <Scissors className="h-6 w-6 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">The Full Service</h3>
              <p className="text-barbershop-charcoal mb-4 flex-grow">
                Complete grooming package including haircut, beard trim, hot towel treatment, and facial massage.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-barbershop-navyblue">$60</span>
                <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  60 min
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium"
            >
              View All Services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Barbers Preview */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Barbers</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              Our team of skilled barbers brings years of experience and passion to deliver exceptional grooming services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Barber 1 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/barber-1.jpg"
                  alt="James Wilson"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-1">James Wilson</h3>
                <p className="text-barbershop-navyblue mb-3">Master Barber</p>
                <p className="text-barbershop-charcoal text-sm mb-4">
                  With over 15 years of experience, James specializes in classic cuts and precision fades.
                </p>
                <Link
                  href="/barbers/james-wilson"
                  className="text-barbershop-darkred hover:text-barbershop-darkred/80 text-sm font-medium flex items-center"
                >
                  View Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Barber 2 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/barber-2.jpg"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-1">Michael Rodriguez</h3>
                <p className="text-barbershop-navyblue mb-3">Style Specialist</p>
                <p className="text-barbershop-charcoal text-sm mb-4">
                  Michael brings contemporary styling techniques with a focus on modern trends and beard sculpting.
                </p>
                <Link
                  href="/barbers/michael-rodriguez"
                  className="text-barbershop-darkred hover:text-barbershop-darkred/80 text-sm font-medium flex items-center"
                >
                  View Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Barber 3 */}
            <div className="barbershop-card overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/barber-3.jpg"
                  alt="David Thompson"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-1">David Thompson</h3>
                <p className="text-barbershop-navyblue mb-3">Senior Barber</p>
                <p className="text-barbershop-charcoal text-sm mb-4">
                  David excels in traditional hot towel shaves and classic gentleman&apos;s grooming techniques.
                </p>
                <Link
                  href="/barbers/david-thompson"
                  className="text-barbershop-darkred hover:text-barbershop-darkred/80 text-sm font-medium flex items-center"
                >
                  View Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/barbers"
              className="inline-flex items-center text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium"
            >
              Meet All Barbers
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-barbershop-vintage">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-barbershop-gold mb-4">
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
              </div>
              <p className="text-barbershop-charcoal mb-4 italic">
                &quot;The best haircut I&apos;ve ever had. The attention to detail and the overall experience was exceptional. I won&apos;t go anywhere else now.&quot;
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/client-1.jpg"
                    alt="John D."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-barbershop-navyblue">John D.</h4>
                  <p className="text-sm text-barbershop-charcoal/70">Regular Client</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-barbershop-gold mb-4">
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
              </div>
              <p className="text-barbershop-charcoal mb-4 italic">
                &quot;I appreciate the traditional approach combined with modern techniques. My beard has never looked better!&quot;
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/client-2.jpg"
                    alt="Robert M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-barbershop-navyblue">Robert M.</h4>
                  <p className="text-sm text-barbershop-charcoal/70">Loyal Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-barbershop-gold mb-4">
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
                <Star className="fill-current h-5 w-5" />
              </div>
              <p className="text-barbershop-charcoal mb-4 italic">
                &quot;The atmosphere, the service, the result - everything is top-notch. It&apos;s more than just a haircut, it&apos;s an experience.&quot;
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/client-3.jpg"
                    alt="Thomas K."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-barbershop-navyblue">Thomas K.</h4>
                  <p className="text-sm text-barbershop-charcoal/70">New Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-barbershop-darkred text-white">
        <div className="barbershop-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the premium barbershop service you deserve.
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
