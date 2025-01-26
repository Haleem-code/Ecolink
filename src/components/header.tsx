import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-16 h-16 mx-auto mb-8 text-yellow-400 animate-pulse" />
          <h1 className="mb-6 text-4xl font-bold tracking-wider md:text-6xl">
            MASTER THE UNIVERSE OF COMMUNITY REWARDS
          </h1>
          <p className="mb-8 text-lg text-gray-400">Track, reward, and grow your community on Solana</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="text-lg">
                LAUNCH APP
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="text-lg">
                DOCS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

