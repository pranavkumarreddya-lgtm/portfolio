import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pranav Reddy | Creative Technologist',
  description: 'Full Stack Engineer & UI/UX Designer crafting immersive digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
