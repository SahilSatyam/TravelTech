'use client'

import Image from 'next/image'
import Link from 'next/link'

const temples = [
  {
    name: 'Yamunotri',
    description: 'The source of the Yamuna River and the westernmost shrine in the Char Dham circuit.',
    image: 'https://images.unsplash.com/photo-1582487186951-1c1c1c1c1c1c?auto=format&fit=crop&w=800&q=80',
    altitude: '3,293 meters',
    bestTime: 'May to June, September to October',
    distance: '236 km'
  },
  {
    name: 'Gangotri',
    description: 'The origin of the sacred Ganges River, known as Bhagirathi at its source.',
    image: 'https://images.unsplash.com/photo-1582487186951-1c1c1c1c1c1c?auto=format&fit=crop&w=800&q=80',
    altitude: '3,100 meters',
    bestTime: 'May to June, September to October',
    distance: '300 km'
  },
  {
    name: 'Kedarnath',
    description: 'One of the holiest Hindu temples dedicated to Lord Shiva, located in the Garhwal Himalayas.',
    image: 'https://images.unsplash.com/photo-1582487186951-1c1c1c1c1c1c?auto=format&fit=crop&w=800&q=80',
    altitude: '3,583 meters',
    bestTime: 'May to June, September to October',
    distance: '223 km'
  },
  {
    name: 'Badrinath',
    description: 'The most important of the four shrines, dedicated to Lord Vishnu.',
    image: 'https://images.unsplash.com/photo-1582487186951-1c1c1c1c1c1c?auto=format&fit=crop&w=800&q=80',
    altitude: '3,300 meters',
    bestTime: 'May to June, September to October',
    distance: '298 km'
  }
]

const tourPackages = [
  {
    name: 'Classic Char Dham Yatra',
    duration: '11 Days',
    description: 'Complete pilgrimage covering all four sacred shrines with comfortable accommodations and expert guidance.',
    highlights: [
      'Visit all four sacred shrines',
      'Comfortable accommodations',
      'Expert local guides',
      'Daily prayers and rituals',
      'Traditional welcome ceremony'
    ]
  },
  {
    name: 'Spiritual Retreat Package',
    duration: '14 Days',
    description: 'Extended journey with meditation sessions, spiritual discourses, and cultural experiences.',
    highlights: [
      'Daily meditation sessions',
      'Spiritual discourses',
      'Cultural performances',
      'Traditional rituals',
      'Local village visits'
    ]
  },
  {
    name: 'Adventure Pilgrimage',
    duration: '15 Days',
    description: 'Combine spiritual journey with adventure activities like trekking and nature walks.',
    highlights: [
      'Guided treks to temples',
      'Nature walks',
      'Photography sessions',
      'Local cuisine experiences',
      'Camping under stars'
    ]
  }
]

const travelTips = [
  {
    title: 'Best Time to Visit',
    content: 'The Char Dham shrines are open from April/May to October/November. The best months are May-June and September-October when the weather is pleasant and the routes are clear.'
  },
  {
    title: 'Physical Preparation',
    content: 'Start physical preparation at least 2-3 months before the journey. Regular walking and light exercises will help you cope with the high altitudes and long treks.'
  },
  {
    title: 'Required Documents',
    content: 'Carry valid ID proof, medical certificates, and necessary permits. Registration is mandatory for the yatra.'
  },
  {
    title: 'What to Pack',
    content: 'Warm clothes, rain gear, comfortable walking shoes, first aid kit, water bottles, and energy snacks are essential.'
  }
]

const importantInfo = [
  {
    title: 'Medical Facilities',
    content: 'Basic medical facilities are available at each shrine. Carry necessary medications and consult your doctor before the journey.'
  },
  {
    title: 'Accommodation',
    content: 'Various accommodation options are available ranging from basic guest houses to comfortable hotels. Advance booking is recommended.'
  },
  {
    title: 'Transportation',
    content: 'Helicopter services are available for Kedarnath and Badrinath. Regular bus services and shared taxis operate between major points.'
  },
  {
    title: 'Local Customs',
    content: 'Respect local customs and traditions. Photography is restricted in certain areas. Maintain silence in temple premises.'
  }
]

