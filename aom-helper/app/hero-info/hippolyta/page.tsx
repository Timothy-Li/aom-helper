import Link from "next/link";

export default function Hippolyta() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Hippolyta</h1>
      <p className="text-white mb-6">
        Hippolyta was a queen of the Amazons in Greek mythology, known for her
        magical girdle that was given to her by her father Ares, the god of war.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Hippolyta is a Greek hero with a ranged attack and
        is effective against myth units. Her ability to attack from a distance
        makes her a versatile unit in combat.
      </p>
      <Link href="/heroes">
        <a className="text-blue-500 hover:underline">Back to Heroes</a>
      </Link>
    </div>
  );
}
