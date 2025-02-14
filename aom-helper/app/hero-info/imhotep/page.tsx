import Link from "next/link";

export default function Imhotep() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-primary">Imhotep</h1>
      <p className="text-white mb-6">
        Imhotep was an ancient Egyptian polymath, known for his work as an
        architect, physician, and high priest. He is often credited with
        designing the Step Pyramid of Djoser.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Gaming Lore</h2>
      <p className="text-white mb-6">
        In Age of Mythology, Imhotep is an Egyptian hero with healing abilities
        and strong defense. His ability to heal and protect other units makes
        him a valuable support unit in battles.
      </p>
      <Link href="/heroes" className="text-blue-500 hover:underline">
        Back to Heroes
      </Link>
    </div>
  );
}
