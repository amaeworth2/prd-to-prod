import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FIFA Traffic Navigator',
  description: 'Navigate FIFA events with real-time traffic and transit information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
