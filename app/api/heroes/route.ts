import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or anonymous key");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data: heroes, error } = await supabase
      .from("SOC_heroes")
      .select("*");

    if (error) {
      throw error;
    }

    if (!Array.isArray(heroes) || heroes.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(heroes);
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return NextResponse.json(
      { error: "Failed to fetch heroes" },
      { status: 500 }
    );
  }
}
