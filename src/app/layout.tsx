import { Nanum_Gothic } from 'next/font/google'
import { Header } from '@/components/layouts/header'
import { cn } from '@/lib/utils'
import './globals.css'

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'container mx-auto flex h-screen max-w-md flex-col antialiased',
          nanumGothic.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
