'use client'

import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    name: "Shimla",
    description: "The capital city of Himachal Pradesh, known for its colonial architecture, Mall Road, and the famous Ridge. A perfect blend of natural beauty and urban amenities.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "2,276 meters",
    bestTime: "March to June, September to November",
    distance: "350 km from Delhi"
  },
  {
    name: "Manali",
    description: "A popular hill station known for adventure sports, ancient temples, and the scenic Rohtang Pass. Perfect for both adventure enthusiasts and nature lovers.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "2,050 meters",
    bestTime: "October to June",
    distance: "530 km from Delhi"
  },
  {
    name: "Dharamshala",
    description: "Home to the Dalai Lama and the Tibetan government-in-exile. Known for its Buddhist monasteries, scenic beauty, and the famous McLeod Ganj.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "1,457 meters",
    bestTime: "March to June, September to November",
    distance: "520 km from Delhi"
  },
  {
    name: "Spiti Valley",
    description: "A cold desert mountain valley known for its stark landscapes, ancient monasteries, and unique culture. Often called 'Little Tibet' for its resemblance to Tibet.",
    image: "https://images.unsplash.com/photo-1582483640389-d5f47a931b66?auto=format&fit=crop&w=800&q=80",
    altitude: "3,810 meters",
    bestTime: "May to October",
    distance: "730 km from Delhi"
  }
]

const tourPackages = [
  {
    name: 'Himachal Highlights',
    duration: '9 Days',
    description: 'Discover Shimla, Manali, Dharamshala, and Spiti Valley with expert guides and scenic stays.',
    highlights: [
      'Guided sightseeing tours',
      'Visit to monasteries',
      'Nature walks in Spiti',
      'Adventure sports in Manali',
      'Cultural evenings'
    ]
  },
  {
    name: 'Spiritual & Wellness Retreat',
    duration: '11 Days',
    description: 'A rejuvenating journey with yoga, meditation, and visits to spiritual sites across Himachal Pradesh.',
    highlights: [
      'Yoga and meditation sessions',
      'Visit to ancient temples',
      'Stay in wellness resorts',
      'Tibetan cultural experiences',
      'Scenic mountain walks'
    ]
  },
  {
    name: 'Adventure Expedition',
    duration: '14 Days',
    description: 'Thrilling adventure activities including trekking, paragliding, and camping in the Himalayas.',
    highlights: [
      'Trekking in Spiti and Manali',
      'Paragliding in Bir Billing',
      'Camping under the stars',
      'River rafting',
      'Mountain biking'
    ]
  }
];

