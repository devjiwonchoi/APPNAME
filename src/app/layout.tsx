import { Nanum_Gothic } from 'next/font/google'
import { Header } from '@/components/layouts/header'
import { cn } from '@/lib/utils'
import './globals.css'
import { BottomNav } from '@/components/layouts/bottom-nav'

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
          'container flex max-w-md flex-col px-[24px] font-sans antialiased',
          nanumGothic.variable
        )}
      >
        <Header />
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
