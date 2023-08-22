import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Creating my first portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}
      
      </body>
    </html>
  )
}
