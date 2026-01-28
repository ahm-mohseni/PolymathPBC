import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Polymath PBC | Healthcare AI Research Lab',
  description: 'Advancing healthcare through AI research. 38 domain-specific reasoning engines built for clinical decision-making.',
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
