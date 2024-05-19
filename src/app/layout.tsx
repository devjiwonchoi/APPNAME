import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto flex h-screen max-w-md flex-col antialiased">
        {children}
      </body>
    </html>
  )
}
