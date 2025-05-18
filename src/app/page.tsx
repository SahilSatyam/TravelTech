import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1528184039930-bd03972bd974"
            alt="Himalayan Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover North India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience the divine journey of Char Dham, explore the majestic landscapes of Uttarakhand, and discover the hidden gems of Himachal Pradesh
          </p>
          <Link
            href="#destinations"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Let us help you plan the perfect trip to North India's most beautiful destinations
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

const destinations = [
  {
    name: "Char Dham Yatra",
    description: "Embark on a spiritual journey to the four sacred shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: "/images/chardham.jpg",
    slug: "char-dham"
  },
  {
    name: "Uttarakhand",
    description: "Discover the 'Land of Gods' with its pristine lakes, majestic mountains, and spiritual heritage.",
    image: "/images/uttrakhand.jpeg",
    slug: "uttarakhand"
  },
  {
    name: "Himachal Pradesh",
    description: "Experience the beauty of the Himalayas, from Shimla to Manali, and everything in between.",
    image: "/images/Himachal pradesh.jpg",
    slug: "himachal-pradesh"
  }
]

const features = [
  {
    icon: "🏔️",
    title: "Expert Guides",
    description: "Our experienced guides ensure a safe and enriching journey through the Himalayas."
  },
  {
    icon: "🚗",
    title: "Comfortable Travel",
    description: "Travel in comfort with our well-maintained vehicles and carefully planned itineraries."
  },
  {
    icon: "🏨",
    title: "Quality Accommodation",
    description: "Stay in carefully selected hotels and guesthouses that offer comfort and local charm."
  }
] 