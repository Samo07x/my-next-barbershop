"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

// Metadata needs to be in a separate file for client components
// or defined in a separate server component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Gentleman's Cut Barbershop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-barbershop-gold">
              Contact Us
            </h1>
            <p className="text-lg mb-6 text-barbershop-cream">
              Have questions or feedback? We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-white">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="barbershop-heading text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-barbershop-charcoal mb-8">
                We&apos;re here to answer any questions you might have about our services, 
                booking appointments, or anything else. Feel free to reach out using any 
                of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-barbershop-cream/30 p-3 rounded-md mr-4">
                    <MapPin className="h-6 w-6 text-barbershop-darkred" />
                  </div>
                  <div>
                    <h3 className="font-medium text-barbershop-navyblue mb-1">Our Location</h3>
                    <p className="text-barbershop-charcoal">
                      123 Main Street<br />
                      Downtown, City 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-barbershop-cream/30 p-3 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-barbershop-darkred" />
                  </div>
                  <div>
                    <h3 className="font-medium text-barbershop-navyblue mb-1">Phone Number</h3>
                    <p className="text-barbershop-charcoal">
                      <a href="tel:+11234567890" className="hover:text-barbershop-darkred transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-barbershop-cream/30 p-3 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-barbershop-darkred" />
                  </div>
                  <div>
                    <h3 className="font-medium text-barbershop-navyblue mb-1">Email Address</h3>
                    <p className="text-barbershop-charcoal">
                      <a href="mailto:info@gentlemanscut.com" className="hover:text-barbershop-darkred transition-colors">
                        info@gentlemanscut.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-barbershop-cream/30 p-3 rounded-md mr-4">
                    <Clock className="h-6 w-6 text-barbershop-darkred" />
                  </div>
                  <div>
                    <h3 className="font-medium text-barbershop-navyblue mb-1">Business Hours</h3>
                    <p className="text-barbershop-charcoal">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-serif text-xl font-bold text-barbershop-navyblue mb-4">Find Us</h3>
                <div className="h-64 bg-gray-200 rounded-md overflow-hidden">
                  {/* Map placeholder - would be replaced with actual map component */}
                  <div className="w-full h-full flex items-center justify-center bg-barbershop-cream/30">
                    <p className="text-barbershop-charcoal">Interactive Map Would Be Here</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="barbershop-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-barbershop-navyblue mb-2">Message Sent!</h3>
                  <p className="text-barbershop-charcoal mb-6">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-barbershop-navyblue font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-barbershop-navyblue font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-barbershop-navyblue font-medium mb-2">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-barbershop-navyblue font-medium mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="appointment">Appointment Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="career">Career Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-barbershop-navyblue font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-barbershop-cream/30">
        <div className="barbershop-container text-center">
          <h2 className="barbershop-heading text-2xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="text-barbershop-charcoal max-w-2xl mx-auto mb-8">
            Don&apos;t wait to experience premium grooming services at Gentleman&apos;s Cut Barbershop.
            Book your appointment today and let our expert barbers take care of you.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 bg-barbershop-darkred text-white rounded-md font-medium hover:bg-barbershop-darkred/90 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
} 