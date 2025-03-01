import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-barbershop-navyblue text-white">
        <div className="barbershop-container py-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-barbershop-gold">
            Privacy Policy
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
              At Gentleman&apos;s Cut Barbershop, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and 
              tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-barbershop-charcoal">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-barbershop-charcoal space-y-2 mt-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address, telephone numbers, and address.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-barbershop-charcoal">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-barbershop-charcoal space-y-2 mt-4">
              <li>To register you as a new customer.</li>
              <li>To process and deliver your service bookings.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and this website.</li>
              <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
              <li>To use data analytics to improve our website, products/services, marketing, customer relationships, and experiences.</li>
              <li>To make suggestions and recommendations to you about goods or services that may be of interest to you.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              3. Data Security
            </h2>
            <p className="text-barbershop-charcoal">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              4. Data Retention
            </h2>
            <p className="text-barbershop-charcoal">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              5. Your Legal Rights
            </h2>
            <p className="text-barbershop-charcoal">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-barbershop-charcoal space-y-2 mt-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              6. Cookies
            </h2>
            <p className="text-barbershop-charcoal">
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. We use cookies to enhance your experience on our website and to improve our site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-barbershop-charcoal">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last Updated&quot; date at the top of this privacy policy.
            </p>

            <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-barbershop-charcoal">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 bg-barbershop-cream/30 p-6 rounded-md">
              <p className="text-barbershop-charcoal">
                <strong>Gentleman&apos;s Cut Barbershop</strong><br />
                123 Main Street<br />
                Downtown, City 10001<br />
                United States<br /><br />
                Email: <a href="mailto:privacy@gentlemanscut.com" className="text-barbershop-darkred hover:underline">privacy@gentlemanscut.com</a><br />
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