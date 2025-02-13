import CreatureCard from "./CreatureCard"

const creatures = [
  { id: 1, name: "Minotaur", description: "Half-man, half-bull creature from Greek mythology." },
  { id: 2, name: "Cyclops", description: "One-eyed giant from Greek mythology." },
  { id: 3, name: "Sphinx", description: "Creature with the head of a human and the body of a lion." },
  // Add more creatures as needed
]

export default function MythologicalCreatures() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Mythological Creatures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creatures.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
    </div>
  )
}

