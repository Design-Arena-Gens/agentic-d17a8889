import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your videos are processing ? explore the app',
  description: 'We\'ll email you when your videos are ready. In the meantime, explore features and content.',
  metadataBase: new URL('https://agentic-d17a8889.vercel.app'),
  openGraph: {
    title: 'Your videos are processing ? explore the app',
    description: 'We\'ll email you when your videos are ready ? feel free to explore!',
    url: 'https://agentic-d17a8889.vercel.app',
    siteName: 'Agentic Video Processing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your videos are processing ? explore the app',
    description: 'We\'ll email you when your videos are ready ? feel free to explore!',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-gradient-to-b from-brand-50 to-white">
        <div className="container-responsive py-6">
          <header className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-semibold text-brand-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4 5h16v14H4z" opacity=".2"/>
                <path d="M21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H4V5h16v14Z"/>
                <path d="M10.5 9.5 16 12l-5.5 2.5V9.5Z"/>
              </svg>
              <span>Agentic</span>
            </a>
            <nav className="flex items-center gap-4 text-sm">
              <a href="/explore" className="text-gray-600 hover:text-brand-700">Explore</a>
              <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-700">Docs</a>
            </nav>
          </header>
          <main className="py-10">{children}</main>
          <footer className="py-10 text-center text-sm text-gray-500">? {new Date().getFullYear()} Agentic</footer>
        </div>
      </body>
    </html>
  )
}