const templeRituals = [
  {
    temple: 'Yamunotri',
    rituals: [
      {
        name: 'Yamuna Aarti',
        description: 'Evening prayer ceremony performed at the temple, where devotees offer prayers to Goddess Yamuna.',
        timing: '6:00 PM daily'
      },
      {
        name: 'Divya Shila Puja',
        description: 'Worship of the sacred rock near the temple, believed to be the original seat of Goddess Yamuna.',
        timing: 'Morning hours'
      },
      {
        name: 'Surya Kund Snan',
        description: 'Holy dip in the hot water spring before entering the temple premises.',
        timing: 'Before temple darshan'
      }
    ]
  },
  {
    temple: 'Gangotri',
    rituals: [
      {
        name: 'Ganga Aarti',
        description: 'Evening prayer ceremony where devotees offer prayers to the holy Ganges River.',
        timing: '6:30 PM daily'
      },
      {
        name: 'Bhagirath Shila Puja',
        description: 'Worship of the sacred rock where King Bhagirath meditated to bring Ganga to Earth.',
        timing: 'Morning hours'
      },
      {
        name: 'Ganga Snan',
        description: 'Holy dip in the Ganges River before temple darshan.',
        timing: 'Before temple darshan'
      }
    ]
  },
  {
    temple: 'Kedarnath',
    rituals: [
      {
        name: 'Rudrabhishek',
        description: 'Special puja performed to Lord Shiva with sacred items and mantras.',
        timing: 'Morning hours'
      },
      {
        name: 'Shiv Aarti',
        description: 'Evening prayer ceremony dedicated to Lord Shiva.',
        timing: '7:00 PM daily'
      },
      {
        name: 'Panchamrit Abhishek',
        description: 'Bathing of the Shiva Linga with five sacred items.',
        timing: 'Morning hours'
      }
    ]
  },
  {
    temple: 'Badrinath',
    rituals: [
      {
        name: 'Badri Aarti',
        description: 'Evening prayer ceremony performed to Lord Badrinath.',
        timing: '6:00 PM daily'
      },
      {
        name: 'Tapt Kund Snan',
        description: 'Holy dip in the natural hot water spring before temple darshan.',
        timing: 'Before temple darshan'
      },
      {
        name: 'Vishnu Sahasranama',
        description: 'Recitation of the thousand names of Lord Vishnu.',
        timing: 'Morning hours'
      }
    ]
  }
]

const localCuisine = [
  {
    category: 'Traditional Dishes',
    items: [
      {
        name: 'Kumaoni Raita',
        description: 'Local yogurt preparation with cucumber and spices'
      },
      {
        name: 'Chainsoo',
        description: 'Black gram dal preparation, a specialty of Garhwal'
      },
      {
        name: 'Phaanu',
        description: 'Lentil preparation made with different types of pulses'
      }
    ]
  },
  {
    category: 'Street Food',
    items: [
      {
        name: 'Aloo Puri',
        description: 'Deep-fried bread served with spiced potato curry'
      },
      {
        name: 'Kachori',
        description: 'Crispy fried bread stuffed with spiced lentils'
      },
      {
        name: 'Jalebi',
        description: 'Sweet, crispy dessert made with flour and sugar syrup'
      }
    ]
  },
  {
    category: 'Beverages',
    items: [
      {
        name: 'Buransh Juice',
        description: 'Refreshing drink made from rhododendron flowers'
      },
      {
        name: 'Chai',
        description: 'Traditional Indian spiced tea'
      },
      {
        name: 'Lassi',
        description: 'Sweet or salty yogurt-based drink'
      }
    ]
  }
]

const photographyGuidelines = [
  {
    temple: 'Yamunotri',
    restrictions: [
      'No photography inside the main temple',
      'Allowed in temple premises and surrounding areas',
      'Respect privacy of other devotees',
      'No flash photography'
    ]
  },
  {
    temple: 'Gangotri',
    restrictions: [
      'No photography inside the main temple',
      'Allowed in temple premises and surrounding areas',
      'Respect privacy of other devotees',
      'No flash photography'
    ]
  },
  {
    temple: 'Kedarnath',
    restrictions: [
      'No photography inside the main temple',
      'Allowed in temple premises and surrounding areas',
      'Respect privacy of other devotees',
      'No flash photography'
    ]
  },
  {
    temple: 'Badrinath',
    restrictions: [
      'No photography inside the main temple',
      'Allowed in temple premises and surrounding areas',
      'Respect privacy of other devotees',
      'No flash photography'
    ]
  }
]

