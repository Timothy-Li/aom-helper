import Link from "next/link";

export default function Gunnar() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Gunnar</h1>
      <p className="text-white mb-6">
        Gunnar is a legendary Norse hero known for his strength and bravery in
        battle. He is often depicted as a powerful warrior with a strong sense
        of honor.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Gunnar is a Norse hero with a strong attack against
        myth units. His combat abilities make him a valuable unit in battles
        against mythological creatures.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
