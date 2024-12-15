'use client'

import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={cn(
      "min-h-screen grid grid-cols-1 md:grid-cols-2",
      inter.className
    )}>
      <motion.div 
        className="relative flex items-center justify-center bg-background"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-[350px] p-8">
          {children}
        </div>
      </motion.div>
      <motion.div 
        className="hidden md:block relative bg-gradient-to-br from-primary to-primary/60"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
        <div className="relative h-full p-8 flex items-center">
          <div className="space-y-4 w-full max-w-[400px] mx-auto">
            <motion.div 
              className="p-4 backdrop-blur-sm bg-white/10 rounded-lg border border-white/10 group cursor-pointer hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/10 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">Fast and Secure</h3>
                  <p className="text-sm text-white/80">Your files are encrypted and stored securely.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 backdrop-blur-sm bg-white/10 rounded-lg border border-white/10 group cursor-pointer hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/10 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">Real-time Sync</h3>
                  <p className="text-sm text-white/80">Access your files from any device, anytime.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 backdrop-blur-sm bg-white/10 rounded-lg border border-white/10 group cursor-pointer hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/10 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">Easy Sharing</h3>
                  <p className="text-sm text-white/80">Share files and folders with anyone, anywhere.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