export default function HimachalPradeshPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Himachal pradesh.jpg"
            alt="Himachal Pradesh Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 w-full">
          <div className="glass-section max-w-2xl mx-auto p-10">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Himachal Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light text-white">
              Experience the magic of the Himalayas in the land of eternal snow
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
          <h2 className="section-title text-primary">Dev Bhoomi - Land of Gods</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Himachal Pradesh, nestled in the western Himalayas, is a paradise for nature lovers and adventure
            seekers. From snow-capped mountains to ancient temples, from apple orchards to adventure sports,
            this state offers an unforgettable experience for every traveler.
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-primary">Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="glass-card h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold mb-0 mr-2 truncate max-w-[70%] text-primary">{pkg.name}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap min-w-[70px] text-center mt-1 md:mt-0 border border-primary/30">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-lg text-primary">Highlights:</h4>
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
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{destination.name}</h3>
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
              <h3 className="text-xl font-bold mb-4 text-primary">Best Time to Visit</h3>
              <p className="text-gray-700">March to June for pleasant weather, July to September for monsoon beauty, December to February for snow. Some high passes (e.g., Rohtang, Kunzum) are closed in winter.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Altitude & Health</h3>
              <p className="text-gray-700">Many destinations are at high altitude. Acclimatize gradually, stay hydrated, and avoid strenuous activity on arrival. Carry medicines for motion sickness if needed.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Road Conditions</h3>
              <p className="text-gray-700">Mountain roads can be narrow, winding, and affected by landslides, especially in monsoon. Check road status before travel and allow buffer time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Packing Essentials</h3>
              <p className="text-gray-700">Pack warm clothes, rain gear, sturdy shoes, sunscreen, sunglasses, and a first aid kit. Weather can change rapidly in the mountains.</p>
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
              <h3 className="text-xl font-bold mb-4 text-primary">Medical Facilities</h3>
              <p className="text-gray-700">Hospitals and clinics are available in major towns. Remote areas may have only basic facilities. Carry personal medication and a first aid kit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Accommodation</h3>
              <p className="text-gray-700">Options range from homestays and guesthouses to luxury resorts. Book in advance during peak season (May-June, Sept-Oct).</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Transportation</h3>
              <p className="text-gray-700">Buses, shared taxis, and private cabs connect most destinations. Some remote valleys may require 4x4 vehicles.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Local Customs</h3>
              <p className="text-gray-700">Respect local traditions, especially at temples, monasteries, and during festivals. Dress modestly and remove shoes before entering religious places.</p>
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
              <h3 className="text-xl font-bold mb-6 text-primary">Traditional Dishes</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Dham:</span> Festive meal with rice, dal, curd, and local delicacies, served on special occasions.</li>
                <li><span className="font-semibold">Sidu:</span> Steamed wheat bread, often eaten with ghee or dal.</li>
                <li><span className="font-semibold">Chha Gosht:</span> Spicy lamb curry cooked in yogurt gravy.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Snacks & Sweets</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Babru:</span> Stuffed wheat bread, similar to kachori.</li>
                <li><span className="font-semibold">Mittha:</span> Sweet rice with raisins and dry fruits.</li>
                <li><span className="font-semibold">Aktori:</span> Pancake made from buckwheat flour.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Beverages</h3>
              <ul className="space-y-4">
                <li><span className="font-semibold">Chhaang:</span> Traditional barley-based alcoholic drink.</li>
                <li><span className="font-semibold">Kullu Tea:</span> Local tea with unique flavor.</li>
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
              <h3 className="text-xl font-bold mb-4 text-primary">Temples & Monasteries</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Photography is often restricted inside temples and monasteries. Look for signs or ask permission.</li>
                <li>Respect privacy of monks, devotees, and avoid flash photography.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Nature & Wildlife</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Do not disturb wildlife or damage flora, especially in national parks and sanctuaries.</li>
                <li>Follow park rules and stay on marked trails.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Local People & Culture</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12">Top Treks in Himachal Pradesh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hampta Pass Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">Hampta Pass</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Jobra to Chatru</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Moderate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">26 km</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">5-6 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">4,270 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Valley crossing</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>River crossings</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Dramatic landscape change</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Wildflowers</li>
                </ul>
              </div>
            </div>
            {/* Triund Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">Triund</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">McLeod Ganj to Triund</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Easy</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">9 km</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">4-6 hours</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">2,850 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Short and scenic</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Panoramic views</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Camping</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Suitable for beginners</li>
                </ul>
              </div>
            </div>
            {/* Bhrigu Lake Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">Bhrigu Lake</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Gulaba to Bhrigu Lake</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Moderate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">22 km</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">3-4 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">4,300 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Alpine meadows</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Wildflowers</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Sacred lake</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Mountain views</li>
                </ul>
              </div>
            </div>
            {/* Pin Parvati Pass Trek */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">Pin Parvati Pass</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Barshaini to Mudh Village</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Difficult</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Distance</p>
                  <p className="font-medium">110 km</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">9-12 days</p>
                </div>
                <div>
                  <p className="text-gray-500">Elevation</p>
                  <p className="font-medium">5,319 meters</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>High-altitude pass</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Glaciers</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Hot springs</li>
                  <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Remote landscapes</li>
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
                The best time to visit Himachal Pradesh varies by region. For most destinations, March to June
                offers pleasant weather. For snow activities, visit between December and February. For
                monsoon beauty, visit between July and September, but be prepared for occasional landslides.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">How to Reach</h3>
              <p className="text-gray-700">
                Himachal Pradesh is well-connected by road, rail, and air. Chandigarh and Delhi are the main
                gateways. The state has airports in Shimla, Kullu, and Dharamshala. Regular bus services and
                private taxis are available from major cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 flex items-center justify-center min-h-[350px] bg-gradient-to-r from-primary/80 to-secondary/80 relative">
        <div className="absolute inset-0 bg-black/30 rounded-3xl" />
        <div className="relative z-10 glass-section max-w-2xl mx-auto p-12 text-center">
          <h2 className="section-title mb-4 text-white">Plan Your Himachal Adventure</h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you explore the magical landscapes of Himachal Pradesh
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