import Link from "next/link";

export default function Odysseus() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Odysseus</h1>
      <p className="text-white mb-6">
        Odysseus was a legendary Greek king of Ithaca and the hero of Homer's
        epic poem the Odyssey. He is known for his cunning intelligence and
        resourcefulness.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Odysseus is a Greek hero with a ranged attack and
        is effective against myth units. His ability to attack from a distance
        makes him a versatile unit in combat.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
