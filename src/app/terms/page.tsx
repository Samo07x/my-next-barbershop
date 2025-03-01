import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-barbershop-navyblue text-white">
        <div className="barbershop-container py-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-barbershop-gold">
            Terms of Service
          </h1>
          <p className="text-lg mb-6 text-barbershop-cream">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="barbershop-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-barbershop-charcoal">
              Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Gentleman&apos;s Cut Barbershop website and services.
            </p>
            <p className="text-barbershop-charcoal">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="text-barbershop-charcoal">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              1. Services
            </h2>
            <p className="text-barbershop-charcoal">
              Gentleman&apos;s Cut Barbershop provides grooming services including but not limited to haircuts, beard trims, shaves, and other related services. All services are subject to availability and we reserve the right to refuse service to anyone for any reason at any time.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              2. Appointments
            </h2>
            <p className="text-barbershop-charcoal">
              Appointments can be made through our website, by phone, or in person. We request that you arrive at least 5 minutes before your scheduled appointment time. If you are more than 15 minutes late, we may need to reschedule your appointment.
            </p>
            <p className="text-barbershop-charcoal">
              Cancellations should be made at least 24 hours in advance. Failure to show up for an appointment or late cancellations may result in a cancellation fee equal to 50% of the service price.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              3. Payment
            </h2>
            <p className="text-barbershop-charcoal">
              Payment is due at the time services are rendered. We accept cash, credit cards, and debit cards. Prices for services are subject to change without notice.
            </p>
            <p className="text-barbershop-charcoal">
              For online bookings, we may require a credit card to secure your appointment. Your card will not be charged until services are rendered unless you fail to show up or cancel within the required timeframe.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              4. Gift Cards
            </h2>
            <p className="text-barbershop-charcoal">
              Gift cards are available for purchase and are non-refundable. Gift cards expire one year from the date of purchase. Lost or stolen gift cards cannot be replaced.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              5. Satisfaction Guarantee
            </h2>
            <p className="text-barbershop-charcoal">
              We strive to provide the highest quality service. If you are not completely satisfied with your service, please let us know within 7 days, and we will make it right.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              6. Conduct
            </h2>
            <p className="text-barbershop-charcoal">
              We aim to provide a comfortable and respectful environment for all clients and staff. Inappropriate behavior, harassment, or discrimination will not be tolerated and may result in refusal of service and removal from the premises.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-barbershop-charcoal">
              The content on our website, including text, graphics, logos, images, and software, is the property of Gentleman&apos;s Cut Barbershop and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from this content without express written consent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-barbershop-charcoal">
              Gentleman&apos;s Cut Barbershop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-barbershop-charcoal">
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              10. Contact Us
            </h2>
            <p className="text-barbershop-charcoal">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 bg-barbershop-cream/30 p-6 rounded-md">
              <p className="text-barbershop-charcoal">
                <strong>Gentleman&apos;s Cut Barbershop</strong><br />
                123 Main Street<br />
                Downtown, City 10001<br />
                United States<br /><br />
                Email: <a href="mailto:info@gentlemanscut.com" className="text-barbershop-darkred hover:underline">info@gentlemanscut.com</a><br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium hover:bg-barbershop-darkred/90 transition-colors"
            >
              Contact Us With Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 