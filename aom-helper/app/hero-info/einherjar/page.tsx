import Link from "next/link";

export default function Einherjar() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Einherjar</h1>
      <p className="text-white mb-6">
        In Norse mythology, the Einherjar are the spirits of warriors who have
        died bravely in battle and are brought to Valhalla by the Valkyries.
        They prepare to aid Odin during Ragnarok.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Einherjar are Norse heroes who are powerful myth
        counters. Their strength and combat abilities make them valuable units
        in battles against mythological creatures.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
