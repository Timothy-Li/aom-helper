interface Hero {
  id: number;
  name: string;
  type: string;
  civilization: string;
  special_ability: string;
  attack: number;
  armor: number;
  speed: number;
  // Add other properties as needed
}

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-2 text-primary">{hero.name}</h2>
      <p className="text-sm text-white mb-2">
        {hero.type} - {hero.civilization}
      </p>
      <p className="text-white mb-2">Special Ability: {hero.special_ability}</p>
      <ul className="text-white mb-2">
        <li>Attack: {hero.attack}</li>
        <li>Armor: {hero.armor}</li>
        <li>Speed: {hero.speed}</li>
      </ul>
    </div>
  );
}
