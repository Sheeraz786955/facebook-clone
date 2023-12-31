import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './components/Head'

const inter = Inter({ subsets: ['latin'] })

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
    <html className='bg-gray-200' lang="en">
      <Head/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
