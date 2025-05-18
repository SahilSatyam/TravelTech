import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'TravelTech - North India Tours & Travel',
  description: 'Discover the divine beauty of North India with our curated tours and travel experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body bg-background-light">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 