import type { Metadata } from 'next'
import { Inter, Advent_Pro } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const adventPro = Advent_Pro({ 
  subsets: ['latin'],
  variable: '--font-advent-pro',
})

export const metadata: Metadata = {
  title: 'Mintscaling - Digital Marketing Excellence',
  description: 'Expert social media ad campaigns, optimizing exposure & results, tracking sales & leads, and effective digital ad design.',
  keywords: 'digital marketing, social media ads, lead generation, ad design, marketing campaigns',
  authors: [{ name: 'Kian Arnold' }],
  openGraph: {
    title: 'Mintscaling - Digital Marketing Excellence',
    description: 'Expert social media ad campaigns, optimizing exposure & results, tracking sales & leads, and effective digital ad design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${adventPro.variable}`}>{children}</body>
    </html>
  )
} 