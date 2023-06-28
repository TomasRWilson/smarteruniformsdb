import './globals.css'
import NavBar from "../components/NavBar/NavBar";

export const metadata = {
  title: 'SU StockTake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="min-h-screen bg-neutral-900 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
