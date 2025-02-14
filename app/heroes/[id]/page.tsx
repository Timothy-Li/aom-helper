import { notFound } from "next/navigation"

const heroes = [
  {
    id: "arkantos",
    name: "Arkantos",
    civilization: "Atlantean",
    description:
      "The main protagonist of the Fall of the Trident campaign. Arkantos is a mighty warrior and the guardian of Atlantis.",
    health: 500,
    attack: 20,
    armor: 10,
  },
  {
    id: "ajax",
    name: "Ajax",
    civilization: "Greek",
    description:
      "A Greek hero known for his strength and bravery. Ajax is one of the most powerful melee heroes in the game.",
    health: 600,
    attack: 25,
    armor: 15,
  },
  {
    id: "reginleif",
    name: "Reginleif",
    civilization: "Norse",
    description:
      "A Valkyrie hero in Norse mythology. Reginleif is a powerful ranged hero with the ability to heal nearby units.",
    health: 450,
    attack: 30,
    armor: 8,
  },
  // Add more heroes as needed
]

export default function HeroPage({ params }: { params: { id: string } }) {
  const hero = heroes.find((h) => h.id === params.id)

  if (!hero) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">{hero.name}</h1>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <p className="text-white mb-4">
          <span className="font-bold text-primary">Civilization:</span> {hero.civilization}
        </p>
        <p className="text-white mb-4">{hero.description}</p>
        <h2 className="text-2xl font-bold mb-2 text-primary">Stats</h2>
        <ul className="text-white">
          <li>
            <span className="font-bold text-primary">Health:</span> {hero.health}
          </li>
          <li>
            <span className="font-bold text-primary">Attack:</span> {hero.attack}
          </li>
          <li>
            <span className="font-bold text-primary">Armor:</span> {hero.armor}
          </li>
        </ul>
      </div>
    </div>
  )
}

