import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ButtonAppBar from "@/components/navbar/BasicNavbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <title>sales api</title>
        </head>
          <body className={inter.className}>
              <ButtonAppBar />
                {children}
              {/*<StickyFooter />*/}
          </body>
    </html>
  )
}
