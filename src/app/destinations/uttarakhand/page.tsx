'use client'

import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    name: "Rishikesh",
    description: "Known as the 'Yoga Capital of the World', Rishikesh offers a perfect blend of spirituality and adventure. Famous for its yoga centers, river rafting, and the iconic Laxman Jhula.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "372 meters",
    bestTime: "February to May, September to November",
    distance: "45 km from Dehradun"
  },
  {
    name: "Mussoorie",
    description: "The 'Queen of Hills' offers breathtaking views of the Himalayas. Known for its colonial architecture, Mall Road, and the famous Gun Hill viewpoint.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "1,880 meters",
    bestTime: "March to June, September to November",
    distance: "35 km from Dehradun"
  },
  {
    name: "Nainital",
    description: "A beautiful lake city surrounded by mountains. Famous for its pear-shaped lake, Naina Devi Temple, and the scenic viewpoints like Snow View and Tiffin Top.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "2,084 meters",
    bestTime: "March to June, September to November",
    distance: "300 km from Dehradun"
  },
  {
    name: "Valley of Flowers",
    description: "A UNESCO World Heritage Site, this valley is home to hundreds of species of wild flowers. The trek offers stunning views of the surrounding peaks.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "3,658 meters",
    bestTime: "July to September",
    distance: "300 km from Dehradun"
  }
]

const tourPackages = [
  {
    name: 'Classic Uttarakhand Explorer',
    duration: '8 Days',
    description: 'Explore the best of Uttarakhand including Rishikesh, Mussoorie, Nainital, and Valley of Flowers with guided tours and comfortable stays.',
    highlights: [
      'Guided city tours',
      'River rafting in Rishikesh',
      'Nature walks in Mussoorie',
      'Boating in Nainital',
      'Trek to Valley of Flowers'
    ]
  },
  {
    name: 'Spiritual Uttarakhand Retreat',
    duration: '10 Days',
    description: 'A spiritual journey covering sacred temples, yoga sessions, and peaceful retreats in the Himalayas.',
    highlights: [
      'Yoga and meditation sessions',
      'Visit to Char Dham shrines',
      'Evening Ganga Aarti',
      'Stay in Himalayan retreats',
      'Local cultural experiences'
    ]
  },
  {
    name: 'Adventure & Wildlife Tour',
    duration: '12 Days',
    description: "Experience adventure sports and wildlife safaris in Uttarakhand's national parks and hill stations.",
    highlights: [
      'River rafting & trekking',
      'Wildlife safari in Jim Corbett',
      'Camping in the hills',
      'Paragliding in Nainital',
      'Local cuisine tasting'
    ]
  }
];

