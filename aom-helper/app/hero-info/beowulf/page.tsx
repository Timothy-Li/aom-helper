import Link from "next/link";

export default function Beowulf() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Beowulf</h1>
      <p className="text-white mb-6">
        Beowulf is the hero of the Old English epic poem of the same name. He is
        known for his strength and bravery, particularly in his battles against
        the monster Grendel and a dragon.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Beowulf is a Norse hero with high hack damage and
        is effective against myth units. His combat prowess makes him a valuable
        unit in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
