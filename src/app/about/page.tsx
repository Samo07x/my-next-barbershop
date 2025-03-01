import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/about-hero.jpg"
            alt="About Gentleman's Cut Barbershop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-barbershop-gold">
              About Gentleman&apos;s Cut
            </h1>
            <p className="text-lg mb-6 text-barbershop-cream">
              A tradition of excellence in men&apos;s grooming since 2005. Discover our story, values, and commitment to quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="barbershop-heading text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-barbershop-charcoal mb-4">
                Gentleman&apos;s Cut Barbershop was founded in 2005 by master barber James Wilson with a vision to revive the traditional barbershop experience while incorporating modern techniques and styles.
              </p>
              <p className="text-barbershop-charcoal mb-4">
                What started as a small two-chair shop has grown into a premium grooming destination, known for exceptional service and attention to detail. Our commitment to quality has earned us a loyal clientele and numerous accolades in the industry.
              </p>
              <p className="text-barbershop-charcoal">
                Today, Gentleman&apos;s Cut continues to honor the time-tested traditions of classic barbering while embracing innovation and contemporary styles, creating a unique experience that bridges the past and present.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-story.jpg"
                alt="The history of Gentleman's Cut Barbershop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-barbershop-cream/30">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              At Gentleman&apos;s Cut, we&apos;re guided by a set of core values that define who we are and how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-barbershop-darkred/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-3">Excellence</h3>
              <p className="text-barbershop-charcoal">
                We strive for excellence in every haircut, every shave, and every interaction. Our commitment to quality is unwavering.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-barbershop-darkred/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-3">Community</h3>
              <p className="text-barbershop-charcoal">
                We believe in creating a welcoming environment where clients become friends and our barbershop becomes a community hub.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-barbershop-darkred/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-barbershop-darkred" />
              </div>
              <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-3">Passion</h3>
              <p className="text-barbershop-charcoal">
                Our barbers are passionate about their craft, continuously learning and perfecting their skills to deliver the best service possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-approach.jpg"
                alt="Our barbering approach"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="barbershop-heading text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-barbershop-charcoal mb-4">
                At Gentleman&apos;s Cut, we believe that a great haircut is more than just a service—it&apos;s an experience. Our approach combines traditional barbering techniques with modern styles and personalized attention.
              </p>
              <p className="text-barbershop-charcoal mb-4">
                Each client receives a thorough consultation to understand their preferences and needs. We take the time to discuss your hair type, face shape, lifestyle, and desired look before picking up our scissors.
              </p>
              <p className="text-barbershop-charcoal">
                Our services include complimentary hot towel treatments, neck shaves, and styling advice, ensuring you leave our shop looking and feeling your best. We don&apos;t just want to meet your expectations—we aim to exceed them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-barbershop-vintage">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              The vision and expertise behind Gentleman&apos;s Cut Barbershop.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="James Wilson - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl font-bold text-barbershop-darkred mb-2">James Wilson</h3>
                <p className="text-barbershop-navyblue font-medium mb-4">Master Barber & Founder</p>
                <p className="text-barbershop-charcoal mb-4">
                  With over 25 years of experience in the industry, James Wilson has dedicated his life to the art of barbering. His journey began as an apprentice in his father&apos;s barbershop, where he learned the fundamentals of classic cutting techniques and customer service.
                </p>
                <p className="text-barbershop-charcoal mb-4">
                  After honing his skills in prestigious barbershops across the country and winning multiple styling competitions, James founded Gentleman&apos;s Cut in 2005 with a vision to create a space that honors traditional barbering while embracing modern innovations.
                </p>
                <p className="text-barbershop-charcoal">
                  &quot;My goal has always been to create more than just a place to get a haircut. I wanted to build a community where men can relax, connect, and leave looking and feeling their best.&quot; - James Wilson
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 bg-white">
        <div className="barbershop-container">
          <div className="text-center mb-12">
            <h2 className="barbershop-heading text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-barbershop-charcoal max-w-2xl mx-auto">
              Recognition of our commitment to excellence in the barbering industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Achievement 1 */}
            <div className="bg-barbershop-cream/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-barbershop-darkred mb-2">2018</div>
              <h3 className="font-serif text-lg font-bold text-barbershop-navyblue mb-2">Best Barbershop</h3>
              <p className="text-sm text-barbershop-charcoal">City Style Awards</p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-barbershop-cream/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-barbershop-darkred mb-2">2020</div>
              <h3 className="font-serif text-lg font-bold text-barbershop-navyblue mb-2">Master Styling Award</h3>
              <p className="text-sm text-barbershop-charcoal">National Barber Association</p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-barbershop-cream/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-barbershop-darkred mb-2">2021</div>
              <h3 className="font-serif text-lg font-bold text-barbershop-navyblue mb-2">Customer Excellence</h3>
              <p className="text-sm text-barbershop-charcoal">Regional Business Awards</p>
            </div>

            {/* Achievement 4 */}
            <div className="bg-barbershop-cream/30 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-barbershop-darkred mb-2">2023</div>
              <h3 className="font-serif text-lg font-bold text-barbershop-navyblue mb-2">Top 10 Barbershops</h3>
              <p className="text-sm text-barbershop-charcoal">Men&apos;s Style Magazine</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-barbershop-darkred text-white">
        <div className="barbershop-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Visit Gentleman&apos;s Cut Barbershop and discover why we&apos;ve been the preferred choice for discerning gentlemen since 2005.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-barbershop-gold text-barbershop-navyblue px-6 py-3 rounded-md font-medium hover:bg-barbershop-gold/90 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 