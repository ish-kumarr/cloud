import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="text-xl font-medium">Cloud-ish</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="#solutions" className="text-sm text-gray-600 hover:text-gray-900">
                Solutions
              </Link>
              <Link href="#resources" className="text-sm text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="text-sm">
                Get demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