export default function UttarakhandPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/uttrakhand.jpeg"
            alt="Uttarakhand Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 w-full">
          <div className="glass-section max-w-2xl mx-auto p-10">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 luxury-text drop-shadow-lg">
              Uttarakhand
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
              Discover the land of gods, where spirituality meets adventure
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg font-semibold"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-background-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Dev Bhoomi - Land of Gods</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Uttarakhand, often called Dev Bhoomi (Land of Gods), is a state in northern India known for its
            spiritual significance, natural beauty, and adventure tourism. From the sacred Char Dham to
            thrilling river rafting, Uttarakhand offers something for every traveler.
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="glass-card h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold mb-0 mr-2 truncate max-w-[70%] luxury-text">{pkg.name}</h3>
                    <span className="bg-luxury/10 text-luxury px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap min-w-[70px] text-center mt-1 md:mt-0 border border-luxury/30">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-lg luxury-text">Highlights:</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <Link
                      href="/contact"
                      className="btn-primary text-base font-semibold"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{destination.name}</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">{destination.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Key Information:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Altitude: {destination.altitude}</li>
                        <li>Best Time to Visit: {destination.bestTime}</li>
                        <li>Distance: {destination.distance}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
              <p className="text-gray-600">March to June and September to November are ideal for most destinations. July to September is best for Valley of Flowers. Winters (Dec-Feb) are great for snow but some areas may be inaccessible.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Altitude & Health</h3>
              <p className="text-gray-600">Some destinations are at high altitude. Acclimatize gradually, stay hydrated, and avoid strenuous activity on arrival. Carry basic medicines and consult your doctor if you have health concerns.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Permits & Documents</h3>
              <p className="text-gray-600">Carry valid ID proof. Permits are required for some treks and protected areas (e.g., Valley of Flowers, Nanda Devi). Check requirements in advance.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Packing Essentials</h3>
              <p className="text-gray-600">Pack warm clothes, rain gear, sturdy shoes, sunscreen, water bottles, and snacks. Weather can change quickly in the hills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Medical Facilities</h3>
              <p className="text-gray-600">Major towns have hospitals and clinics. Remote areas may have only basic facilities. Carry personal medication and a first aid kit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Accommodation</h3>
              <p className="text-gray-600">Options range from budget guesthouses to luxury resorts. Book in advance during peak season (May-June, Sept-Oct).</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Transportation</h3>
              <p className="text-gray-600">Buses, shared taxis, and private cabs connect most destinations. Roads can be winding and affected by weather. Plan buffer time for travel.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Local Customs</h3>
              <p className="text-gray-600">Respect local traditions, especially at temples and during festivals. Dress modestly in religious places. Remove shoes before entering temples.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Cuisine */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Local Cuisine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Traditional Dishes</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Aloo Ke Gutke:</span> Spiced boiled potatoes, a Kumaoni specialty.</li>
                <li><span className="font-semibold">Kafuli:</span> Spinach and fenugreek leaves cooked with spices.</li>
                <li><span className="font-semibold">Chainsoo:</span> Black gram dal preparation from Garhwal.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Sweets & Snacks</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Bal Mithai:</span> Fudge-like sweet coated with sugar balls.</li>
                <li><span className="font-semibold">Singori:</span> Sweet made from khoya, wrapped in a leaf.</li>
                <li><span className="font-semibold">Jhangora Kheer:</span> Pudding made from millet.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Beverages</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Buransh Juice:</span> Drink made from rhododendron flowers.</li>
                <li><span className="font-semibold">Chai:</span> Indian spiced tea, a staple in the hills.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Guidelines */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Photography Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Temples & Religious Sites</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Photography is often restricted inside temples. Look for signs or ask permission.</li>
                <li>Respect privacy of devotees and avoid flash photography.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Nature & Wildlife</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Do not disturb wildlife or pluck flowers, especially in protected areas like Valley of Flowers.</li>
                <li>Follow park rules and stay on marked trails.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Local People & Culture</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ask permission before photographing locals, especially during rituals or in villages.</li>
                <li>Be sensitive to cultural norms and privacy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Treks (Detailed Cards) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Top Treks in Uttarakhand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Valley of Flowers Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Valley of Flowers</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Govindghat to Valley of Flowers</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Easy to Moderate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">38 km (round trip)</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">4-6 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">3,658 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>UNESCO World Heritage Site</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Alpine flowers & meadows</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Best in July–September</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Family-friendly</li>
                </ul>
              </div>
            </div>
            {/* Roopkund Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Roopkund</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Lohajung to Roopkund Lake</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Moderate to Difficult</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">53 km (round trip)</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">7-9 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">5,029 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Mystery lake with ancient skeletons</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Snowfields & alpine meadows</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Best in May–June, Sept–Oct</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Challenging climbs</li>
                </ul>
              </div>
            </div>
            {/* Har Ki Dun Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Har Ki Dun</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Sankri to Har Ki Dun Valley</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Easy to Moderate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">47 km (round trip)</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">6-8 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">3,566 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Ancient villages & culture</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Beautiful valley views</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Spring wildflowers</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Birdwatching</li>
                </ul>
              </div>
            </div>
            {/* Kedarkantha Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Kedarkantha</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Sankri to Kedarkantha Summit</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Easy to Moderate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">20 km (round trip)</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">4-6 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">3,800 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Popular winter trek</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Snow-capped peaks</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>360° summit views</li>
                  <li className="flex items-center text-gray-600"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Great for beginners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
              <p className="text-gray-700">
                The best time to visit Uttarakhand depends on your interests. For adventure activities and
                pleasant weather, visit between March and June. For monsoon beauty and Valley of Flowers,
                visit between July and September. For winter sports, visit between December and February.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How to Reach</h3>
              <p className="text-gray-700">
                Dehradun is the main gateway to Uttarakhand, with regular flights and trains from major
                cities. The state is well-connected by road, and you can easily reach various destinations
                through public transport or private vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 flex items-center justify-center min-h-[350px] bg-gradient-to-r from-primary/80 to-secondary/80 relative">
        <div className="absolute inset-0 bg-black/30 rounded-3xl" />
        <div className="relative z-10 glass-section max-w-2xl mx-auto p-12 text-center">
        <h2 className="section-title mb-4 text-white">Plan Your Uttarakhand Adventure</h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you explore the divine beauty of Uttarakhand
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 