"use client";

import { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, Scissors, ChevronRight, Check } from "lucide-react";
import { useSearchParams } from "next/navigation";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedBarber = searchParams.get("barber");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    barber: preselectedBarber || "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  useEffect(() => {
    if (formData.date && formData.barber) {
      fetch(`/api/bookings?date=${formData.date}&barberId=${formData.barber}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.bookedSlots) setBookedSlots(data.bookedSlots);
          else setBookedSlots([]);
        })
        .catch((err) => {
          console.error("Failed to fetch bookings:", err);
          setBookedSlots([]);
        });
    } else {
      setBookedSlots([]);
    }
  }, [formData.date, formData.barber]);

  const services = [
    { id: "classic-haircut", name: "Classic Haircut", duration: 30, price: 35 },
    { id: "fade-haircut", name: "Fade Haircut", duration: 40, price: 40 },
    { id: "beard-trim", name: "Beard Trim & Shape", duration: 20, price: 25 },
    { id: "hot-shave", name: "Traditional Hot Shave", duration: 30, price: 35 },
    { id: "full-service", name: "The Full Service", duration: 60, price: 60 },
    { id: "executive", name: "Executive Treatment", duration: 75, price: 75 },
  ];

  const barbers = [
    { id: "james-wilson", name: "James Wilson", specialty: "Master Barber" },
    { id: "michael-rodriguez", name: "Michael Rodriguez", specialty: "Style Specialist" },
    { id: "david-thompson", name: "David Thompson", specialty: "Senior Barber" },
    { id: "robert-johnson", name: "Robert Johnson", specialty: "Color Specialist" },
    { id: "thomas-garcia", name: "Thomas Garcia", specialty: "Texture Specialist" },
    { id: "william-chen", name: "William Chen", specialty: "Apprentice Barber" },
  ];

  const availableTimes = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleBarberSelect = (barberId: string) => {
    setFormData((prev) => ({ ...prev, barber: barberId }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: formData.service,
          barberId: formData.barber,
          date: formData.date,
          time: formData.time,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          notes: formData.notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      
      setIsSuccess(true);
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSelectedService = () => {
    return services.find(service => service.id === formData.service);
  };

  const getSelectedBarber = () => {
    return barbers.find(barber => barber.id === formData.barber);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-barbershop-navyblue text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/booking-hero.jpg"
            alt="Book your appointment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="barbershop-container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-barbershop-gold">
              Book Your Appointment
            </h1>
            <p className="text-lg mb-6 text-barbershop-cream">
              Schedule your visit to Gentleman&apos;s Cut Barbershop and experience premium grooming services.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-white">
        <div className="barbershop-container">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-barbershop-darkred text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Scissors className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2 font-medium">Service</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200">
                <div className={`h-full ${step >= 2 ? 'bg-barbershop-darkred' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%' }}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-barbershop-darkred text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2 font-medium">Date & Time</span>
              </div>
              <div className="flex-1 h-1 mx-2 bg-gray-200">
                <div className={`h-full ${step >= 3 ? 'bg-barbershop-darkred' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0%' }}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-barbershop-darkred text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2 font-medium">Your Info</span>
              </div>
            </div>
          </div>

          {/* Step 1: Select Service and Barber */}
          {step === 1 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="barbershop-heading text-2xl font-bold mb-8 text-center">Select Your Service & Barber</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-serif font-bold text-barbershop-navyblue mb-4">Choose a Service:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${
                        formData.service === service.id 
                          ? 'border-barbershop-darkred bg-barbershop-darkred/5' 
                          : 'border-gray-200 hover:border-barbershop-darkred/50'
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-barbershop-darkred">{service.name}</h4>
                          <p className="text-sm text-barbershop-charcoal mt-1">
                            <Clock className="inline-block h-3.5 w-3.5 mr-1" />
                            {service.duration} min
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-barbershop-navyblue">${service.price}</span>
                          {formData.service === service.id && (
                            <div className="mt-1 text-barbershop-darkred">
                              <Check className="h-5 w-5 inline-block" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-serif font-bold text-barbershop-navyblue mb-4">Choose a Barber:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {barbers.map((barber) => (
                    <div 
                      key={barber.id}
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${
                        formData.barber === barber.id 
                          ? 'border-barbershop-darkred bg-barbershop-darkred/5' 
                          : 'border-gray-200 hover:border-barbershop-darkred/50'
                      }`}
                      onClick={() => handleBarberSelect(barber.id)}
                    >
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                          <Image
                            src={`/images/${barber.id}.jpg`}
                            alt={barber.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-barbershop-darkred">{barber.name}</h4>
                          <p className="text-xs text-barbershop-charcoal">{barber.specialty}</p>
                        </div>
                        {formData.barber === barber.id && (
                          <div className="ml-auto text-barbershop-darkred">
                            <Check className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={nextStep}
                  disabled={!formData.service || !formData.barber}
                >
                  Continue
                  <ChevronRight className="ml-1 h-4 w-4 inline-block" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date and Time */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="barbershop-heading text-2xl font-bold mb-8 text-center">Select Date & Time</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold text-barbershop-navyblue mb-4">Choose a Date:</h3>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                  required
                />
              </div>
              
              {formData.date && (
                <div className="mb-10">
                  <h3 className="text-xl font-serif font-bold text-barbershop-navyblue mb-4">Choose a Time:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {availableTimes.map((time) => {
                      const isBooked = bookedSlots.includes(time);
                      return (
                        <div 
                          key={time}
                          className={`border rounded-md p-3 text-center transition-colors ${
                            isBooked 
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                              : formData.time === time 
                                ? 'border-barbershop-darkred bg-barbershop-darkred/5 text-barbershop-darkred cursor-pointer' 
                                : 'border-gray-200 hover:border-barbershop-darkred/50 cursor-pointer'
                          }`}
                          onClick={() => !isBooked && handleTimeSelect(time)}
                        >
                          {time}
                          {isBooked && <span className="block text-xs mt-1">Booked</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-6 py-3 border border-barbershop-darkred text-barbershop-darkred rounded-md font-medium"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={nextStep}
                  disabled={!formData.date || !formData.time}
                >
                  Continue
                  <ChevronRight className="ml-1 h-4 w-4 inline-block" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Your Information */}
          {step === 3 && (
            <div className="max-w-4xl mx-auto">
              <h2 className="barbershop-heading text-2xl font-bold mb-8 text-center">Your Information</h2>
              
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <div>
                    <label htmlFor="phone" className="block text-barbershop-navyblue font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-barbershop-navyblue font-medium mb-2">Special Requests (Optional)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barbershop-darkred/50"
                    ></textarea>
                  </div>
                </div>
                
                <div className="bg-barbershop-cream/30 p-6 rounded-md mb-8">
                  <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-4">Appointment Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-barbershop-charcoal mb-2">
                        <span className="font-medium">Service:</span> {getSelectedService()?.name}
                      </p>
                      <p className="text-barbershop-charcoal mb-2">
                        <span className="font-medium">Barber:</span> {getSelectedBarber()?.name}
                      </p>
                      <p className="text-barbershop-charcoal">
                        <span className="font-medium">Duration:</span> {getSelectedService()?.duration} minutes
                      </p>
                    </div>
                    <div>
                      <p className="text-barbershop-charcoal mb-2">
                        <span className="font-medium">Date:</span> {formData.date}
                      </p>
                      <p className="text-barbershop-charcoal mb-2">
                        <span className="font-medium">Time:</span> {formData.time}
                      </p>
                      <p className="text-barbershop-charcoal font-bold">
                        <span className="font-medium">Price:</span> ${getSelectedService()?.price}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="px-6 py-3 border border-barbershop-darkred text-barbershop-darkred rounded-md font-medium"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <Check className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && isSuccess && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="barbershop-heading text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-barbershop-charcoal mb-6">
                Your appointment has been successfully booked. We&apos;ve sent a confirmation email to <span className="font-medium">{formData.email}</span> with all the details.
              </p>
              
              <div className="bg-barbershop-cream/30 p-6 rounded-md mb-8 text-left">
                <h3 className="font-serif text-xl font-bold text-barbershop-darkred mb-4">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-barbershop-charcoal mb-2">
                      <span className="font-medium">Service:</span> {getSelectedService()?.name}
                    </p>
                    <p className="text-barbershop-charcoal mb-2">
                      <span className="font-medium">Barber:</span> {getSelectedBarber()?.name}
                    </p>
                    <p className="text-barbershop-charcoal">
                      <span className="font-medium">Duration:</span> {getSelectedService()?.duration} minutes
                    </p>
                  </div>
                  <div>
                    <p className="text-barbershop-charcoal mb-2">
                      <span className="font-medium">Date:</span> {formData.date}
                    </p>
                    <p className="text-barbershop-charcoal mb-2">
                      <span className="font-medium">Time:</span> {formData.time}
                    </p>
                    <p className="text-barbershop-charcoal font-bold">
                      <span className="font-medium">Price:</span> ${getSelectedService()?.price}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-barbershop-charcoal mb-8">
                If you need to make any changes to your appointment, please call us at <span className="font-medium">(123) 456-7890</span>.
              </p>
              
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-barbershop-darkred text-white rounded-md font-medium"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
} 