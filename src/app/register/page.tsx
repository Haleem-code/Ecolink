"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
//import { useAppKit } from "@reownkit/appkit"
import { useState } from "react"

export default function Register() {
  
  // const { wallet } = useAppKit()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Handle community registration
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container px-4 py-16">
      <Card className="max-w-md p-6 mx-auto space-y-6 bg-black border border-gray-800">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-wider">REGISTER COMMUNITY</h1>
          <p className="text-sm text-gray-400">Create your community profile and start earning rewards</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Community Name</Label>
            <Input id="name" placeholder="Enter community name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telegram">Telegram URL</Label>
            <Input id="telegram" placeholder="t.me/yourcommunity" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input id="website" placeholder="https://..." />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register Community"}
          </Button>
        </form>
      </Card>
    </div>
  )
}

