import Link from "next/link";

export default function Amenhotep() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Amenhotep</h1>
      <p className="text-white mb-6">
        Amenhotep was a pharaoh of ancient Egypt, known for his contributions to
        Egyptian architecture and his devotion to the god Amun.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Amenhotep is an Egyptian hero with a ranged attack
        and is effective against myth units. His ability to attack from a
        distance makes him a versatile unit in combat.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
