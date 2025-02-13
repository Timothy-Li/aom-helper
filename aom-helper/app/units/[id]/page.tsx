import { notFound } from "next/navigation"

const units = [
  {
    id: "hoplite",
    name: "Hoplite",
    type: "Human",
    civilization: "Greek",
    description:
      "Greek infantry unit armed with spear and shield. Hoplites are strong against cavalry but weak against archers.",
    health: 100,
    attack: 10,
    armor: 8,
  },
  {
    id: "minotaur",
    name: "Minotaur",
    type: "Myth",
    civilization: "Greek",
    description:
      "Half-man, half-bull creature from Greek mythology. Minotaurs are powerful melee units that can deal splash damage.",
    health: 300,
    attack: 20,
    armor: 5,
  },
  {
    id: "huskarl",
    name: "Huskarl",
    type: "Human",
    civilization: "Norse",
    description: "Norse infantry unit with high pierce armor. Huskarls are excellent against archers and buildings.",
    health: 120,
    attack: 12,
    armor: 15,
  },
  {
    id: "sphinx",
    name: "Sphinx",
    type: "Myth",
    civilization: "Egyptian",
    description:
      "Creature with the head of a human and the body of a lion. Sphinxes are powerful ranged units that can also heal nearby allies.",
    health: 250,
    attack: 18,
    armor: 7,
  },
  // Add more units as needed
]

export default function UnitPage({ params }: { params: { id: string } }) {
  const unit = units.find((u) => u.id === params.id)

  if (!unit) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">{unit.name}</h1>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <p className="text-white mb-2">
          <span className="font-bold text-primary">Type:</span> {unit.type}
        </p>
        <p className="text-white mb-4">
          <span className="font-bold text-primary">Civilization:</span> {unit.civilization}
        </p>
        <p className="text-white mb-4">{unit.description}</p>
        <h2 className="text-2xl font-bold mb-2 text-primary">Stats</h2>
        <ul className="text-white">
          <li>
            <span className="font-bold text-primary">Health:</span> {unit.health}
          </li>
          <li>
            <span className="font-bold text-primary">Attack:</span> {unit.attack}
          </li>
          <li>
            <span className="font-bold text-primary">Armor:</span> {unit.armor}
          </li>
        </ul>
      </div>
    </div>
  )
}

