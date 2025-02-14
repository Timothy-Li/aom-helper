import Link from "next/link";

export default function Ramesses() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Ramesses</h1>
      <p className="text-white mb-6">
        Ramesses, also known as Ramses, was a pharaoh of ancient Egypt, known
        for his military leadership and monumental building projects.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Ramesses is an Egyptian hero with a strong ranged
        attack and is effective against myth units. His powerful attacks make
        him a valuable unit in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
