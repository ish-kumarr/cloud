import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cloud-ish',
  description: 'Your personal cloud storage solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
      </body>
    </html>
  )
}

