import Link from "next/link";

export default function Jason() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Jason</h1>
      <p className="text-white mb-6">
        Jason was a legendary Greek hero, famous for his role as the leader of
        the Argonauts and their quest for the Golden Fleece. He was the son of
        Aeson, the rightful king of Iolcos.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Jason is a Greek hero who is effective against myth
        units. He has a strong attack and decent armor, making him a valuable
        asset in battles against mythological creatures.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
