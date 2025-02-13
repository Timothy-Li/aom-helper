import UnitCard from "./UnitCard"

async function getUnits() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/units`)
  if (!res.ok) {
    throw new Error("Failed to fetch units")
  }
  return res.json()
}

export default async function Units() {
  const units = await getUnits()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Units</h1>
      {units.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      ) : (
        <p className="text-white">No units found.</p>
      )}
    </div>
  )
}

