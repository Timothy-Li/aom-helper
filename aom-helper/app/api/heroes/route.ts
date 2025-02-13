import { NextResponse } from "next/server"

export async function GET() {
  const apiBaseUrl = process.env.API_BASE_URL

  try {
    const response = await fetch(`${apiBaseUrl}/heroes`, {
      
    })

    if (!response.ok) {
      throw new Error("Failed to fetch heroes")
    }

    const heroes = await response.json()

    if (!Array.isArray(heroes) || heroes.length === 0) {
      return NextResponse.json([], { status: 200 })
    }

    return NextResponse.json(heroes)
  } catch (error) {
    console.error("Error fetching heroes:", error)
    return NextResponse.json({ error: "Failed to fetch heroes" }, { status: 500 })
  }
}

