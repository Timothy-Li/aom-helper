import Link from "next/link";

export default function Atalanta() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Atalanta</h1>
      <p className="text-white mb-6">
        Atalanta was a renowned and swift-footed huntress in Greek mythology.
        She is known for her participation in the Calydonian Boar Hunt and her
        role in the story of the Golden Apples.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Atalanta is a Greek hero who is fast-moving and
        effective against myth units. Her speed and agility make her a valuable
        unit in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
