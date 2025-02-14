import Link from "next/link";

export default function Ragnar() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Ragnar Lothbrok</h1>
      <p className="text-white mb-6">
        Ragnar Lothbrok was a legendary Norse hero and king, known for his
        exploits as a Viking warrior and his raids on France and England.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Ragnar Lothbrok is a powerful Norse hero with a
        bonus against myth units. His strength and combat abilities make him a
        formidable opponent in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
