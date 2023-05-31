import '@styles/globals.css';
import { Poppins } from 'next/font/google';
import Nav from '@components/Nav';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Viztopia',
  description: 'Create and share your Fair Use Visualizers'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
