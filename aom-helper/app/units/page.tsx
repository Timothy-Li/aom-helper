import { createClient } from "@supabase/supabase-js";
import UnitCard from "./UnitCard";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or anonymous key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getUnits() {
  const { data: units, error } = await supabase.from("soc_units").select("*");
  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch units");
  }
  return units;
}

export default async function Units() {
  let units = [];
  try {
    units = await getUnits();
  } catch (error) {
    console.error("Error fetching units:", error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Units</h1>
      {units.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      ) : (
        <p className="text-white">No units found.</p>
      )}
    </div>
  );
}
