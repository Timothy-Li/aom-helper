import { createClient } from "@supabase/supabase-js";
import HeroCard from "./HeroCard";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or anonymous key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getHeroes() {
  const { data: heroes, error } = await supabase.from("soc_heroes").select("*");
  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch heroes");
  }
  return heroes;
}

export default async function Heroes() {
  let heroes = [];
  try {
    heroes = await getHeroes();
  } catch (error) {
    console.error("Error fetching heroes:", error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Heroes</h1>
      {heroes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <p className="text-white">No heroes found.</p>
      )}
    </div>
  );
}
