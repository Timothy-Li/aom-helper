import Link from "next/link";

export default function Bellerophon() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Bellerophon</h1>
      <p className="text-white mb-6">
        Bellerophon was a hero of Greek mythology, known for taming the winged
        horse Pegasus and defeating the Chimera. He was the son of the mortal
        Eurynome by either her husband Glaucus, or Poseidon.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Bellerophon is a Greek hero with a leaping attack
        and is effective against myth units. His agility and powerful attacks
        make him a valuable unit in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
