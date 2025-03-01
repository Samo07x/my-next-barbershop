import Image from "next/image";
import Link from "next/link";
import { Calendar, Scissors, Clock } from "lucide-react";

export const metadata = {
  title: "Our Services | Gentleman's Cut Barbershop",
  description: "Explore our premium barbershop services including haircuts, beard trims, hot towel shaves, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/services-hero.jpg"
            alt="Barbershop services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-barbershop-gold">
              Premium Grooming Services
            </h1>
            <p className="text-lg md:text-xl mb-6 text-barbershop-cream">
              We offer a range of premium grooming services tailored to meet the needs of the modern gentleman.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="barbershop-heading text-3xl font-bold mb-6">Haircut Services</h2>
              
              {/* Haircut Service 1 */}
              <div className="barbershop-card p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Classic Haircut</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      A traditional haircut with precision and attention to detail, including a hot towel finish.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$35</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      30 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes consultation, shampoo, precision cut, styling, and hot towel finish.
                  </p>
                </div>
              </div>
              
              {/* Haircut Service 2 */}
              <div className="barbershop-card p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Fade Haircut</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      Precision fade haircut with seamless blending and styling to suit your face shape.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$40</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      40 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes consultation, shampoo, precision fade, styling, and hot towel finish.
                  </p>
                </div>
              </div>
              
              {/* Haircut Service 3 */}
              <div className="barbershop-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Senior Haircut</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      Classic haircut service for our distinguished senior gentlemen (65+).
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$25</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      30 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes consultation, shampoo, precision cut, styling, and hot towel finish.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="barbershop-heading text-3xl font-bold mb-6">Beard & Shave Services</h2>
              
              {/* Beard Service 1 */}
              <div className="barbershop-card p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Beard Trim & Shape</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      Expert beard grooming to shape, trim and style your beard for a polished look.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$25</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      20 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes consultation, beard wash, trim, shape, and beard oil application.
                  </p>
                </div>
              </div>
              
              {/* Beard Service 2 */}
              <div className="barbershop-card p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Traditional Hot Shave</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      Experience the luxury of a traditional straight razor shave with hot towel treatment.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$35</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      30 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes hot towel preparation, premium shaving cream, straight razor shave, and aftershave balm.
                  </p>
                </div>
              </div>
              
              {/* Beard Service 3 */}
              <div className="barbershop-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-barbershop-darkred">Beard Color</h3>
                    <p className="text-barbershop-charcoal mt-2">
                      Professional beard coloring to cover gray or enhance your natural color.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-barbershop-navyblue text-xl">$45</span>
                    <div className="text-sm text-barbershop-charcoal/70 flex items-center justify-end mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      45 min
                    </div>
                  </div>
                </div>
                <div className="border-t border-barbershop-cream pt-4">
                  <p className="text-sm text-barbershop-charcoal/80">
                    Includes consultation, color selection, application, and post-color conditioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="barbershop-heading text-3xl font-bold mb-6">Premium Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="barbershop-card p-6 border-2 border-barbershop-gold">
                <div className="bg-barbershop-gold/10 p-3 rounded-full w-fit mb-4">
                  <Scissors className="h-6 w-6 text-barbershop-darkred" />
                </div>
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">The Full Service</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Complete grooming package including haircut, beard trim, hot towel treatment, and facial massage.
                </p>
                <ul className="text-sm text-barbershop-charcoal/80 mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Classic Haircut
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Beard Trim & Shape
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Hot Towel Treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Facial Massage
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-barbershop-navyblue text-xl">$60</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    60 min
                  </span>
                </div>
              </div>
              
              {/* Package 2 */}
              <div className="barbershop-card p-6 border-2 border-barbershop-gold">
                <div className="bg-barbershop-gold/10 p-3 rounded-full w-fit mb-4">
                  <Scissors className="h-6 w-6 text-barbershop-darkred" />
                </div>
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Executive Treatment</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Premium grooming experience with haircut, hot shave, scalp massage, and complimentary beverage.
                </p>
                <ul className="text-sm text-barbershop-charcoal/80 mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Premium Haircut
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Traditional Hot Shave
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Scalp Massage
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Complimentary Beverage
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-barbershop-navyblue text-xl">$75</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    75 min
                  </span>
                </div>
              </div>
              
              {/* Package 3 */}
              <div className="barbershop-card p-6 border-2 border-barbershop-gold">
                <div className="bg-barbershop-gold/10 p-3 rounded-full w-fit mb-4">
                  <Scissors className="h-6 w-6 text-barbershop-darkred" />
                </div>
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Father & Son</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Special package for father and son to enjoy quality time while getting groomed together.
                </p>
                <ul className="text-sm text-barbershop-charcoal/80 mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Two Classic Haircuts
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Beard Trim for Dad
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Hot Towel Treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-barbershop-gold mr-2">✓</span>
                    Complimentary Drinks
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-barbershop-navyblue text-xl">$65</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    60 min
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Services */}
          <div>
            <h2 className="barbershop-heading text-3xl font-bold mb-6">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Additional Service 1 */}
              <div className="barbershop-card p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Hair Coloring</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Professional hair coloring to cover gray or enhance your natural color.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-barbershop-navyblue">$55+</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    60+ min
                  </span>
                </div>
              </div>
              
              {/* Additional Service 2 */}
              <div className="barbershop-card p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Eyebrow Trim</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Precise eyebrow trimming and shaping to enhance your facial features.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-barbershop-navyblue">$15</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    15 min
                  </span>
                </div>
              </div>
              
              {/* Additional Service 3 */}
              <div className="barbershop-card p-6">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-2">Scalp Treatment</h3>
                <p className="text-barbershop-charcoal mb-4">
                  Rejuvenating scalp treatment to promote hair health and relieve tension.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-barbershop-navyblue">$25</span>
                  <span className="text-sm text-barbershop-charcoal/70 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    20 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-barbershop-darkred text-white">
        <div className="barbershop-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book your appointment today and enjoy the premium barbershop experience.
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