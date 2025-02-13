"use client"

import { useState } from "react"

interface Creature {
  id: number
  name: string
  description: string
}

export default function CreatureCard({ creature }: { creature: Creature }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`card p-6 cursor-pointer transition-all duration-300 ${isExpanded ? "scale-105" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="text-xl font-semibold mb-2 text-primary">{creature.name}</h2>
      {isExpanded && <p className="text-white">{creature.description}</p>}
    </div>
  )
}

