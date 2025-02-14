import Link from "next/link";

export default function Heracles() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Heracles</h1>
      <p className="text-white mb-6">
        Heracles, also known as Hercules, was a divine hero in Greek mythology,
        the son of Zeus and Alcmene. He is famous for his incredible strength
        and for completing the Twelve Labors.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Heracles is a Greek hero with high damage and is
        effective against myth units. His strength and combat abilities make him
        a formidable opponent in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
