import Link from "next/link";

export default function Setna() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Setna</h1>
      <p className="text-white mb-6">
        Setna was a legendary prince and magician in ancient Egyptian mythology,
        known for his wisdom and magical abilities.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Setna is an Egyptian hero with a bonus against myth
        units and powerful spells. His magical abilities make him a versatile
        unit in combat.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
