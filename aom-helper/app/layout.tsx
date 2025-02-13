import Link from "next/link"
import "./globals.css"
import type React from "react"

export const metadata = {
  title: "Age of Mythology Guide",
  description: "Your guide to Age of Mythology heroes and units",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-secondary text-primary p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/heroes" className="hover:text-white transition-colors">
                Heroes
              </Link>
            </li>
            <li>
              <Link href="/units" className="hover:text-white transition-colors">
                Units
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  )
}

