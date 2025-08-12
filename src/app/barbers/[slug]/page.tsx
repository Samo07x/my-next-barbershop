import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronRight, Star } from "lucide-react";
import type { Metadata } from "next";

type Barber = {
  id: string;
  name: string;
  title: string;
  bio: string[];
  specialties: string[];
  image: string;
};

const BARBERS: Barber[] = [
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Master Barber",
    image: "/images/james-wilson.jpg",
    bio: [
      "With over 15 years of experience, James specializes in classic cuts and precision fades.",
      "His attention to detail and commitment to perfection make him a favorite among our regular clients.",
    ],
    specialties: [
      "Classic Gentleman's Cuts",
      "Precision Fades",
      "Hot Towel Shaves",
      "Beard Styling",
    ],
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    title: "Style Specialist",
    image: "/images/michael-rodriguez.jpg",
    bio: [
      "Michael brings contemporary styling techniques with a focus on modern trends and beard sculpting.",
      "His creative approach and eye for detail help clients achieve their unique style.",
    ],
    specialties: ["Modern Styles", "Beard Sculpting", "Textured Crops", "Hair Design"],
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    title: "Senior Barber",
    image: "/images/david-thompson.jpg",
    bio: [
      "David excels in traditional hot towel shaves and classic gentleman's grooming techniques.",
      "His old-school approach combined with modern knowledge creates an exceptional experience.",
    ],
    specialties: ["Traditional Hot Shaves", "Classic Pompadours", "Executive Cuts", "Facial Hair Grooming"],
  },
  {
    id: "robert-johnson",
    name: "Robert Johnson",
    title: "Color Specialist",
    image: "/images/robert-johnson.jpg",
    bio: [
      "Robert specializes in men's hair and beard coloring with a natural-looking finish.",
      "His expertise in color theory ensures clients receive the most flattering results.",
    ],
    specialties: ["Hair Coloring", "Beard Coloring", "Gray Blending", "Modern Cuts"],
  },
  {
    id: "thomas-garcia",
    name: "Thomas Garcia",
    title: "Texture Specialist",
    image: "/images/thomas-garcia.jpg",
    bio: [
      "Thomas excels in working with all hair textures and specializes in creating styles that enhance natural texture.",
      "He creates looks that are sharp in the chair and easy to maintain at home.",
    ],
    specialties: ["Curly Hair Cuts", "Textured Styles", "Taper Fades", "Line-ups & Designs"],
  },
  {
    id: "william-chen",
    name: "William Chen",
    title: "Apprentice Barber",
    image: "/images/william-chen.jpg",
    bio: [
      "Our newest team member, William brings fresh perspective and modern techniques.",
      "Under the mentorship of our senior barbers, he delivers excellent service at a special apprentice rate.",
    ],
    specialties: ["Modern Cuts", "Skin Fades", "Beard Trims", "Contemporary Styling"],
  },
];

export async function generateStaticParams() {
  return BARBERS.map((b) => ({ slug: b.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const barber = BARBERS.find((b) => b.id === slug);
  if (!barber) return {};
  return {
    title: `${barber.name} | Barber Profile | Gentleman's Cut Barbershop`,
    description: `Learn more about ${barber.name}, ${barber.title} at Gentleman's Cut Barbershop.`,
  };
}

export default async function BarberProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const barber = BARBERS.find((b) => b.id === slug);
  if (!barber) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-barbershop-navyblue text-white">
        <div className="barbershop-container py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-barbershop-gold">{barber.name}</h1>
          <p className="text-barbershop-cream text-lg">{barber.title}</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12">
        <div className="barbershop-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="relative w-full h-96 rounded-md overflow-hidden shadow-md lg:col-span-1">
              <Image src={barber.image} alt={barber.name} fill className="object-cover" />
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center mb-4 text-barbershop-gold">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              {barber.bio.map((p, i) => (
                <p key={i} className="text-barbershop-charcoal mb-4">
                  {p}
                </p>
              ))}

              <div className="mt-6">
                <h2 className="font-serif text-2xl font-bold text-barbershop-darkred mb-3">Specialties</h2>
                <ul className="list-disc pl-6 text-barbershop-charcoal space-y-1">
                  {barber.specialties.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/booking?barber=${barber.id}`}
                  className="inline-flex items-center bg-barbershop-darkred text-white px-6 py-3 rounded-md font-medium hover:bg-barbershop-darkred/90 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Book with {barber.name.split(" ")[0]}
                </Link>
                <Link
                  href="/barbers"
                  className="inline-flex items-center text-barbershop-darkred hover:text-barbershop-darkred/80 font-medium"
                >
                  Back to all barbers <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
