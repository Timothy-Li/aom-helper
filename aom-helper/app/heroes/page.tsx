import HeroCard from "./HeroCard"

async function getHeroes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/heroes`)
  if (!res.ok) {
    throw new Error("Failed to fetch heroes")
  }
  return res.json()
}

export default async function Heroes() {
  const heroes = await getHeroes()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Heroes</h1>
      {heroes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <p className="text-white">No heroes found.</p>
      )}
    </div>
  )
}

