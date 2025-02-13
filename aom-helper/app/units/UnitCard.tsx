interface Unit {
  id: number;
  name: string;
  type: string;
  civilization: string;
  attack: number;
  armor: number;
  speed: number;
  cost_gold: number;
  cost_food: number;
  cost_wood: number;
  cost_favor: number;
}

export default function UnitCard({ unit }: { unit: Unit }) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-2 text-primary">{unit.name}</h2>
      <p className="text-sm text-white mb-2">
        {unit.type} - {unit.civilization}
      </p>
      <ul className="text-white mb-2">
        <li>Attack: {unit.attack}</li>
        <li>Armor: {unit.armor}</li>
        <li>Speed: {unit.speed}</li>
      </ul>
      <p className="text-white">Cost:</p>
      <ul className="text-white">
        <li>Gold: {unit.cost_gold}</li>
        <li>Food: {unit.cost_food}</li>
        {unit.cost_wood > 0 && <li>Wood: {unit.cost_wood}</li>}
        {unit.cost_favor > 0 && <li>Favor: {unit.cost_favor}</li>}
      </ul>
    </div>
  );
}
