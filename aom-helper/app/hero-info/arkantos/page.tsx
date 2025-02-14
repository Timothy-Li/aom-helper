import Link from "next/link";

export default function Arkantos() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Arkantos</h1>
      <p className="text-white mb-6">
        Arkantos is a fictional character in Age of Mythology, representing a
        hero of the Atlantean civilization. He is known for his leadership and
        combat skills, making him a central figure in the game's campaign.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Arkantos is a powerful melee hero with a bonus
        against myth units. He is a versatile and resilient unit, capable of
        leading armies and providing strong offensive capabilities in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
