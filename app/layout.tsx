import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AudioPlayerProvider } from '@/contexts/AudioPlayerContext';
import dynamic from 'next/dynamic'

const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'), { ssr: false });


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AudioPlayerProvider>
      <html lang="en" className={`${poppins.variable} antialiased`}>
        <body className="flex flex-col min-h-screen">
          <header className='h-16'>
            <NavBar />
          </header>
          <main className="grow">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
        <AudioPlayer />
      </html>
    </AudioPlayerProvider>
  )
}
