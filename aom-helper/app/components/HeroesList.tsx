"use client";
import { useState, useEffect } from "react";
import HeroCard from "../heroes/HeroCard";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or anonymous key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

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

async function getHeroes() {
  const { data: heroes, error } = await supabase.from("soc_heroes").select("*");
  if (error) {
    console.error("Supabase error:", error);
    throw new Error("Failed to fetch heroes");
  }
  return heroes as Hero[];
}

export default function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [civilizationFilter, setCivilizationFilter] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const heroes = await getHeroes();
        setHeroes(heroes);
      } catch (error) {
        console.error("Error fetching heroes:", error);
      }
    }
    fetchHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) => {
    return (
      civilizationFilter === null || hero.civilization === civilizationFilter
    );
  });

  return (
    <div>
      <div className="filters mb-6">
        <div className="mb-4">
          <button
            onClick={() => setCivilizationFilter(null)}
            className={`ml-2 p-1 border rounded ${
              civilizationFilter === null
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCivilizationFilter("Greek")}
            className={`ml-2 p-1 border rounded ${
              civilizationFilter === "Greek"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Greek
          </button>
          <button
            onClick={() => setCivilizationFilter("Norse")}
            className={`ml-2 p-1 border rounded ${
              civilizationFilter === "Norse"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Norse
          </button>
          <button
            onClick={() => setCivilizationFilter("Egyptian")}
            className={`ml-2 p-1 border rounded ${
              civilizationFilter === "Egyptian"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Egyptian
          </button>
        </div>
      </div>
      {filteredHeroes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      ) : (
        <p className="text-white">No heroes found.</p>
      )}
    </div>
  );
}
