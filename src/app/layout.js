import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cutting-Stock-Problem',
  description: 'Solveeee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </html>
  )
}
