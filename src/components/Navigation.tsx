import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              TravelTech
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#destinations" className="text-gray-600 hover:text-primary">
              Destinations
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary">
              About Us
            </Link>
            <Link href="#packages" className="text-gray-600 hover:text-primary">
              Tour Packages
            </Link>
            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 