import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight, Folder, Share2, Lock, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] bg-dot-pattern">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32">
          {/* Floating Elements */}
          <div className="absolute left-10 top-20 -rotate-6">
            <div className="bg-yellow-100 p-4 rounded shadow-lg max-w-[200px]">
              <p className="text-sm text-gray-700">
                Store files securely, access them instantly, and share with ease
              </p>
            </div>
          </div>
          
          <div className="absolute right-10 top-20 rotate-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <p className="text-sm font-medium">Recent Files</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500" />
                </div>
                <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mt-24">
            <h1 className="text-6xl font-medium tracking-tight">
              Store, access, share
              <br />
              <span className="text-gray-400">all in one place</span>
            </h1>
            <p className="mt-6 text-gray-600">
              Your personal cloud storage solution for seamless file management.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="h-12 px-8 text-lg bg-blue-500 hover:bg-blue-600"
              >
                Get started
              </Button>
            </div>
          </div>

          {/* Bottom Floating Elements */}
          <div className="absolute left-20 bottom-20">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="font-medium mb-2">Storage Usage</p>
              <div className="flex items-center gap-4">
                <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-500" />
                </div>
                <span className="text-sm text-gray-600">75%</span>
              </div>
            </div>
          </div>

          <div className="absolute right-20 bottom-20">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="font-medium mb-2">Quick Access</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <Folder className="w-4 h-4 text-blue-500" />
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <Lock className="w-4 h-4 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-3xl font-medium text-center mb-12">Your personal file assistant</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Folder, title: "Organize Effortlessly", description: "Create folders, tag files, and find what you need in seconds." },
              { icon: Share2, title: "Share Securely", description: "Share files and folders with friends and family, with granular permissions." },
              { icon: Zap, title: "Access Anywhere", description: "Your files are always with you, on any device, online or offline." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <h2 className="text-3xl font-medium text-center mb-12">How It Works</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div className="relative z-10 flex justify-between max-w-2xl mx-auto">
              {[
                { step: 1, title: "Sign Up" },
                { step: 2, title: "Upload Files" },
                { step: 3, title: "Organize & Share" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium mb-4">
                    {item.step}
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              "Cloud-ish has transformed how I manage my personal files. It's intuitive, fast, and gives me peace of mind knowing my data is secure."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
              <div>
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm text-gray-600">Freelance Photographer</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-blue-500 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-medium text-white mb-4">Ready to simplify your digital life?</h2>
            <p className="text-blue-100 mb-8">Join Cloud-ish today and experience effortless file management.</p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
              Get started now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="text-xl font-medium">Cloud-ish</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">© 2023 Cloud-ish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

