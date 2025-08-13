import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Teaware Collection',
  description: 'Beautiful teaware shop page built with Next.js + Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
