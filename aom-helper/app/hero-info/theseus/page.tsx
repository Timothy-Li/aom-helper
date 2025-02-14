import Link from "next/link";

export default function Theseus() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Theseus</h1>
      <p className="text-white mb-6">
        Theseus was a mythical king and founder-hero of Athens. He is best known
        for slaying the Minotaur in the Labyrinth of Crete.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Theseus is a Greek hero who is effective against
        myth units. His combat skills and bravery make him a strong unit in
        battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
