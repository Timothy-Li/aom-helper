import Link from "next/link";

export default function Kastor() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Kastor</h1>
      <p className="text-white mb-6">
        Kastor is a fictional character in Age of Mythology, representing a hero
        of the Atlantean civilization. He is known for his melee combat skills
        and his effectiveness against myth units.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Kastor is a powerful melee hero with a bonus
        against myth units. He is a valuable asset in battles, providing strong
        offensive capabilities and resilience.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