const trekkingRoutes = [
  {
    temple: 'Yamunotri',
    routes: [
      {
        name: 'Hanuman Chatti to Yamunotri',
        distance: '6 km',
        duration: '3-4 hours',
        difficulty: 'Moderate',
        elevation: '3,293 meters',
        features: [
          'Well-marked trail',
          'Steep ascents',
          'Beautiful valley views',
          'Rest stops available'
        ]
      }
    ]
  },
  {
    temple: 'Gangotri',
    routes: [
      {
        name: 'Gangotri to Gaumukh',
        distance: '18 km',
        duration: '6-7 hours',
        difficulty: 'Moderate to Difficult',
        elevation: '3,892 meters',
        features: [
          'Glacial terrain',
          'River crossings',
          'High altitude',
          'Basic accommodation available'
        ]
      }
    ]
  },
  {
    temple: 'Kedarnath',
    routes: [
      {
        name: 'Gaurikund to Kedarnath',
        distance: '16 km',
        duration: '6-8 hours',
        difficulty: 'Difficult',
        elevation: '3,583 meters',
        features: [
          'Steep ascents',
          'High altitude',
          'Weather dependent',
          'Pony and palanquin services available'
        ]
      }
    ]
  },
  {
    temple: 'Badrinath',
    routes: [
      {
        name: 'Mana Village to Vasudhara Falls',
        distance: '5 km',
        duration: '2-3 hours',
        difficulty: 'Easy to Moderate',
        elevation: '3,300 meters',
        features: [
          'Scenic views',
          'Waterfall',
          'Last village of India',
          'Suitable for beginners'
        ]
      }
    ]
  }
]

export default function CharDhamPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/chardham.jpg"
            alt="Char Dham Yatra"
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 w-full">
          <div className="glass-section max-w-2xl mx-auto p-10">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 luxury-text drop-shadow-lg">
              Char Dham Yatra
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light text-white">
              Embark on a spiritual journey to the four sacred shrines of Uttarakhand
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
          <h2 className="section-title text-primary">The Sacred Journey</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism, taking devotees to four holy shrines nestled in the Garhwal Himalayas. This spiritual journey not only offers divine blessings but also showcases the breathtaking beauty of the Himalayan landscape.
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

      {/* Temples Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">The Four Sacred Shrines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {temples.map((temple, index) => (
              <div key={index} className="glass-card">
                <div className="relative h-48">
                  <Image
                    src={temple.image}
                    alt={temple.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{temple.name}</h3>
                  <p className="text-gray-700 mb-4">{temple.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Altitude: {temple.altitude}</p>
                    <p>Best Time: {temple.bestTime}</p>
                    <p>Distance from Dehradun: {temple.distance}</p>
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
          <h2 className="section-title">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelTips.map((tip, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{tip.title}</h3>
                <p className="text-gray-700">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {importantInfo.map((info, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{info.title}</h3>
                <p className="text-gray-700">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Rituals */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Temple Rituals & Ceremonies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templeRituals.map((temple, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">{temple.temple}</h3>
                <div className="space-y-6">
                  {temple.rituals.map((ritual, idx) => (
                    <div key={idx} className="border-b border-primary/10 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary">{ritual.name}</h4>
                        <span className="text-sm text-primary/70">{ritual.timing}</span>
                      </div>
                      <p className="text-gray-700">{ritual.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Cuisine */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Local Cuisine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localCuisine.map((category, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="border-b border-primary/10 pb-4 last:border-0">
                      <h4 className="font-semibold mb-1 text-primary">{item.name}</h4>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Guidelines */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Photography Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photographyGuidelines.map((temple, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{temple.temple}</h3>
                <ul className="space-y-2">
                  {temple.restrictions.map((restriction, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <svg className="feature-icon mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {restriction}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Routes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Trekking Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trekkingRoutes.map((temple, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">{temple.temple}</h3>
                {temple.routes.map((route, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-primary">{route.name}</h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/30">
                        {route.difficulty}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Distance</p>
                        <p className="font-medium">{route.distance}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{route.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Elevation</p>
                        <p className="font-medium">{route.elevation}</p>
                      </div>
                    </div>
                    <h5 className="font-semibold mb-2 text-primary">Features:</h5>
                    <ul className="space-y-2">
                      {route.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center text-gray-700">
                          <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 flex items-center justify-center min-h-[350px] bg-gradient-to-r from-primary/80 to-secondary/80 relative">
        <div className="absolute inset-0 bg-black/30 rounded-3xl" />
        <div className="relative z-10 glass-section max-w-2xl mx-auto p-12 text-center">
          <h2 className="section-title mb-4 text-white">Start Your Spiritual Journey</h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you plan your perfect Char Dham Yatra with our expert guidance and comfortable arrangements.
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