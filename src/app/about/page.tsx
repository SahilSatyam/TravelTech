'use client'

import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description: "With over 15 years of experience in the travel industry, Rajesh has been instrumental in creating unique travel experiences across North India.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Priya Sharma",
    role: "Travel Expert",
    description: "A certified mountaineer and travel guide, Priya specializes in curating adventure tours and spiritual journeys.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Amit Singh",
    role: "Operations Manager",
    description: "With expertise in logistics and customer service, Amit ensures smooth operations for all our tours and packages.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Your trusted partner in exploring the divine beauty of North India
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 mb-6">
              Founded in 2010, TravelTech has been at the forefront of creating memorable travel experiences
              across North India. We specialize in spiritual journeys, adventure tours, and cultural
              experiences that showcase the rich heritage and natural beauty of the region.
            </p>
            <p className="text-gray-700 mb-6">
              Our journey began with a simple mission: to make travel accessible, enjoyable, and meaningful
              for everyone. Over the years, we've helped thousands of travelers explore the sacred Char Dham,
              experience the thrill of adventure sports in Uttarakhand, and discover the hidden gems of
              Himachal Pradesh.
            </p>
            <p className="text-gray-700">
              What sets us apart is our deep understanding of the region, our commitment to sustainable
              tourism, and our dedication to providing personalized experiences that go beyond the
              ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-700">We maintain the highest standards in all our services and experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-700">We value your time and ensure punctuality in all our services.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-700">Your satisfaction is our priority, and we go the extra mile to exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Let us help you create unforgettable memories in North India
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 