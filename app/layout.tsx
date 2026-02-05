import type { Metadata, Viewport } from "next"
import { Inter, Calistoga } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calistoga",
})

export const metadata: Metadata = {
  title: "Sarah Johnson | Web Developer & Designer",
  description:
    "I create beautiful, functional websites that help businesses grow. Web developer and designer portfolio.",
}

export const viewport: Viewport = {
  themeColor: "#2a9d8f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
