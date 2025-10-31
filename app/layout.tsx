import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pink Perfection Nails and Beauty | massage in yarrabilba | 64 Grampians Circuit, Yarrabilba Queensland, Australia",
  description:
    "Pink Perfection Nails And Beauty, is your go-to destination for a truly indulgent and relaxing beauty experience. Our tranquil home salon offers a wide range of services, from indulgent massages & serene spa treatments, to luxurious nail services, waxing, spray tanning, lash lifts, and tinting. Whatever your beauty needs, we have you covered!",
  generator: "Wix.com Website Builder",
  alternates: {
    canonical: "https://www.pinkperfectionnailsandbeauty.com/",
  },
  openGraph: {
    siteName: "Pink Perfection Nail",
    title: "Pink Perfection Nails and Beauty | massage in yarrabilba | 64 Grampians Circuit, Yarrabilba Queensland, Australia",
    description:
      "Pink Perfection Nails And Beauty, is your go-to destination for a truly indulgent and relaxing beauty experience. Our tranquil home salon offers a wide range of services, from indulgent massages & serene spa treatments, to luxurious nail services, waxing, spray tanning, lash lifts, and tinting. Whatever your beauty needs, we have you covered!",
    type: "website",
    url: "https://www.pinkperfectionnailsandbeauty.com",
    locale: "en_AU",
    images: [
      {
        url: "https://static.wixstatic.com/media/06018d_3e39d29064234d91ae83f133d110ad6f%7Emv2.png/v1/fit/w_2500,h_1330,al_c/06018d_3e39d29064234d91ae83f133d110ad6f%7Emv2.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Perfection Nails and Beauty | massage in yarrabilba",
    description:
      "Pink Perfection Nails And Beauty, is your go-to destination for a truly indulgent and relaxing beauty experience. Our tranquil home salon offers a wide range of services, from indulgent massages & serene spa treatments, to luxurious nail services, waxing, spray tanning, lash lifts, and tinting. Whatever your beauty needs, we have you covered!",
  },
  other: {
    "google-site-verification": "KKiL5Hzi0JDFLo4KiMf0EgI1jSSRp_2Wr6AIG_CuxV4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  )
}
